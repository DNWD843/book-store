import React from 'react';
import { Field, Form } from 'react-final-form';

import { Col, Input, Radio, RadioGroup, Region, Row } from '../../ui-components';

import { TOrderFormProps } from './OrderForm.props';
import { FORM_ID, orderFormFields } from './constants';

import styles from './OrderForm.module.css';

export const OrderForm: React.FC<TOrderFormProps> = ({ onSubmit, formTitle }) => (
  <Form id={FORM_ID} onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <div className={styles.formWrapper}>
        {formTitle && (<h3 className={styles.formTitle}>{formTitle}</h3>)}
        <form noValidate className={styles.form} onSubmit={handleSubmit}>

          <Region>
            <Row>
              <Col>
                <Field id={`${FORM_ID}-${orderFormFields.sendingTypeEmail.name}`} name={orderFormFields.sendingTypeEmail.name}>
                  {(props) => (
                    <RadioGroup>
                      <Radio
                        {...props}
                        inputElementProps={{
                          checked: true,
                        }}
                        label={orderFormFields.sendingTypeEmail.label}
                      />
                      <Radio
                        {...props}
                        inputElementProps={{}}
                        label={orderFormFields.sendingTypePost.label}
                      />
                    </RadioGroup>
                  )}
                </Field>
              </Col>
            </Row>
          </Region>

          <Region>
            <Row>
              <Col>
                <Field name={orderFormFields.lastName.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.lastName.name,
                        placeholder: orderFormFields.lastName.placeholder,
                      }}
                      label={orderFormFields.lastName.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.firstName.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.firstName.name,
                        placeholder: orderFormFields.firstName.placeholder,
                      }}
                      label={orderFormFields.firstName.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.patronymic.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.patronymic.name,
                        placeholder: orderFormFields.patronymic.placeholder,
                      }}
                      label={orderFormFields.patronymic.label}
                    />
                  )}
                </Field>
              </Col>
            </Row>
          </Region>

          <Region>
            <Row>
              <Col>
                <Field name={orderFormFields.postalCode.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.postalCode.name,
                        placeholder: orderFormFields.postalCode.placeholder,
                      }}
                      label={orderFormFields.postalCode.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.country.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.country.name,
                        placeholder: orderFormFields.country.placeholder,
                      }}
                      label={orderFormFields.country.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.regionName.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.regionName.name,
                        placeholder: orderFormFields.regionName.placeholder,
                      }}
                      label={orderFormFields.regionName.label}
                    />
                  )}
                </Field>
              </Col>
            </Row>

            <Row>
              <Col>
                <Field name={orderFormFields.cityName.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.cityName.name,
                        placeholder: orderFormFields.cityName.placeholder,
                      }}
                      label={orderFormFields.cityName.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.streetName.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.streetName.name,
                        placeholder: orderFormFields.streetName.placeholder,
                      }}
                      label={orderFormFields.streetName.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.houseNumber.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.houseNumber.name,
                        placeholder: orderFormFields.houseNumber.placeholder,
                      }}
                      label={orderFormFields.houseNumber.label}
                    />
                  )}
                </Field>

              </Col>
            </Row>

            <Row>
              <Col>
                <Field name={orderFormFields.buildingNumber.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.buildingNumber.name,
                        placeholder: orderFormFields.buildingNumber.placeholder,
                      }}
                      label={orderFormFields.buildingNumber.label}
                    />
                  )}
                </Field>

              </Col>
              <Col>
                <Field name={orderFormFields.housingNumber.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.housingNumber.name,
                        placeholder: orderFormFields.housingNumber.placeholder,
                      }}
                      label={orderFormFields.housingNumber.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.flatNumber.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.flatNumber.name,
                        placeholder: orderFormFields.flatNumber.placeholder,
                      }}
                      label={orderFormFields.flatNumber.label}
                    />
                  )}
                </Field>
              </Col>
            </Row>
          </Region>

          <Region>
            <Row>
              <Col>
                <Field name={orderFormFields.email.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.email.name,
                        placeholder: orderFormFields.email.placeholder,
                      }}
                      label={orderFormFields.email.label}
                    />
                  )}
                </Field>
              </Col>
              <Col>
                <Field name={orderFormFields.phoneNumber.name}>
                  {(props) => (
                    <Input
                      {...props}
                      inputElementProps={{
                        id: orderFormFields.phoneNumber.label,
                        placeholder: orderFormFields.phoneNumber.placeholder,
                      }}
                      label={orderFormFields.phoneNumber.label}
                    />
                  )}
                </Field>
              </Col>
            </Row>
          </Region>
        </form>
      </div>
    )}
  </Form>
);

OrderForm.displayName = 'Form';
