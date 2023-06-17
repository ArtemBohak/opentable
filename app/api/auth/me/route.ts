import * as jose from "jose";
import jwt from "jsonwebtoken";
import { fetchUserByEmail } from "@/prisma/PrismaClient";

export async function GET(req: Request, res: Response) {
  const bearerToken = req.headers.get("authorization") as string;
  const token = bearerToken.split(" ")[1];
  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return new Response(JSON.stringify({ message: "Unauthorized request" }), {
      headers: { "Content-Type": "application/json" },
      status: 401,
    });
  }

  const user = await fetchUserByEmail(payload.email, { id: true, email: true });
  return new Response(JSON.stringify({ user }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
