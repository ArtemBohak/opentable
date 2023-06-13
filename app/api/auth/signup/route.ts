import { NextApiRequest, NextApiResponse } from "next";
import { createUser, fetchUserByEmail } from "@/prisma/PrismaClient";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;
    const errors: string[] = [];

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
        valid: validator.isStrongPassword(password),
        errorMessage: "Password field is not strong enough",
      },
    ];

    validationSchema.forEach((item) => {
      if (!item.valid) {
        errors.push(item.errorMessage);
      }
    });

    if (errors.length > 0) {
      return res.status(400).json({ message: errors[0] });
    }

    const user = await fetchUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "Email is already used" });
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
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: createdUser.email,
    })
      .setProtectedHeader({ alg: algorithm })
      .setExpirationTime("24h")
      .sign(secret);

    return res.status(200).json({ token });
  }
  res.status(404).json("Unknown endpoint");
}

export { handler as GET, handler as POST };
