import { EIconTypes } from '../../enums';
import { routes } from '../../routesMap';
import { bookmarkIcon, bookmarkActiveIcon, shoppingCartEmpty, shoppingCartFilled } from '../../vendor/icons';
import { IHeaderNavLinkProps } from '../NavLinkIcon/NavLinkIcon.props';

export const navLinksConfig: Array<Omit<IHeaderNavLinkProps, 'isVisible'>> = [
  {
    id: EIconTypes.favorites,
    to: routes.favorites,
    title: 'Избранное',
    icon: bookmarkIcon,
    iconActive: bookmarkActiveIcon,
    type: EIconTypes.favorites,
  },
  {
    id: EIconTypes.cartValue,
    to: routes.shoppingCart,
    title: 'Корзина',
    icon: shoppingCartEmpty,
    iconActive: shoppingCartFilled,
    type: EIconTypes.cartValue,
  },
];
