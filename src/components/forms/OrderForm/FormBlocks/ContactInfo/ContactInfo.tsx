import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../../ui-components';
import { contactInfoFieldsConfig } from '../../../formConfigs';

const ContactInfo: React.FC = () => (
  <Region>
    {Object.values(contactInfoFieldsConfig).map(({ InputProps, size, ...fieldProps }) => (
      <Col key={fieldProps.id} size={size}>
        <Field {...fieldProps} validateFields={[]}>
          {(props) => (<Input {...props} {...InputProps} />)}
        </Field>
      </Col>
    ))}
  </Region>
);

ContactInfo.displayName = 'ContactInfo';

const memoContactInfo = memo(ContactInfo);

export { memoContactInfo as ContactInfo };
