import { useState, useEffect } from 'react';
import SearchSection from '../../ui/search-section';
import DefaultPageLayout from '../../ui/default-page-layout';
import ResultSection from '../../ui/result-section';

const Shop = () => {
  const [queryValue, setQueryValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [pageLimit, setPageLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [shownContent, setShownContent] = useState([]);

  useEffect(() => {
    console.log('mount');
    setCurrentPage(0);
    setShownContent([]);

    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `/api/product/searchProducts/?searchValue=${queryValue}`
      );

      const data = await response.json();

      setSearchResults(data);

      setIsLoading(false);
    };

    fetchData();

    return () => {
      console.log('unmount');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryValue]);

  return (
    <DefaultPageLayout>
      <h1 className="mb-6 text-2xl font-extrabold ">Shop</h1>
      <SearchSection setQueryValue={setQueryValue} />
      {!isLoading && (
        <ResultSection
          searchResults={searchResults}
          page={currentPage}
          setPage={setCurrentPage}
          pageLimit={pageLimit}
          shownContent={shownContent}
          setShownContent={setShownContent}
          query={queryValue}
        />
      )}
    </DefaultPageLayout>
  );
};

export default Shop;
