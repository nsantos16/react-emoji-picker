import { useAppSelector } from '../../../state/hooks';
import Input from '../../common/Input';
import EmojiSelector from '../../emoji-picker/EmojiSelector';

const EmojiShowcase = () => {
  const emojis = useAppSelector((state) => state.emoji.value);

  return (
    <div className="flex group-focus:!border-black">
      <EmojiSelector classNames="!rounded-r-none !border-r-0" />
      <Input
        classNames="!rounded-l-none w-72 focus:border-l-0"
        placeholder="Emojis will be here..."
        readOnly={true}
        value={emojis.join(' ')}
      />
    </div>
  );
};

export default EmojiShowcase;
