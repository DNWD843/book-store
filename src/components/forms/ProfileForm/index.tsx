import classNames from 'classnames';
import React, { memo, useCallback, useState } from 'react';
import { useForm } from 'react-final-form';

import { EProfileForm } from '../../../enums';
import styles from '../../../pages/ProfilePage/PageProfile.module.css';
import { SimpleButton } from '../../../ui-components';
import { ActionButtons } from '../FormActionButtons';

import { ProfileForm } from './ProfileForm';
import { IProfileFormComponentProps } from './ProfileForm.props';

const ProfileFormComponent: React.FC<IProfileFormComponentProps> = (props) => {
  const { reset } = useForm();
  const [isFormDisabled, setFormDisabled] = useState<boolean>(true);
  const { initialValues } = props;

  const toggleDisabled = useCallback(() => setFormDisabled((prev) => !prev), []);

  const onCancel = useCallback(() => {
    reset(initialValues);
    toggleDisabled();
  }, [initialValues, reset, toggleDisabled]);

  return (
    <form noValidate onSubmit={props.handleSubmit}>
      <ProfileForm {...props} disabled={isFormDisabled} />
      {isFormDisabled
        ? (
          <SimpleButton
            className={classNames(styles.editButton, 'btn-outline-secondary')}
            onClick={toggleDisabled}
          >
            {EProfileForm.editButtonTitle}
          </SimpleButton>
        )
        : (
          <ActionButtons
            clearButtonTitle={EProfileForm.cancelButtonTitle}
            submitButtonTitle={EProfileForm.submitButtonTitle}
            onClear={onCancel}
          />
        )}
    </form>
  );
};

ProfileFormComponent.displayName = 'ProfileFormComponent';

const MemoProfileFormComponent = memo(ProfileFormComponent);

export { MemoProfileFormComponent as ProfileForm };
