import React, { memo, useMemo } from 'react';

import { useMatchMedia } from '../../../../hooks';

import { HeaderMenuNavLinks } from './HeaderMenuNavLinks';
import { desktopHeaderMenuLinksConfig, mobileHeaderMenuLinksConfig } from './configs';

const HeaderMenuNavLinksComponent = () => {
  const { isDesktop } = useMatchMedia();

  const config = useMemo(() => {
    if (isDesktop) {
      return desktopHeaderMenuLinksConfig;
    }

    return mobileHeaderMenuLinksConfig;
  }, [isDesktop]);

  return (
    <HeaderMenuNavLinks navLinksConfig={config} />
  );
};

HeaderMenuNavLinksComponent.displayName = 'HeaderMenuNavLinksComponent';

const MemoHeaderMenuNavLinksComponent = memo(HeaderMenuNavLinksComponent);

export { MemoHeaderMenuNavLinksComponent as HeaderMenuNavLinks };
