import { observer } from 'mobx-react-lite';
import React, { useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { CLEAR_SEARCH_VALUE_DELAY } from '../../../constants';
import { useClickOutside } from '../../../hooks';
import { routes } from '../../../routesMap';
import { overlaysStore } from '../../../stores';
import { HeaderMenu } from '../partials';

import { DesktopHeader } from './DesktopHeader';

const DesktopHeaderComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { closeMenu, isMenuOpened } = overlaysStore;
  const menuRef = useRef<HTMLDivElement | null>(null);

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  const useClickOutsideEffect = useCallback(() => {
    if (isMenuOpened) {
      const timeout = setTimeout(() => {
        closeMenu();
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }
  }, [closeMenu, isMenuOpened]);

  useClickOutside(useClickOutsideEffect, [menuRef]);

  return (
    <>
      <DesktopHeader isSearchAvailable={isSearchAvailable} />
      <HeaderMenu menuRef={menuRef} />
    </>
  );
};

const ObservableDesktopHeaderComponent = observer(DesktopHeaderComponent);

export { ObservableDesktopHeaderComponent as DesktopHeader };
