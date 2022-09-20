import prisma from '../../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const productList = await prisma.products.findMany({
      take: 6,
    });

    res.status(200).json(productList);
  }
}
