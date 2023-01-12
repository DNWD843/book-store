import React, { memo } from 'react';
import { Field, Form } from 'react-final-form';

import { COL_SIZE_1 } from '../../../constants';
import { EProfileForm } from '../../../enums';
import { Col, Input, Region } from '../../../ui-components';
import { ActionButtons } from '../FormActionButtons';

import { TEditProfileModalFormProps } from './EditProfileModalForm.props';

import styles from './EditProfileModalForm.module.css';

const EditProfileModalForm:React.FC<TEditProfileModalFormProps> = ({ InputProps, size, onCancel, initialFormValue, ...fieldProps }) => (
  <Form initialValues={initialFormValue} onSubmit={() => {}}>
    {(renderProps) => (
      <form className={styles.form} onSubmit={renderProps.handleSubmit}>
        <Region className={styles.formRegion}>
          <Col key={fieldProps.id} size={COL_SIZE_1}>
            <h2 className={styles.title}>Редактирование профиля</h2>
            <Field {...fieldProps} disabled={false} validateFields={[]}>
              {(props) => (
                <div className={styles.inputWrapper}>
                  <Input {...props} {...InputProps} />
                </div>
              )}
            </Field>
            <ActionButtons
              clearButtonTitle={EProfileForm.cancelButtonTitle}
              submitButtonTitle={EProfileForm.submitButtonTitle}
              onClear={onCancel}
            />
          </Col>
        </Region>
      </form>
    ) }
  </Form>
);

EditProfileModalForm.displayName = 'EditProfileModalForm';

const MemoEditProfileModalForm = memo(EditProfileModalForm);

export { MemoEditProfileModalForm as EditProfileModalForm };
