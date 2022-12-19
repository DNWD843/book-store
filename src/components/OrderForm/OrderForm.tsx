import React from 'react';
import { Field, Form } from 'react-final-form';

import { Checkbox } from '../../ui-components/Inputs';
import styles from '../AuthForm/AuthForm.module.css';

import { TOrderFormProps } from './OrderForm.props';
import { EOrderFormFieldNames, FORM_ID, ORDER_FORM_TITLE, SENDING_TYPE_LABEL } from './constants';

export const OrderForm: React.FC<TOrderFormProps> = ({ onSubmit }) => (
  <Form id={FORM_ID} onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <div className={styles.formWrapper}>
        <h3 className={styles.formTitle}>{ORDER_FORM_TITLE}</h3>
        <form noValidate className={styles.form} onSubmit={handleSubmit}>
          <Field id={`${FORM_ID}-${EOrderFormFieldNames.sendingType}`} name={EOrderFormFieldNames.sendingType}>
            {(props) => (
              <Checkbox
                {...props}
                inputElementProps={{}}
                label={SENDING_TYPE_LABEL}
              />
            )}
          </Field>

          <Field name={EOrderFormFieldNames.postalCode} />
          <Field name={EOrderFormFieldNames.regionName} />
          <Field name={EOrderFormFieldNames.cityName} />
          <Field name={EOrderFormFieldNames.streetName} />
          <Field name={EOrderFormFieldNames.houseNumber} />
          <Field name={EOrderFormFieldNames.buildingNumber} />
          <Field name={EOrderFormFieldNames.housingNumber} />
          <Field name={EOrderFormFieldNames.flatNumber} />
          <Field name={EOrderFormFieldNames.lastName} />
          <Field name={EOrderFormFieldNames.name} />
          <Field name={EOrderFormFieldNames.firstName} />
          <Field name={EOrderFormFieldNames.email} />
          <Field name={EOrderFormFieldNames.phoneNumber} />
        </form>
      </div>
    )}
  </Form>
);
