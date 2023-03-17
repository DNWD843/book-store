import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { AuthForm, authFormConfigs } from '../../components/forms';
import { defaultMessages, POPUP_ID_PREFIX, registerRequestMessages } from '../../constants';
import { EAuthTypes, EFetchStatuses, EPopupTypes } from '../../enums';
import { routes } from '../../routesMap';
import { overlaysStore, userStore } from '../../stores';
import { TAuthFormValues } from '../../types';

const RegisterPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const { addPopup } = overlaysStore;

  const handleSubmit = async ({ email, password }: TAuthFormValues) => {
    try {
      await userStore.register({ email, password });

      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: registerRequestMessages.success,
        type: EPopupTypes.success,
      });

      navigate(routes.login);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);

      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      });
    }
  };

  return (
    <Page title="">
      {userStore.status === EFetchStatuses.pending ? <ScreenLoader /> : null}
      <AuthForm
        formConfig={authFormConfigs[EAuthTypes.register]}
        id={EAuthTypes.register}
        onSubmit={handleSubmit}
      />
    </Page>
  );
};

RegisterPageComponent.displayName = 'RegisterPageComponent';

const ObservableRegisterPageComponent = observer(RegisterPageComponent);

export { ObservableRegisterPageComponent as RegisterPage };
