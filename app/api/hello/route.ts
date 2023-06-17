import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return new NextResponse("Hello from API", {
    headers: { "Content-Type": "text/plain" },
    status: 200,
  });
}
