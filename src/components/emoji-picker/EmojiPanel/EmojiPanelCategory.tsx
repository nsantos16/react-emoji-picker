interface EmojiPanelCategoryProps {
  categoryName: string;
}

const EmojiPanelCategory = ({ categoryName }: EmojiPanelCategoryProps) => {
  return (
    <h1 className="capitalize col-span-full ml-1 text-sm font-semibold tracking-wide text-blue-400">
      {categoryName}
    </h1>
  );
};

export default EmojiPanelCategory;
