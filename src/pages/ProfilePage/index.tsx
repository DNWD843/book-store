import React, { useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { Page } from '../../components/Page';
import { ProfileForm, profileFormInputsConfig } from '../../components/forms';
import { PROFILE_FORM_ID } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/store';
import { routes } from '../../routesMap';
import { TProfileFormValues } from '../../types';

import styles from './PageProfile.module.css';

export const ProfilePage: React.FC = () => {
  const { email, displayName, photoURL } = useAppSelector(selectUserData);
  const navigate = useNavigate();
  const initialValues = useMemo(() => ({
    [profileFormInputsConfig.email.name]: email,
    [profileFormInputsConfig.displayName.name]: displayName,
    [profileFormInputsConfig.photoURL.name]: photoURL,
  }), [displayName, email, photoURL]);

  useEffect(() => {
    if (!email) {
      navigate(routes.books);
    }
  }, [email, navigate]);

  return (
    <Page title="Данные профиля">
      <div className={styles.content}>
        <Form<TProfileFormValues> id={PROFILE_FORM_ID} initialValues={initialValues} onSubmit={() => {}}>
          {(formRenderProps) => (<ProfileForm {...formRenderProps} />)}
        </Form>
      </div>
    </Page>
  );
};
