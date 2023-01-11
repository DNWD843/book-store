import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../ui-components';
import { profileFormFieldsConfig } from '../formConfigs';

import { IProfileFormProps } from './ProfileForm.props';

const ProfileForm: React.FC<IProfileFormProps> = ({ disabled }) => (
  <Region>
    {Object.values(profileFormFieldsConfig).map(({ InputProps, ...fieldProps }) => (
      <Col key={fieldProps.id} size={2}>
        <Field {...fieldProps} disabled={disabled} validateFields={[]}>
          {(props) => (
            <Input {...props} {...InputProps} />
          )}
        </Field>
      </Col>
    ))}
  </Region>
);

ProfileForm.displayName = 'ProfileForm';

const MemoProfileForm = memo(ProfileForm);

export { MemoProfileForm as ProfileForm };
