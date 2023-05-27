import { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const ENTER_KEY = 'Enter';

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    onSearch(value);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY) {
      handleSearch();
    }
  };

  return (
    <div className="ml-4 flex w-full items-center rounded-md border-[1.5px] border-gray-300">
      <input
        className="w-full p-1.5 text-sm focus:outline-none"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChangeSearch}
        onKeyDown={handleKeydown}
      />
      <button onClick={handleSearch} type="submit" className="mx-2">
        <FiSearch className="h-6 w-6" />
      </button>
    </div>
  );
};

export default memo(SearchInput);
