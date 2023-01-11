import React, { useMemo } from 'react';
import { Form } from 'react-final-form';

import { Page } from '../../components/Page';
import { ProfileForm, profileFormInputsConfig } from '../../components/forms';
import { PROFILE_FORM_ID } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/store';
import { TProfileFormValues } from '../../types';

import styles from './PageProfile.module.css';

export const ProfilePage: React.FC = () => {
  const { email, displayName, phoneNumber, photoURL } = useAppSelector(selectUserData);
  const initialValues = useMemo(() => ({
    [profileFormInputsConfig.email.name]: email,
    [profileFormInputsConfig.displayName.name]: displayName,
    [profileFormInputsConfig.phoneNumber.name]: phoneNumber,
    [profileFormInputsConfig.photoURL.name]: photoURL,
  }), [displayName, email, phoneNumber, photoURL]);

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
