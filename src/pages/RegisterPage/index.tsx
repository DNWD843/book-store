import uniqueId from 'lodash/uniqueId';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { authFormConfigs } from '../../components/AuthForm/constants';
import { Page } from '../../components/Page';
import { POPUP_ID_PREFIX, registerRequestMessages } from '../../constants';
import { EAuthTypes, EFetchStatuses, EPopupTypes } from '../../enums';
import { useAppDispatch } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { popupsActions } from '../../redux/slices/popupsSlice';
import { auth, createUserSavings } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TAuthFormValues, TUser } from '../../types';

const RegisterPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  const { addPopup } = popupsActions;

  const handleSubmit = ({ email, password }: TAuthFormValues) => {
    dispatch(clearAuthError());
    dispatch(auth.registerUser({ email, password }))
      .then(async (res) => {
        if (res.meta.requestStatus === EFetchStatuses.rejected) {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }

        const userData = res.payload as TUser;
        await dispatch(createUserSavings(userData.userId));

        return res;
      })
      .then((res) => {
        dispatch(addPopup({
          id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
          message: registerRequestMessages.success,
          type: EPopupTypes.success,
        }));

        navigate(routes.login);
      })
      .catch((err) => {
        console.error(err);

        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? registerRequestMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  };

  return (
    <Page title="">
      <AuthForm
        formConfig={authFormConfigs[EAuthTypes.register]}
        id={EAuthTypes.register}
        onSubmit={handleSubmit}
      />
    </Page>
  );
};

RegisterPageComponent.displayName = 'RegisterPageComponent';

export { RegisterPageComponent as RegisterPage };
