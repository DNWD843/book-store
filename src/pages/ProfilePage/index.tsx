import { getAuth } from 'firebase/auth';
import uniqueId from 'lodash/uniqueId';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { EditProfileForm } from '../../components/forms';
import { POPUP_ID_PREFIX, PROFILE_FORM_ID, updateProfileRequestMessages } from '../../constants';
import { EFetchStatuses, EPopupTypes, EEditProfileFormFieldsNames } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { authActions, popupsActions } from '../../redux/slices';
import { selectAuthStatus, selectUserData } from '../../redux/store';
import { updateUserData } from '../../redux/thunks/authThunks';
import { routes } from '../../routesMap';
import { TEditProfileFormValues } from '../../types';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  const updateProfileStatus = useAppSelector(selectAuthStatus);
  const { addPopup } = popupsActions;
  const { setUserToStore } = authActions;

  const { email: currentEmail, displayName: currentName, photoURL: currentURL } = userData;

  const currentValues: TEditProfileFormValues = useMemo(() => ({
    [EEditProfileFormFieldsNames.email]: currentEmail,
    [EEditProfileFormFieldsNames.displayName]: currentName,
    [EEditProfileFormFieldsNames.photoURL]: currentURL,
  }), [currentEmail, currentName, currentURL]);

  const isLoading = useMemo(() => (updateProfileStatus === EFetchStatuses.pending), [updateProfileStatus]);

  const onSubmit = useCallback(({ displayName, photoURL }: TEditProfileFormValues) => {
    // if (prevEmailRef.current !== email) {
    //   dispatch(updateUserLogin({ email }));
    //   // TODO: все-таки написать редьюсер и вынести в отдельный сабмит метод
    // }

    dispatch(updateUserData({ displayName, photoURL }))
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          dispatch(addPopup({
            id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
            message: updateProfileRequestMessages.success,
            type: EPopupTypes.success,
          }));

          const auth = getAuth();
          console.log('user', auth.currentUser);

          dispatch(setUserToStore({ ...userData, displayName, photoURL }));
        } else {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }
      })
      .catch((err) => {
        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? updateProfileRequestMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, dispatch, setUserToStore, userData]);

  useEffect(() => {
    if (!currentEmail) {
      navigate(routes.books);
    }
  }, [currentEmail, navigate]);

  return (
    <Page title="Данные профиля">
      <Form<TEditProfileFormValues> id={PROFILE_FORM_ID} initialValues={currentValues} onSubmit={onSubmit}>
        {(formRenderProps) => (<EditProfileForm {...formRenderProps} />)}
      </Form>
      { isLoading
        ? (<ScreenLoader />)
        : null}
    </Page>
  );
};
