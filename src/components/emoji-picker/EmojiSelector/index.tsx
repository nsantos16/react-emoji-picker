import cn from 'classnames';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import EmojiProvider from '../EmojiPanelProvider';
import { useState } from 'react';

interface EmojiSelectorProps {
  classNames?: string;
}

const EmojiSelector = ({ classNames }: EmojiSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EmojiProvider isOpen={isOpen}>
      <button
        type="button"
        className={cn(
          'border-gray-400 text-gray-400 border-2 rounded-lg p-4 cursor-pointer hover:text-black group',
          classNames,
          { 'text-black': isOpen, 'bg-slate-200': isOpen },
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <EmojiHappyIcon className="group-hover:text-black w-6 h-6" />
      </button>
    </EmojiProvider>
  );
};

export default EmojiSelector;
