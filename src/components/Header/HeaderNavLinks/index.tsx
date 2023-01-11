import React, { memo } from 'react';

import { useAppSelector } from '../../../redux/hooks';
import { selectUserData } from '../../../redux/store';

import { HeaderNavLinks } from './HeaderNavLinks';

const HeaderNavLinksMemo = memo(HeaderNavLinks);

const HeaderNavLinksComponent: React.FC = () => {
  const { isAnonymous } = useAppSelector(selectUserData);

  return (<HeaderNavLinksMemo isAnonymous={isAnonymous} />);
};

HeaderNavLinksComponent.displayName = 'HeaderNavLinksComponent';

export { HeaderNavLinksComponent as NavLinks };
