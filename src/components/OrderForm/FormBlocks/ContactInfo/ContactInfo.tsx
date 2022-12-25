import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../ui-components';

import { contactInfoFieldsConfig } from './contactInfoFieldsConfig';

const ContactInfo: React.FC = () => (
  <Region>
    {Object.values(contactInfoFieldsConfig).map(({ InputProps, ...fieldProps }) => (
      <Col key={fieldProps.id} size={2}>
        <Field {...fieldProps}>
          {(props) => (<Input {...props} {...InputProps} />)}
        </Field>
      </Col>
    ))}
  </Region>
);

ContactInfo.displayName = 'ContactInfo';

const memoContactInfo = memo(ContactInfo);

export { memoContactInfo as ContactInfo };
