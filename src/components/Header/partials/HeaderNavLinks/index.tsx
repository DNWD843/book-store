import { observer } from 'mobx-react-lite';
import React from 'react';

import { userStore } from '../../../../stores';

import { HeaderNavLinks } from './HeaderNavLinks';
import { navLinksConfig } from './navLinksConfig';

const HeaderNavLinksComponent: React.FC = () => {
  const { isAnonymous } = userStore.user;

  return (<HeaderNavLinks isAnonymous={isAnonymous} navLinks={navLinksConfig} />);
};

HeaderNavLinksComponent.displayName = 'HeaderNavLinksComponent';

const ObservableHeaderNavLinksComponent = observer(HeaderNavLinksComponent);

export { ObservableHeaderNavLinksComponent as NavLinks };
