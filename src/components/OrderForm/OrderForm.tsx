import React from 'react';
import { Form } from 'react-final-form';

import { FormButtons } from './ActionButtons';
import { AddressInfo, ContactInfo, PersonalInfo, SendingTypeSelect } from './FormBlocks';
import { TOrderFormProps } from './OrderForm.props';
import { FORM_ID } from './constants';

import styles from './OrderForm.module.css';

export const OrderForm: React.FC<TOrderFormProps> = ({ onSubmit, formTitle = '' }) => (
  <Form id={FORM_ID} onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <div className={styles.formWrapper}>
        {formTitle && (<h3 className={styles.formTitle}>{formTitle}</h3>)}

        <form noValidate className={styles.form} onSubmit={handleSubmit}>
          <SendingTypeSelect />

          <PersonalInfo />

          <AddressInfo />

          <ContactInfo />

          <FormButtons />
        </form>
      </div>
    )}
  </Form>
);

OrderForm.displayName = 'Form';
