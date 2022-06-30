import React, { Children, cloneElement, useMemo, useState } from 'react';
import { usePopper } from 'react-popper';
import EmojiPanel from '../EmojiPanel';

interface EmojiProviderProps {
  children: React.ReactNode;
  isOpen?: boolean;
}

const EmojiPanelProvider = ({
  children,
  isOpen = true,
}: EmojiProviderProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  const EmojiPanelMemoComponent = useMemo(
    () => (
      <div
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        id="tooltip"
        role="tooltip"
        className="bg-gray-50 shadow-sm shadow-black/30 rounded-md w-[305px]"
      >
        <EmojiPanel />
        <div
          ref={setArrowElement}
          id="arrow"
          style={styles.arrow}
          data-popper-arrow
        />
      </div>
    ),
    [attributes.popper, styles.arrow, styles.popper],
  );

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement<any>, {
          ref: setReferenceElement,
        }),
      )}
      {isOpen ? EmojiPanelMemoComponent : null}
    </>
  );
};

export default EmojiPanelProvider;
