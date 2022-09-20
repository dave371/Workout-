import prisma from '../../../utils/db';
import pagination from '../../../utils/pagination';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { searchValue, category, order } = req.query;

    const productList = await prisma.products.findMany({
      where: {
        name: {
          contains: searchValue,
          mode: 'insensitive',
        },
      },
    });

    if (productList.length === 0) {
      // look at error codes for this situation
      res.status(200).json([]);
      return;
    }

    res.status(200).json(productList);
  }
}
