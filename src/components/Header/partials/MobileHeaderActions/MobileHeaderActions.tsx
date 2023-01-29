import React, { memo } from 'react';

import {
  menuIconMobile,
  menuIconTablet,
  savedSearchIconMobile, savedSearchIconTablet,
  searchIconMobile, searchIconTablet,
} from '../../../../vendor/icons';
import { MobileHeaderActionButton } from '../MobileHeaderActionButton';

import { TMobileHeaderActionsProps } from './MobileHeaderActions.props';

const MobileHeaderActions: React.FC<TMobileHeaderActionsProps> = (
  { isSearchAvailable, isMenuVisible, isSearchFilterEmpty, isSearchFilterVisible, showSearchFilter, showMenu },
) => (
  <>
    {isSearchAvailable
      ? (
        <MobileHeaderActionButton
          action={showSearchFilter}
          isPressed={isSearchFilterVisible}
          mobileIcon={isSearchFilterEmpty ? searchIconMobile : savedSearchIconMobile}
          tabletIcon={isSearchFilterEmpty ? searchIconTablet : savedSearchIconTablet}
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
