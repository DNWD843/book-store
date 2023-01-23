import React, { memo, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectHeaderActionsState, selectUserData } from '../../../../redux/store';
import { routes } from '../../../../routesMap';

import { MobileHeaderActions } from './MobileHeaderActions';

const MobileHeaderActionsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { openMenu, openSearchFilter } = headerActions;
  const { isMenuOpened, isSearchFilterOpened } = useAppSelector(selectHeaderActionsState);
  const { isAnonymous } = useAppSelector(selectUserData);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  const showSearchFilter = useCallback(() => { dispatch(openSearchFilter()); }, [dispatch, openSearchFilter]);
  const showMenu = useCallback(() => { dispatch(openMenu()); }, [dispatch, openMenu]);
  const goToLogin = useCallback(() => { navigate(routes.login); }, [navigate]);

  return (
    <MobileHeaderActions
      anonymousAction={goToLogin}
      isAnonymous={isAnonymous}
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
