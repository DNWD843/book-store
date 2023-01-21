import { EIconTypes } from '../../../enums';
import { routes } from '../../../routesMap';
import { THeaderNavLinksConfig } from '../../../ui-components/NavLinkIcon/NavLinkIcon.props';
import { bookmarkIcon, bookmarkActiveIcon, shoppingCartEmptyIcon, shoppingCartFilledIcon } from '../../../vendor/icons';

export const navLinksConfig: THeaderNavLinksConfig = [
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
