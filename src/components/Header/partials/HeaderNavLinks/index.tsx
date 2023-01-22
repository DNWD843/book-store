import React, { memo } from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import { selectUserData } from '../../../../redux/store';

import { HeaderNavLinks } from './HeaderNavLinks';
import { navLinksConfig } from './navLinksConfig';

const HeaderNavLinksComponent: React.FC = () => {
  const { isAnonymous } = useAppSelector(selectUserData);

  return (<HeaderNavLinks isAnonymous={isAnonymous} navLinks={navLinksConfig} />);
};

HeaderNavLinksComponent.displayName = 'HeaderNavLinksComponent';

const MemoHeaderNavLinksComponent = memo(HeaderNavLinksComponent);

export { MemoHeaderNavLinksComponent as NavLinks };
