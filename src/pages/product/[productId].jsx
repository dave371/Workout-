import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import ButtonTemplate from '../../ui/button-template';
import DefaultPageLayout from '../../ui/default-page-layout';
import prisma from '../../utils/db';

function ProductPage({ product }) {
  console.log(product);

  return (
    <div>
      <DefaultPageLayout>
        <Product product={product[0]} />
      </DefaultPageLayout>
    </div>
  );
}

export default ProductPage;

function Product({ product }) {
  const { name, price } = product;
  const [counter, setCounter] = useState(1);

  return (
    <div className="text-secondary">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="w-full my-4 bg-white h-72" />
      <div className="flex gap-2">
        <span className="text-2xl font-semibold">${price}</span>
        <span className="self-end text-base font-normal">In Stock</span>
      </div>
      <div className="my-4">
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg">Qty:</span>
          <div className="flex items-center">
            <ButtonTemplate
              onClick={() => setCounter((prev) => prev + 1)}
              className="border-transparent rounded-l bg-secondary"
            >
              <PlusIcon className="w-6 h-6 text-accent-two" />
            </ButtonTemplate>
            <span className="px-2 text-lg">{counter}</span>
            <ButtonTemplate
              onClick={() => setCounter((prev) => prev - 1)}
              className="border-transparent rounded-r bg-secondary"
            >
              <MinusIcon className="w-6 h-6 text-accent-two" />
            </ButtonTemplate>
          </div>
        </div>
      </div>
      <ButtonTemplate className="w-full px-1 py-2 rounded bg-secondary text-accent-two">
        <span className="text-lg font-medium">Add to Cart</span>
      </ButtonTemplate>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { productId } = ctx.params;

  const product = await prisma.products.findMany({
    where: {
      id: productId,
    },
  });

  return {
    props: {
      product,
    },
  };
}
