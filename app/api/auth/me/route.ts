import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: "Unauthorized request" });
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized request" });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch {
    return res.status(401).json({ message: "Unauthorized request" });
  }

  return res.status(200).json({ me: "Artem" });
}
