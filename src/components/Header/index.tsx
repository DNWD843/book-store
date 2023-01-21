import React, { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useMatchMedia } from '../../hooks';
import { routes } from '../../routesMap';

import { Header } from './Header';

const HeaderComponent: React.FC = () => {
  const { pathname } = useLocation();
  const values = useMatchMedia();

  console.log(values);

  const isBookSearchVisible = useMemo(() => pathname === routes.books, [pathname]);

  return (<Header isBookSearchVisible={isBookSearchVisible} />);
};

const MemoHeaderComponent = memo(HeaderComponent);

export { MemoHeaderComponent as Header };
