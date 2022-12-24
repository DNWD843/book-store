import React, { memo } from 'react';
import { FormRenderProps } from 'react-final-form';

import { ESendingTypes } from '../../enums';
import { TOrderFormValues } from '../../types';

import { FormButtons } from './ActionButtons';
import { AddressInfo, ContactInfo, PersonalInfo, SendingTypeSelect } from './FormBlocks';

import styles from './OrderForm.module.css';

const OrderForm: React.FC<FormRenderProps<TOrderFormValues, Partial<TOrderFormValues>>> = (
  { handleSubmit, values: { sendingType }, submitFailed, errors },
) => {
  const sendingTypeError = submitFailed && errors?.sendingType ? errors.sendingType : '';
  const isVisible = sendingType === ESendingTypes.post;

  return (
    <div className={styles.formWrapper}>
      <form noValidate className={styles.form} onSubmit={handleSubmit}>
        <SendingTypeSelect error={sendingTypeError} />

        <PersonalInfo />

        {isVisible ? (<AddressInfo />) : null}

        <ContactInfo />

        <FormButtons />
      </form>
    </div>
  );
};

OrderForm.displayName = 'OrderForm';

const MemoOrderForm = memo(OrderForm);

export { MemoOrderForm as OrderForm };
