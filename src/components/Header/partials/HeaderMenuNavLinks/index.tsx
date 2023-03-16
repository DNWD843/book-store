import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo } from 'react';

import { useAppDispatch } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { uiStore, userStore } from '../../../../stores';

import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import {
  anonymousMobileHeaderMenuLinksConfig,
  desktopHeaderMenuLinksConfig,
  mobileHeaderMenuLinksConfig,
} from './configs';

const HeaderMenuNavLinksComponent = () => {
  const dispatch = useAppDispatch();
  const { closeMenu } = headerActions;
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
  const closeHeaderMenu = useCallback(() => { dispatch(closeMenu()); }, [closeMenu, dispatch]);

  return (
    <HeaderMenuNavLinks closeMenu={closeHeaderMenu} navLinksConfig={config} />
  );
};

HeaderMenuNavLinksComponent.displayName = 'HeaderMenuNavLinksComponent';

const ObservableHeaderMenuNavLinksComponent = observer(HeaderMenuNavLinksComponent);

export { ObservableHeaderMenuNavLinksComponent as HeaderMenuNavLinks };
