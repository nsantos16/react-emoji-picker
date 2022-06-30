import { useMemo } from 'react';
import { emojisGroup } from '../../../constants/emojis';
import { useAppSelector } from '../../../state/hooks';
import EmojiSearch from '../EmojiSearch';
import EmojiButton from './EmojiButton';
import EmojiPanelCategory from './EmojiPanelCategory';

const EmojiPanel = () => {
  const searchKeyword = useAppSelector((state) => state.emoji.searchFilter);

  const onFilterEmojiGroupByKeyword = (searchKeyword: string) => {
    const filteredEmojis = Object.keys(emojisGroup).reduce((acc, group) => {
      const filteredEmojis = emojisGroup[group].filter(({ keywordSet }) =>
        keywordSet.some((keyword) =>
          keyword.startsWith(searchKeyword.toLowerCase()),
        ),
      );

      if (filteredEmojis.length > 0) {
        return { ...acc, [group]: filteredEmojis };
      }

      return acc;
    }, {});
    return filteredEmojis;
  };

  const emojiFilteredGroup = useMemo(
    () =>
      searchKeyword !== ''
        ? onFilterEmojiGroupByKeyword(searchKeyword)
        : emojisGroup,
    [searchKeyword],
  );

  return (
    <div className="relative overflow-auto h-64 rounded pt-2 px-1 space-y-3">
      <EmojiSearch />
      <div className="px-2 space-y-2">
        {Object.keys(emojiFilteredGroup).map((category) => (
          <div key={category} className="grid grid-cols-8 gap-x-2 gap-y-1">
            <EmojiPanelCategory categoryName={category} />
            {emojiFilteredGroup[category].map(({ emoji, name }) => (
              <EmojiButton key={emoji} emoji={emoji} tooltipTitle={name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiPanel;
