import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../ui-components';

import { personalInfoFieldsConfig } from './personalInfoFieldsConfig';

const PersonalInfo: React.FC = () => (
  <Region>
    {Object.values(personalInfoFieldsConfig).map(({ id, name, validate, InputProps }) => (
      <Col key={id} size={3}>
        <Field id={id} name={name} validate={validate}>
          {(props) => (
            <Input {...props} {...InputProps} />
          )}
        </Field>
      </Col>
    ))}
  </Region>
);

PersonalInfo.displayName = 'PersonalInfo';

const memoPersonalInfo = memo(PersonalInfo);

export { memoPersonalInfo as PersonalInfo };
