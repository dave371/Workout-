import Home from '../features/home-page';
import prisma from '../utils/db';

const HomePage = ({ products }) => {
  return <Home products={products} />;
};

export default HomePage;

export async function getServerSideProps() {
  const products = await prisma.products.findMany();

  return {
    props: {
      products,
    },
  };
}
