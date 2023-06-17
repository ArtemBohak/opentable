import { fetchUserByEmail } from "@/prisma/PrismaClient";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

type RequestBodyType = {
  email: string;
  password: string;
};

export async function POST(req: Request, res: Response) {
  const errors: string[] = [];
  const body = (await req.json()) as RequestBodyType;
  const { email, password } = body;

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      errorMessage: "Email field is invalid",
    },
    {
      valid: validator.isLength(password, { min: 1 }),
      errorMessage: "Password field is invalid",
    },
  ];

  validationSchema.forEach((item) => {
    if (!item.valid) {
      errors.push(item.errorMessage);
    }
  });

  if (errors.length > 0) {
    return new Response(JSON.stringify({ message: errors[0] }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }

  const user = await fetchUserByEmail(email);
  if (!user) {
    return new Response(
      JSON.stringify({ message: "Email or password is invalid" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  const isMatch = await bcrypt.compare(password, user.password!);
  if (!isMatch) {
    return new Response(
      JSON.stringify({ message: "Email or password is invalid" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  const algorithm = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({
    email: user.email,
  })
    .setProtectedHeader({ alg: algorithm })
    .setExpirationTime("24h")
    .sign(secret);

  return new Response(JSON.stringify({ token }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
