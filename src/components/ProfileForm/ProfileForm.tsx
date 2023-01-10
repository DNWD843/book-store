import classNames from 'classnames';
import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { EProfileForm } from '../../enums';
import styles from '../../pages/ProfilePage/PageProfile.module.css';
import { Col, Input, Region, SimpleButton } from '../../ui-components';
import { ActionButtons } from '../ActionButtons';

import { IProfileFormProps } from './ProfileForm.props';
import { profileFormFieldsConfig } from './profileFormConfigs';

const ProfileForm: React.FC<IProfileFormProps> = ({ handleSubmit, disabled, onCancel, onEdit }) => (
  <form noValidate onSubmit={handleSubmit}>
    <Region>
      {Object.values(profileFormFieldsConfig).map(({ id, name, validate, InputProps }) => (
        <Col key={id} size={2}>
          <Field disabled={disabled} id={id} name={name} validate={validate}>
            {(props) => (
              <Input {...props} {...InputProps} />
            )}
          </Field>
        </Col>
      ))}
    </Region>
    {disabled
      ? (
        <SimpleButton
          className={classNames(styles.editButton, 'btn-outline-secondary')}
          onClick={onEdit}
        >
          {EProfileForm.editButtonTitle}
        </SimpleButton>
      )
      : (<ActionButtons clearButtonTitle={EProfileForm.cancelButtonTitle} submitButtonTitle={EProfileForm.submitButtonTitle} onClear={onCancel} />)}

  </form>
);

ProfileForm.displayName = 'ProfileForm';

const MemoProfileForm = memo(ProfileForm);

export { MemoProfileForm as ProfileForm };
