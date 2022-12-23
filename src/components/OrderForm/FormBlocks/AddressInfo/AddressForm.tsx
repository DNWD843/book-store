import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region, Row } from '../../../../ui-components';
import { createFormFieldId } from '../../../../utils';
import { FORM_ID, orderFormFields } from '../../constants';

export const AddressForm: React.FC = () => {
  console.log('AddressForm rendered');

  return (
    <Region>
      <Row>
        <Col>
          <Field id={createFormFieldId(FORM_ID, orderFormFields.postalCode.name)} name={orderFormFields.postalCode.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.country.name)} name={orderFormFields.country.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.regionName.name)} name={orderFormFields.regionName.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.cityName.name)} name={orderFormFields.cityName.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.streetName.name)} name={orderFormFields.streetName.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.houseNumber.name)} name={orderFormFields.houseNumber.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.buildingNumber.name)} name={orderFormFields.buildingNumber.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.housingNumber.name)} name={orderFormFields.housingNumber.name}>
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
          <Field id={createFormFieldId(FORM_ID, orderFormFields.flatNumber.name)} name={orderFormFields.flatNumber.name}>
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
  );
};

const MemoAddressForm = memo(AddressForm);

AddressForm.displayName = 'AddressForm';

export { MemoAddressForm as AddressInfo };
