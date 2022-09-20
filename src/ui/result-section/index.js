import ProductCard from '../product-card';
import ButtonTemplate from '../button-template';
import { useState, useEffect } from 'react';

function ResultSection({
  value = undefined,
  pageInfo,
  page,
  setPage,
  content,
  setContent,
}) {
  const { maxPage, pages } = pageInfo;

  const loadMore = () => {
    if (page < maxPage) setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const loader = () => {
      if (pages === undefined) return;

      setContent((prev) => {
        let products = pages[page].map((product) => (
          <ProductCard key={product.id} product={product} />
        ));

        if (page === 0) return [...products];

        return [...prev, ...products];
      });
    };

    loader();

    console.log(content);
  }, [page]);

  return (
    <div>
      {value && (
        <h4 className="mt-3 text-base font-normal">
          Results for <span className="italic">{value}</span> :
        </h4>
      )}
      {pages !== undefined ? (
        <div>
          <div className="grid grid-cols-2 gap-2 mt-5">{content}</div>
          {page < maxPage - 1 ? (
            <ButtonTemplate
              onClick={loadMore}
              className="flex justify-center w-full px-1 mt-5 text-lg font-medium rounded bg-secondary text-accent-two"
            >
              Load More
            </ButtonTemplate>
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-[20%]">
          No Results
        </div>
      )}
    </div>
  );
}

export default ResultSection;
