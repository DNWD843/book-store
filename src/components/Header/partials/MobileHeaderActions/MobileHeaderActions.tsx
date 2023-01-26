import React, { memo } from 'react';

import { menuIconMobile, menuIconTablet, searchIconMobile, searchIconTablet } from '../../../../vendor/icons';
import { MobileHeaderActionButton } from '../MobileHeaderActionButton';

import { TMobileHeaderActionsProps } from './MobileHeaderActions.props';

const MobileHeaderActions: React.FC<TMobileHeaderActionsProps> = (
  { isSearchAvailable, isMenuVisible, isSearchFilterVisible, showSearchFilter, showMenu },
) => (
  <>
    {isSearchAvailable
      ? (
        <MobileHeaderActionButton
          action={showSearchFilter}
          isPressed={isSearchFilterVisible}
          mobileIcon={searchIconMobile}
          tabletIcon={searchIconTablet}
        />
      ) : null}
    <MobileHeaderActionButton
      action={showMenu}
      isPressed={isMenuVisible}
      mobileIcon={menuIconMobile}
      tabletIcon={menuIconTablet}
    />
  </>
);

MobileHeaderActions.displayName = 'MobileHeaderActions';

const MemoMobileHeaderActions = memo(MobileHeaderActions);

export { MemoMobileHeaderActions as MobileHeaderActions };
