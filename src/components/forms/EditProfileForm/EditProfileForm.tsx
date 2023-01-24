import classNames from 'classnames';
import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { EProfileFormFieldsNames } from '../../../enums';
import { Col, Input, Region, SimpleButton } from '../../../ui-components';
import { pencilIcon } from '../../../vendor/icons';

import { IEditProfileFormProps } from './EditProfileForm.props';

import styles from './EditProfileForm.module.css';

const EditProfileForm: React.FC<IEditProfileFormProps> = ({ disabled, onEdit, formFieldsConfig }) => (
  <form noValidate>
    <Region>
      {formFieldsConfig.map(({ InputProps, size, ...fieldProps }) => (
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
  </form>
);

EditProfileForm.displayName = 'EditProfileForm';

const MemoEditProfileForm = memo(EditProfileForm);

export { MemoEditProfileForm as EditProfileForm };
