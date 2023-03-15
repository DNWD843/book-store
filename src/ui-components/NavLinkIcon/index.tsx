import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';

import { EIconTypes } from '../../enums';
import { savingsStore } from '../../stores';

import { NavLinkIcon } from './NavLinkIcon';
import { IHeaderNavLinkProps } from './NavLinkIcon.props';

const HeaderNavLink = ({ to, icon, iconActive, type, title, isVisible, ...props }: IHeaderNavLinkProps) => {
  const isShoppingCartFilled = Boolean(savingsStore.cartValue.length);
  const hasFavorites = Boolean(savingsStore.favorites.length);

  const isActive: boolean = useMemo(() => {
    if (type === EIconTypes.favorites) {
      return hasFavorites;
    }

    if (type === EIconTypes.cartValue) {
      return isShoppingCartFilled;
    }

    return false;
  }, [hasFavorites, isShoppingCartFilled, type]);

  return (
    <NavLinkIcon isVisible={isVisible} title={title} to={to} {...props}>
      {isActive ? iconActive : icon}
    </NavLinkIcon>
  );
};

HeaderNavLink.displayName = 'HeaderNavLink';

const ObservableHeaderNavLink = observer(HeaderNavLink);

export { ObservableHeaderNavLink as HeaderNavLink };
