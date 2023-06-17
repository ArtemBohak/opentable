import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const bearerToken = req.headers.get("authorization");
  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ message: "Unauthorized request" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 401,
      }
    );
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "Unauthorized request" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 401,
      }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch {
    return new NextResponse(
      JSON.stringify({ message: "Unauthorized request" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 401,
      }
    );
  }
}

export const config = {
  // matcher: ["/api/:path*"],
  matcher: "/api/auth/me",
};
