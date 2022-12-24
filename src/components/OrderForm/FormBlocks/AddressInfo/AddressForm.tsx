import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../ui-components';

import { addressInfoFieldsConfig } from './addressInfoFieldsConfig';

export const AddressForm: React.FC = () => {
  console.log('AddressForm rendered');

  return (
    <Region>
      {Object.values(addressInfoFieldsConfig).map(({ id, name, validate, InputProps }) => (
        <Col key={id} size={3}>
          <Field id={id} name={name} validate={validate} validateFields={[]}>
            {(props) => (
              <Input {...props} {...InputProps} />
            )}
          </Field>
        </Col>
      ))}
    </Region>
  );
};

const MemoAddressForm = memo(AddressForm);

AddressForm.displayName = 'AddressForm';

export { MemoAddressForm as AddressInfo };
