import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/store';

import { HeaderNavLinks } from './HeaderNavLinks';

const HeaderNavLinksComponent: React.FC = () => {
  const { isAnonymous } = useAppSelector(selectUserData);

  return (<HeaderNavLinks isAnonymous={isAnonymous} />);
};

HeaderNavLinksComponent.displayName = 'HeaderNavLinksComponent';

export { HeaderNavLinksComponent as NavLinks };
