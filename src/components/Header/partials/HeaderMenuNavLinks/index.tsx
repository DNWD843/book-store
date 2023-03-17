import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';

import { overlaysStore, uiStore, userStore } from '../../../../stores';

import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import {
  anonymousMobileHeaderMenuLinksConfig,
  desktopHeaderMenuLinksConfig,
  mobileHeaderMenuLinksConfig,
} from './configs';

const HeaderMenuNavLinksComponent = () => {
  const { closeMenu } = overlaysStore;
  const { isAnonymous } = userStore.user;
  const { isDesktop } = uiStore.screen;

  const config = useMemo(() => {
    if (isDesktop) {
      return desktopHeaderMenuLinksConfig;
    }

    if (isAnonymous) {
      return anonymousMobileHeaderMenuLinksConfig;
    }

    return mobileHeaderMenuLinksConfig;
  }, [isAnonymous, isDesktop]);

  return (
    <HeaderMenuNavLinks closeMenu={closeMenu} navLinksConfig={config} />
  );
};

HeaderMenuNavLinksComponent.displayName = 'HeaderMenuNavLinksComponent';

const ObservableHeaderMenuNavLinksComponent = observer(HeaderMenuNavLinksComponent);

export { ObservableHeaderMenuNavLinksComponent as HeaderMenuNavLinks };
