// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/prisma/PrismaClient";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// type Data = {
//   name: string
// }

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<any>
  // res: NextApiResponse<Data>
) {
  const restaurants = await prisma.restaurant.findMany();
  // res.status(200).json(restaurants);
  return NextResponse.json({ restaurants });
}
