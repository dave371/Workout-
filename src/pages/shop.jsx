import { useState, useEffect } from 'react';
import SearchSection from '../ui/search-section';
import DefaultPageLayout from '../ui/default-page-layout';
import ProductCard from '../ui/product-card';

const ShopPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [queryValue, setQueryValue] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  const handleSearch = async () => {
    const response = await fetch(
      `/api/product/searchProducts/?searchValue=${
        searchValue ? searchValue : ''
      }`
    );

    const data = await response.json();

    setResults(data);
    setQueryValue(searchValue);
    setPage(0);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultPageLayout>
      <h1 className="mb-6 text-2xl font-extrabold ">Shop</h1>
      <SearchSection
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ResultsSection
        products={results}
        queryValue={queryValue}
        page={page}
        setPage={setPage}
      />
    </DefaultPageLayout>
  );
};

export default ShopPage;

function ResultsSection({ products, queryValue }) {
  return (
    <div>
      {queryValue && (
        <h4 className="mt-3 text-base font-normal">
          Results for <span className="italic">{queryValue}</span> :
        </h4>
      )}

      {products.length !== 0 ? (
        <div className="grid grid-cols-2 gap-2 mt-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-[20%] text-2xl font-medium">
          No Results
        </div>
      )}
    </div>
  );
}
