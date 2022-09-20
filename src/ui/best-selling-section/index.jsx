import { ArrowNarrowRightIcon } from '@heroicons/react/outline';
import LinkTemplate from '../link-template';
import ProductCard from '../product-card';

function BestSellingSection({ products }) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-7">
        <h1 className="text-2xl font-bold">Best Selling </h1>
        <LinkTemplate
          route="/shop"
          className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-sm bg-secondary text-accent-two"
        >
          See More <ArrowNarrowRightIcon className="w-4 h-4" />
        </LinkTemplate>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default BestSellingSection;
