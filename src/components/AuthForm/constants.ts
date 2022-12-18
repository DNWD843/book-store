import { EAuthTypes } from '../../enums';
import { routes } from '../../routesMap';

import { TFormConfig } from './AuthForm.props';

export const authFormConfigs: Record<EAuthTypes, TFormConfig> = {
  [EAuthTypes.register]: {
    formTitle: 'Регистрация',
    redirectLinkTitle: 'Войти',
    redirectPath: routes.login,
    redirectText: 'Уже есть аккаунт?',
    submitButtonTitle: 'Зарегистрироваться',
  },
  [EAuthTypes.login]: {
    formTitle: 'Авторизация',
    redirectLinkTitle: 'Зарегистрироваться',
    redirectPath: routes.register,
    redirectText: 'Еще нет аккаунта?',
    submitButtonTitle: 'Войти',
  },
};
