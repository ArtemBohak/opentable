// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
  // res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient();
  const restaurants = await prisma.restaurant.findMany();
  res.status(200).json(restaurants)
}
