import { observer } from 'mobx-react-lite';
import React from 'react';

import { overlaysStore, uiStore, userStore } from '../../../../stores';

import { HeaderMenu } from './HeaderMenu';

const HeaderMenuComponent: React.FC<{ menuRef: React.MutableRefObject<HTMLDivElement | null> }> = ({ menuRef }) => {
  const { isDesktop } = uiStore.screen;
  const { isMenuOpened } = overlaysStore;
  const { isAnonymous } = userStore.user;

  return (
    <HeaderMenu isAnonymous={isAnonymous} isDesktop={isDesktop} isMenuOpened={isMenuOpened} menuRef={menuRef} />
  );
};

HeaderMenuComponent.displayName = 'HeaderMenuComponent';

const ObservableHeaderMenuComponent = observer(HeaderMenuComponent);

export { ObservableHeaderMenuComponent as HeaderMenu };
