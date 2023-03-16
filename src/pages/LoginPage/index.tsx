import uniqueId from 'lodash/uniqueId';
import { flowResult } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { AuthForm, authFormConfigs } from '../../components/forms';
import { defaultMessages, loginRequestMessages, POPUP_ID_PREFIX } from '../../constants';
import { EAuthTypes, EFetchStatuses, EPopupTypes } from '../../enums';
import { useAppDispatch } from '../../redux/hooks';
import { popupsActions } from '../../redux/slices';
import { routes } from '../../routesMap';
import { savingsStore, userStore } from '../../stores';
import { TAuthFormValues } from '../../types';
import { storage, storageKeys } from '../../utils';

const LoginPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { addPopup } = popupsActions;
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: TAuthFormValues) => {
    try {
      const userData = await flowResult(userStore.login({ email, password }));
      await savingsStore.fetchSavings(userData.userId);

      if (savingsStore.needsToUpdateDB) {
        await savingsStore.updateSavingsInDB();
      }

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: loginRequestMessages.success,
        type: EPopupTypes.success,
      }));

      navigate(routes.books);
      storage.setData(storageKeys.USER, userData);
    } catch (err: any) {
      dispatch(addPopup({
        id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
        message: err.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }
  };

  const isLoading = userStore.status === EFetchStatuses.pending || savingsStore.status === EFetchStatuses.pending;

  return (
    <Page title="">
      {isLoading ? <ScreenLoader /> : null}
      <AuthForm
        formConfig={authFormConfigs[EAuthTypes.login]}
        id={EAuthTypes.login}
        onSubmit={handleSubmit}
      />
    </Page>
  );
};

LoginPageComponent.displayName = 'LoginPageComponent';

const ObservableLoginPageComponent = observer(LoginPageComponent);

export { ObservableLoginPageComponent as LoginPage };
