import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { onSearch as onSearchAction } from '../../../state/slices/emojiSlice';
import { useAppDispatch } from '../../../state/hooks';

const EmojiSearch = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(onSearchAction(e.target.value));
  };

  return (
    <div className="relative w-full flex items-center">
      <SearchIcon className="w-4 h-4 ml-2 absolute pointer-events-none" />
      <input
        value={search}
        onChange={onSearch}
        className="rounded pl-7 border border-gray-200 px-2 py-1 w-full text-sm"
      />
    </div>
  );
};

export default EmojiSearch;
