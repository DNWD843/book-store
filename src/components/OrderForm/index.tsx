import React, { memo } from 'react';
import { Form } from 'react-final-form';

import { ESendingTypes } from '../../enums';

import { FormButtons } from './ActionButtons';
import { AddressInfo, ContactInfo, PersonalInfo, SendingTypeSelect } from './FormBlocks';
import { TOrderFormProps } from './OrderForm.props';
import { FORM_ID } from './constants';

import styles from './OrderForm.module.css';

const OrderForm: React.FC<TOrderFormProps> = ({ onSubmit, formTitle = '' }) => (
  <Form id={FORM_ID} onSubmit={onSubmit}>
    {({ handleSubmit, values: { sendingType }, submitFailed, errors }) => {
      const sendingTypeError = submitFailed && errors?.sendingType ? errors.sendingType : '';
      const isVisible = sendingType === ESendingTypes.post;

      return (
        <div className={styles.formWrapper}>
          {formTitle && (<h3 className={styles.formTitle}>{formTitle}</h3>)}

          <form noValidate className={styles.form} onSubmit={handleSubmit}>
            <SendingTypeSelect error={sendingTypeError} />

            <PersonalInfo />

            {isVisible ? (<AddressInfo />) : null}

            <ContactInfo />

            <FormButtons />
          </form>
        </div>
      );
    }}
  </Form>
);

OrderForm.displayName = 'OrderForm';

const MemoOrderForm = memo(OrderForm);

export { MemoOrderForm as OrderForm };
