import React, { useMemo } from 'react';

import { EIconTypes } from '../../enums';
import { useAppSelector } from '../../redux/hooks';
import { selectUserSavings } from '../../redux/store';

import { NavLinkIcon } from './NavLinkIcon';
import { IHeaderNavLinkProps } from './NavLinkIcon.props';

const HeaderNavLink = ({ to, icon, iconActive, type, title, isVisible, ...props }: IHeaderNavLinkProps) => {
  const { favorites, cartValue } = useAppSelector(selectUserSavings);

  const isShoppingCartFilled = useMemo(() => Boolean(cartValue.length), [cartValue.length]);
  const hasFavorites = useMemo(() => Boolean(favorites.length), [favorites.length]);

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

export { HeaderNavLink };
