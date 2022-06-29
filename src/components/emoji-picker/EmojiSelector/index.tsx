import cn from 'classnames';
import { EmojiHappyIcon } from '@heroicons/react/outline';

interface EmojiSelectorProps {
  classNames?: string;
}

const EmojiSelector = ({ classNames }: EmojiSelectorProps) => {
  return (
    <div
      className={cn(
        'border-gray-400 border-2 rounded-lg p-4 cursor-pointer group-hover:text-gray-400',
        classNames,
      )}
    >
      <EmojiHappyIcon className="text-gray-400 hover:text-black w-6 h-6" />
    </div>
  );
};

export default EmojiSelector;
