import { observer } from 'mobx-react-lite';
import React from 'react';

import { overlaysStore, uiStore, userStore } from '../../../../stores';

import { DesktopMenuButton } from './DesktopMenuButton';

const DesktopMenuButtonComponent: React.FC = () => {
  const { isMenuOpened, openMenu, closeMenu } = overlaysStore;
  const { isAnonymous } = userStore.user;
  const { isDesktop } = uiStore.screen;

  return (
    <DesktopMenuButton
      closeMenu={!isDesktop ? closeMenu : undefined}
      disabled={isDesktop ? isMenuOpened : !isAnonymous}
      isAnonymous={isAnonymous}
      onMenuButtonClick={openMenu}
    />
  );
};

DesktopMenuButtonComponent.displayName = 'DesktopMenuButtonComponent';

const ObservableComponent = observer(DesktopMenuButtonComponent);

export { ObservableComponent as DesktopMenuButton };
