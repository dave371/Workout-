import ButtonTemplate from '../button-template';
import ProductCard from '../product-card';

function DefaultResultSection({ products }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ButtonTemplate className="flex justify-center w-full px-1 mt-5 text-lg font-medium rounded bg-secondary text-accent-two">
        Load More
      </ButtonTemplate>
    </div>
  );
}

export default DefaultResultSection;
