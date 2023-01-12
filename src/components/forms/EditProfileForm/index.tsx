import classNames from 'classnames';
import React, { memo, useCallback, useState } from 'react';

import { EProfileForm } from '../../../enums';
import styles from '../../../pages/ProfilePage/PageProfile.module.css';
import { SimpleButton } from '../../../ui-components';
import { ActionButtons } from '../FormActionButtons';

import { ProfileForm } from './ProfileForm';
import { IProfileFormComponentProps } from './ProfileForm.props';

const EditProfileFormComponent: React.FC<IProfileFormComponentProps> = (props) => {
  const [isFormDisabled, setFormDisabled] = useState<boolean>(true);

  const toggleDisabled = useCallback(() => setFormDisabled((prev) => !prev), []);

  const onCancel = useCallback(() => {
    toggleDisabled();
  }, [toggleDisabled]);

  return (
    <form noValidate onSubmit={props.handleSubmit}>
      <ProfileForm {...props} disabled />
      {/* TODO: here must be a modal with form and action buttons  */}
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

EditProfileFormComponent.displayName = 'EditProfileFormComponent';

const MemoEditProfileFormComponent = memo(EditProfileFormComponent);

export { MemoEditProfileFormComponent as EditProfileForm };
