import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm } from '../../components/AuthForm';
import { authFormConfigs } from '../../components/AuthForm/constants';
import { Page } from '../../components/Page';
import { EAuthTypes, EFetchStatuses } from '../../enums';
import { useAppDispatch } from '../../redux/hooks';
import { authActions } from '../../redux/slices/authSlice';
import { auth, createUserSavings } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TAuthFormValues, TUser } from '../../types';

const RegisterPageComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clearAuthError } = authActions;
  // const registerError = useAppSelector(selectAuthError);

  const handleSubmit = ({ email, password }: TAuthFormValues) => {
    dispatch(clearAuthError());
    dispatch(auth.registerUser({ email, password }))
      .then(async (res) => {
        const userData = res.payload as TUser;
        await dispatch(createUserSavings(userData.userId));

        return res;
      })
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          navigate(routes.login);
        }
      })
      .catch((err) => { console.error(err); });
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
