import React, { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from '../../../routesMap';

import { DesktopHeader } from './DesktopHeader';

const DesktopHeaderComponent: React.FC = () => {
  const { pathname } = useLocation();

  const isSearchAvailable = useMemo(() => pathname === routes.books, [pathname]);

  return (<DesktopHeader isSearchAvailable={isSearchAvailable} />);
};

const MemoDesktopHeaderComponent = memo(DesktopHeaderComponent);

export { MemoDesktopHeaderComponent as DesktopHeader };
