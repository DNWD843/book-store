import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../../ui-components';
import { addressInfoFieldsConfig } from '../../../formConfigs';

export const AddressForm: React.FC = () => (
  <Region>
    {Object.values(addressInfoFieldsConfig).map(({ InputProps, ...fieldProps }) => (
      <Col key={fieldProps.id} size={3}>
        <Field {...fieldProps} validateFields={[]}>
          {(props) => (
            <Input {...props} {...InputProps} />
          )}
        </Field>
      </Col>
    ))}
  </Region>
);

const MemoAddressForm = memo(AddressForm);

AddressForm.displayName = 'AddressForm';

export { MemoAddressForm as AddressInfo };
