import ProductCard from '../product-card';
import ButtonTemplate from '../button-template';
import { useState, useEffect } from 'react';

function ResultSection({
  searchResults,
  page,
  pageLimit,
  shownContent = [],
  setShownContent,
  setPage,
  query,
}) {
  const [loading, setLoading] = useState(false);
  const maxPage = Math.ceil(searchResults.length / pageLimit);

  useEffect(() => {
    function loadMorePagination() {
      setLoading(true);
      const startIndex = page * pageLimit;
      const endIndex = (page + 1) * pageLimit;

      setShownContent((prev) => {
        if (shownContent.length === 0) {
          return [...searchResults.slice(startIndex, endIndex)];
        } else {
          return [...prev, ...searchResults.slice(startIndex, endIndex)];
        }
      });
      setLoading(false);
    }

    loadMorePagination();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      {!loading ? (
        <>
          {query && (
            <h4 className="mt-3 text-base font-normal">
              Results for <span className="italic">{query}</span> :
            </h4>
          )}
          <div className="grid grid-cols-2 gap-2 mt-5">
            {shownContent.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {page < maxPage - 1 ? (
            <ButtonTemplate
              onClick={() => setPage((prev) => prev + 1)}
              className="flex justify-center w-full px-1 mt-5 text-lg font-medium rounded bg-secondary text-accent-two"
            >
              Load More
            </ButtonTemplate>
          ) : (
            ''
          )}
        </>
      ) : (
        <div>Loading Content....</div>
      )}
    </div>
  );
}

export default ResultSection;
