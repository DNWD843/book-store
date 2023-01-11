import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region } from '../../../../../ui-components';
import { personalInfoFieldsConfig } from '../../../formConfigs';

const PersonalInfo: React.FC = () => (
  <Region>
    {Object.values(personalInfoFieldsConfig).map(({ InputProps, ...fieldProps }) => (
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

PersonalInfo.displayName = 'PersonalInfo';

const memoPersonalInfo = memo(PersonalInfo);

export { memoPersonalInfo as PersonalInfo };
