import React, { memo } from 'react';

import { useMatchMedia } from '../../../../hooks';
import { useAppSelector } from '../../../../redux/hooks';
import { selectHeaderActionsState } from '../../../../redux/store';

import { HeaderMenu } from './HeaderMenu';

const HeaderMenuComponent: React.FC<{ menuRef: React.MutableRefObject<HTMLDivElement | null> }> = ({ menuRef }) => {
  const { isDesktop } = useMatchMedia();
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);

  return (
    <HeaderMenu isMenuOpened={isMenuOpened} isShortInfoVisible={!isDesktop} menuRef={menuRef} />
  );
};

HeaderMenuComponent.displayName = 'HeaderMenuComponent';

const MemoHeaderMenuComponent = memo(HeaderMenuComponent);

export { MemoHeaderMenuComponent as HeaderMenu };
