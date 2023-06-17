import { createUser, fetchUserByEmail } from "@/prisma/PrismaClient";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

type RequestBodyType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  password: string;
};

export async function POST(req: Request, res: Response) {
  const body = (await req.json()) as RequestBodyType;
  const { firstName, lastName, email, phone, city, password } = body;
  const errors: string[] = [];
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  console.log(secret)

  const validationSchema = [
    {
      valid: validator.isLength(firstName, { min: 1, max: 20 }),
      errorMessage: "First name must be between 1 and 20 characters long",
    },
    {
      valid: validator.isLength(lastName, { min: 1, max: 20 }),
      errorMessage: "Last name must be between 1 and 20 characters long",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email field is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone number field is invalid",
    },
    {
      valid: validator.isLength(city, { min: 1, max: 20 }),
      errorMessage: "City field is invalid",
    },
    {
      valid: validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 0,
      }),
      errorMessage: "Password field is not strong enough",
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
  if (user) {
    return new Response(JSON.stringify({ message: "Email is already used" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await createUser({
    first_name: firstName,
    last_name: lastName,
    password: hashedPassword,
    email,
    phone,
    city,
  });

  const algorithm = "HS256";
  // const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  console.log(secret)

  const token = await new jose.SignJWT({
    email: createdUser.email,
  })
    .setProtectedHeader({ alg: algorithm })
    .setExpirationTime("24h")
    .sign(secret);

  return new Response(JSON.stringify({ token }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
