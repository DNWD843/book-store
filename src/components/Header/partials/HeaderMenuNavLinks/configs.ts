import { routes } from '../../../../routesMap';

export type THeaderMenuLinkConfig = {
  route: string,
  title: string,
};

export type THeaderMenuLinksConfig = THeaderMenuLinkConfig[];
export const desktopHeaderMenuLinksConfig: THeaderMenuLinksConfig = [
  { route: routes.profile, title: 'Данные профиля' },
  { route: routes.purchasesHistory, title: 'История покупок' },
];
export const mobileHeaderMenuLinksConfig: THeaderMenuLinksConfig = [
  { route: routes.favorites, title: 'Избранное' },
  { route: routes.shoppingCart, title: 'Корзина' },
  { route: routes.profile, title: 'Данные профиля' },
  { route: routes.purchasesHistory, title: 'История покупок' },
];
