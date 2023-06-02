import clsx from 'clsx';
import { ChangeEvent, KeyboardEvent, memo, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from '@/components/button';

const ENTER_KEY = 'Enter';

const SearchInput = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [value, setValue] = useState('');

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_KEY && value.trim()?.length > 0) {
      onSearch(value);
    }
  };

  const handleClick = () => {
    if (value.trim()?.length > 0) {
      onSearch(value);
    }
  };

  return (
    <div
      className={clsx(
        'relative ml-4 flex w-full items-center rounded-md border-[1.5px] border-gray-300 px-2 py-[6.5px]',
        'focus-within:border-[1.5px] focus-within:border-blue-700'
      )}
    >
      <input
        className="text-md w-full placeholder:text-gray-600 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChangeSearch}
        onKeyDown={handleKeydown}
      />
      <Button onClick={handleClick} variant="text" className="absolute right-0 h-full px-2 py-0">
        <FiSearch className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default memo(SearchInput);

SearchInput.displayName = 'SearchInput';
