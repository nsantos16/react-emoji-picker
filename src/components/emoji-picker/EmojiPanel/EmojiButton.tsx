import cn from 'classnames';
import { useAppDispatch } from '../../../state/hooks';
import { addEmoji } from '../../../state/slices/emojiSlice';

interface EmojiButtonProps {
  emoji: string;
  tooltipTitle: string;
}

const BACKGROUND_HOVER_COLORS = [
  'hover:bg-red-400',
  'hover:bg-pink-400',
  'hover:bg-orange-400',
  'hover:bg-blue-400',
  'hover:bg-yellow-400',
];

const EmojiButton = ({ emoji, tooltipTitle }: EmojiButtonProps) => {
  const dispatch = useAppDispatch();
  const onSelectEmoji = () => {
    dispatch(addEmoji(emoji));
  };

  return (
    <button
      type="button"
      className={cn(
        'col-span-1 text-xl rounded px-1',
        BACKGROUND_HOVER_COLORS[
          Math.floor(Math.random() * BACKGROUND_HOVER_COLORS.length)
        ],
      )}
      title={tooltipTitle}
      onClick={onSelectEmoji}
    >
      {emoji}
    </button>
  );
};

export default EmojiButton;
