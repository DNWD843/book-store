import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from '../../../../routesMap';
import { booksStore, overlaysStore } from '../../../../stores';

import { MobileHeaderActions } from './MobileHeaderActions';

const MobileHeaderActionsComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { openMenu, openSearchFilter, isMenuOpened, isSearchFilterOpened } = overlaysStore;
  const filteredCollection = toJS(booksStore.filteredCollection);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  return (
    <MobileHeaderActions
      isMenuVisible={isMenuOpened}
      isSearchAvailable={isSearchAvailable}
      isSearchFilterEmpty={!filteredCollection}
      isSearchFilterVisible={isSearchFilterOpened}
      showMenu={openMenu}
      showSearchFilter={openSearchFilter}
    />
  );
};

MobileHeaderActionsComponent.displayName = 'MobileHeaderActionsComponent';

const ObserverMobileHeaderActionsComponent = observer(MobileHeaderActionsComponent);

export { ObserverMobileHeaderActionsComponent as MobileHeaderActions };
