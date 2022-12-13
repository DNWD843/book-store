import { EIconTypes } from '../../enums';
import { routes } from '../../routesMap';
import { bookmarkIcon, bookmarkActiveIcon, shoppingCartEmptyIcon, shoppingCartFilledIcon } from '../../vendor/icons';
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
    icon: shoppingCartEmptyIcon,
    iconActive: shoppingCartFilledIcon,
    type: EIconTypes.cartValue,
  },
];
