import React, { memo, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectHeaderActionsState } from '../../../../redux/store';
import { routes } from '../../../../routesMap';

import { MobileHeaderActions } from './MobileHeaderActions';

const MobileHeaderActionsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { openMenu, openSearchFilter } = headerActions;
  const { isMenuOpened, isSearchFilterOpened } = useAppSelector(selectHeaderActionsState);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  const showSearchFilter = useCallback(() => { dispatch(openSearchFilter()); }, [dispatch, openSearchFilter]);
  const showMenu = useCallback(() => { dispatch(openMenu()); }, [dispatch, openMenu]);

  return (
    <MobileHeaderActions
      isMenuVisible={isMenuOpened}
      isSearchAvailable={isSearchAvailable}
      isSearchFilterVisible={isSearchFilterOpened}
      showMenu={showMenu}
      showSearchFilter={showSearchFilter}
    />
  );
};

MobileHeaderActionsComponent.displayName = 'MobileHeaderActionsComponent';

const MemoMobileHeaderActionsComponent = memo(MobileHeaderActionsComponent);

export { MemoMobileHeaderActionsComponent as MobileHeaderActions };
