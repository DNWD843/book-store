import { observer } from 'mobx-react-lite';
import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import { selectHeaderActionsState } from '../../../../redux/store';
import { uiStore, userStore } from '../../../../stores';

import { HeaderMenu } from './HeaderMenu';

const HeaderMenuComponent: React.FC<{ menuRef: React.MutableRefObject<HTMLDivElement | null> }> = observer(({ menuRef }) => {
  const { isDesktop } = uiStore.screen;
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);
  const { isAnonymous } = userStore.user;

  console.log('HeaderMenuComponent isAnonymous', userStore.user.isAnonymous);

  return (
    <HeaderMenu isAnonymous={isAnonymous} isDesktop={isDesktop} isMenuOpened={isMenuOpened} menuRef={menuRef} />
  );
});

HeaderMenuComponent.displayName = 'HeaderMenuComponent';

export { HeaderMenuComponent as HeaderMenu };
