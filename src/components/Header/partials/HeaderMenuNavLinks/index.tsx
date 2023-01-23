import React, { memo, useCallback, useMemo } from 'react';

import { useMatchMedia } from '../../../../hooks';
import { useAppDispatch } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';

import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import { desktopHeaderMenuLinksConfig, mobileHeaderMenuLinksConfig } from './configs';

const HeaderMenuNavLinksComponent = () => {
  const { isDesktop } = useMatchMedia();
  const dispatch = useAppDispatch();
  const { closeMenu } = headerActions;

  const config = useMemo(() => {
    if (isDesktop) {
      return desktopHeaderMenuLinksConfig;
    }

    return mobileHeaderMenuLinksConfig;
  }, [isDesktop]);
  const closeHeaderMenu = useCallback(() => { dispatch(closeMenu()); }, [closeMenu, dispatch]);

  return (
    <HeaderMenuNavLinks closeMenu={closeHeaderMenu} navLinksConfig={config} />
  );
};

HeaderMenuNavLinksComponent.displayName = 'HeaderMenuNavLinksComponent';

const MemoHeaderMenuNavLinksComponent = memo(HeaderMenuNavLinksComponent);

export { MemoHeaderMenuNavLinksComponent as HeaderMenuNavLinks };
