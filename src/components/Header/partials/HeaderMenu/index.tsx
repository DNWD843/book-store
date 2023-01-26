import React, { memo } from 'react';

import { useMatchMedia } from '../../../../hooks';
import { useAppSelector } from '../../../../redux/hooks';
import { selectHeaderActionsState, selectUserData } from '../../../../redux/store';

import { HeaderMenu } from './HeaderMenu';

const HeaderMenuComponent: React.FC<{ menuRef: React.MutableRefObject<HTMLDivElement | null> }> = ({ menuRef }) => {
  const { isDesktop } = useMatchMedia();
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);
  const { isAnonymous } = useAppSelector(selectUserData);

  return (
    <HeaderMenu isAnonymous={isAnonymous} isDesktop={isDesktop} isMenuOpened={isMenuOpened} menuRef={menuRef} />
  );
};

HeaderMenuComponent.displayName = 'HeaderMenuComponent';

const MemoHeaderMenuComponent = memo(HeaderMenuComponent);

export { MemoHeaderMenuComponent as HeaderMenu };
