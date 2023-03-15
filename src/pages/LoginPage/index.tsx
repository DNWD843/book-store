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
import { storageActions } from '../../redux/store';
import { routes } from '../../routesMap';
import { savingsStore, userStore } from '../../stores';
import { TAuthFormValues } from '../../types';
import { storage, storageKeys } from '../../utils';

const LoginPageComponent: React.FC = observer(() => {
  const dispatch = useAppDispatch();
  const { addPopup } = popupsActions;
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: TAuthFormValues) => {
    try {
      const userData = await flowResult(userStore.login({ email, password }));
      await savingsStore.fetchSavings();

      if (savingsStore.needsToUpdateDB) {
        await savingsStore.updateSavingsInDB();
      }

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: loginRequestMessages.success,
        type: EPopupTypes.success,
      }));

      navigate(routes.books);
      dispatch(storageActions.setUserInfo);
      storage.setData(storageKeys.USER, userData);

      console.log('handleSubmit', userData);
    } catch (err: any) {
      console.log('handleSubmit catch error:', err);
      // console.error(err);
      //
      dispatch(addPopup({
        id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
        message: err.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }
  };

  return (
    <Page title="">
      {userStore.status === EFetchStatuses.pending ? <ScreenLoader /> : null}
      <AuthForm
        formConfig={authFormConfigs[EAuthTypes.login]}
        id={EAuthTypes.login}
        onSubmit={handleSubmit}
      />
    </Page>
  );
});

LoginPageComponent.displayName = 'LoginPageComponent';

export { LoginPageComponent as LoginPage };
