import classNames from 'classnames';
import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { EProfileFormFieldsNames } from '../../../enums';
import { Col, Input, Region, SimpleButton } from '../../../ui-components';
import { pencilIcon } from '../../../vendor/icons';
import { profileFormFieldsConfig } from '../formConfigs';

import { IProfileFormProps } from './ProfileForm.props';

import styles from './ProfileForm.module.css';

const ProfileForm: React.FC<IProfileFormProps> = ({ disabled, onEdit }) => (
  <Region>
    {Object.values(profileFormFieldsConfig).map(({ InputProps, size, ...fieldProps }) => (
      <Col key={fieldProps.id} size={size}>
        <Field {...fieldProps} disabled={disabled} validateFields={[]}>
          {(props) => (
            <div className={styles.inputWrapper}>
              <Input {...props} {...InputProps} />
              <SimpleButton
                className={classNames('btn-outline-secondary', styles.editButton)}
                onClick={onEdit({ fieldKey: props.input.name as EProfileFormFieldsNames, currentValue: props.input.value })}
              >
                <i className={styles.editIcon}>{pencilIcon}</i>
              </SimpleButton>
            </div>
          )}
        </Field>
      </Col>
    ))}
  </Region>
);

ProfileForm.displayName = 'ProfileForm';

const MemoProfileForm = memo(ProfileForm);

export { MemoProfileForm as ProfileForm };
