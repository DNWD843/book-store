import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../ui-components';

import { contactInfoFieldsConfig } from './contactInfoFieldsConfig';

const ContactInfo: React.FC = () => (
  <Region>
    {Object.values(contactInfoFieldsConfig).map(({ id, name, validate, InputProps }) => (
      <Col key={id} size={2}>
        <Field id={id} name={name} validate={validate}>
          {(props) => (<Input {...props} {...InputProps} />)}
        </Field>
      </Col>
    ))}
  </Region>
);

ContactInfo.displayName = 'ContactInfo';

const memoContactInfo = memo(ContactInfo);

export { memoContactInfo as ContactInfo };
