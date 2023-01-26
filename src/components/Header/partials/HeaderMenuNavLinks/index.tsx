import React, { memo, useCallback, useMemo } from 'react';

import { useMatchMedia } from '../../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectUserData } from '../../../../redux/store';

import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import {
  anonymousMobileHeaderMenuLinksConfig,
  desktopHeaderMenuLinksConfig,
  mobileHeaderMenuLinksConfig,
} from './configs';

const HeaderMenuNavLinksComponent = () => {
  const { isDesktop } = useMatchMedia();
  const dispatch = useAppDispatch();
  const { closeMenu } = headerActions;
  const { isAnonymous } = useAppSelector(selectUserData);

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

const MemoHeaderMenuNavLinksComponent = memo(HeaderMenuNavLinksComponent);

export { MemoHeaderMenuNavLinksComponent as HeaderMenuNavLinks };
