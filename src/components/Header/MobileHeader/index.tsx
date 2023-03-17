import { observer } from 'mobx-react-lite';
import React, { useCallback, useRef } from 'react';

import { CLEAR_SEARCH_VALUE_DELAY } from '../../../constants';
import { useClickOutside } from '../../../hooks';
import { overlaysStore } from '../../../stores';
import { BookSearchFilter } from '../../BookSearchFilter';
import { HeaderMenu } from '../partials';

import { MobileHeader } from './MobileHeader';

const MobileHeaderComponent: React.FC = () => {
  const { isMenuOpened, isSearchFilterOpened, closeMenu, closeSearchFilter } = overlaysStore;

  const searchFilterRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const useClickOutsideEffect = useCallback(() => {
    if (isSearchFilterOpened) {
      const timeout = setTimeout(() => {
        closeSearchFilter();
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }

    if (isMenuOpened) {
      const timeout = setTimeout(() => {
        closeMenu();
        clearTimeout(timeout);
      }, CLEAR_SEARCH_VALUE_DELAY);
    }
  }, [closeMenu, closeSearchFilter, isMenuOpened, isSearchFilterOpened]);

  useClickOutside(useClickOutsideEffect, [searchFilterRef, menuRef]);

  return (
    <>
      <MobileHeader />
      <BookSearchFilter searchFilterRef={searchFilterRef} />
      <HeaderMenu menuRef={menuRef} />
    </>
  );
};

MobileHeaderComponent.displayName = 'MobileHeaderComponent';

const ObservableMobileHeader = observer(MobileHeaderComponent);

export { ObservableMobileHeader as MobileHeader };
