import Image from 'next/image';
import LinkTemplate from '../link-template';

function ProductCard({ product }) {
  const imgUrl = '/temp.png';
  const quickDesc = 'clothing shirt';
  const productId = 1;
  const productName = 'Dumbbell Set';
  const productPrice = 50;

  return (
    <LinkTemplate
      route={`/api/product/${productId}`}
      className="hover:shadow-md"
    >
      <div className="flex flex-col">
        <div>
          <Image
            src={imgUrl}
            alt={quickDesc}
            height={167}
            width={160}
            layout="responsive"
            className="rounded-t-md"
          />
        </div>
        <div className="flex items-center justify-between h-full px-2 py-2 text-black bg-white rounded-b-md">
          <h1 className="text-lg font-medium">{product.name}</h1>
          <h2 className="text-lg font-semibold">${product.price}</h2>
        </div>
      </div>
    </LinkTemplate>
  );
}

export default ProductCard;
