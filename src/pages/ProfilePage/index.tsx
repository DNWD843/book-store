import { observer } from 'mobx-react-lite';
import React, { useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { ProfileForm } from '../../components/forms';
import { PROFILE_FORM_ID } from '../../constants';
import { EFetchStatuses, EProfileFormFieldsNames } from '../../enums';
import { routes } from '../../routesMap';
import { userStore } from '../../stores';
import { TEditProfileFormValues } from '../../types';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const { user: { email: currentEmail, displayName: currentName, photoURL: currentURL }, status } = userStore;

  const currentValues: TEditProfileFormValues = useMemo(() => ({
    [EProfileFormFieldsNames.email]: currentEmail,
    [EProfileFormFieldsNames.displayName]: currentName,
    [EProfileFormFieldsNames.photoURL]: currentURL,
  }), [currentEmail, currentName, currentURL]);

  const isLoading = status === EFetchStatuses.pending;

  useEffect(() => {
    if (!currentEmail) {
      navigate(routes.books);
    }
  }, [currentEmail, navigate]);

  return (
    <Page title="Данные профиля">
      <Form<TEditProfileFormValues> id={PROFILE_FORM_ID} initialValues={currentValues} onSubmit={() => {}}>
        {(formRenderProps) => (<ProfileForm {...formRenderProps} />)}
      </Form>
      { isLoading
        ? (<ScreenLoader />)
        : null}
    </Page>
  );
};

ProfilePage.displayName = 'ProfilePage';

const ObservableProfilePage = observer(ProfilePage);

export { ObservableProfilePage as ProfilePage };
