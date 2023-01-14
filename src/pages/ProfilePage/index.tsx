import React, { useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { ProfileForm } from '../../components/forms';
import { PROFILE_FORM_ID } from '../../constants';
import { EFetchStatuses, EProfileFormFieldsNames } from '../../enums';
import { useAppSelector } from '../../redux/hooks';
import { selectAuthStatus, selectUserData } from '../../redux/store';
import { routes } from '../../routesMap';
import { TProfileFormValues } from '../../types';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const userData = useAppSelector(selectUserData);
  const updateProfileStatus = useAppSelector(selectAuthStatus);

  const { email: currentEmail, displayName: currentName, photoURL: currentURL } = userData;

  const currentValues: TProfileFormValues = useMemo(() => ({
    [EProfileFormFieldsNames.email]: currentEmail,
    [EProfileFormFieldsNames.displayName]: currentName,
    [EProfileFormFieldsNames.photoURL]: currentURL,
  }), [currentEmail, currentName, currentURL]);

  const isLoading = useMemo(() => (updateProfileStatus === EFetchStatuses.pending), [updateProfileStatus]);

  useEffect(() => {
    if (!currentEmail) {
      navigate(routes.books);
    }
  }, [currentEmail, navigate]);

  return (
    <Page title="Данные профиля">
      <Form<TProfileFormValues> id={PROFILE_FORM_ID} initialValues={currentValues} onSubmit={() => {}}>
        {(formRenderProps) => (<ProfileForm {...formRenderProps} />)}
      </Form>
      { isLoading
        ? (<ScreenLoader />)
        : null}
    </Page>
  );
};
