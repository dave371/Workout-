import TextField from '../text-field';
import ButtonTemplate from '../button-template';
import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function SearchSection({ setQueryValue }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    setQueryValue(searchValue);
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="w-[98%]">
          <TextField
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Search for a product"
            labeled={false}
            fieldName="query"
            className="w-full p-2 text-base font-normal text-black rounded"
          />
        </div>

        <div className="ml-1">
          <ButtonTemplate
            onClick={handleSearch}
            className="p-2 rounded bg-accent-one"
          >
            <SearchIcon className="w-6 h-6" />
          </ButtonTemplate>
        </div>
      </div>
      <div>
        <ButtonTemplate
          onClick={() => alert('filter menu')}
          className="w-full py-1 mt-2 text-base font-semibold rounded bg-secondary text-accent-two"
        >
          <span>Filter</span>
        </ButtonTemplate>
      </div>
    </div>
  );
}

export default SearchSection;
