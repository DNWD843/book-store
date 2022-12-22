import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region, Row } from '../../../ui-components';
import { createFormFieldId } from '../../../utils';
import { FORM_ID, orderFormFields } from '../constants';

const ContactInfo: React.FC = () => (
  <Region>
    <Row>
      <Col>
        <Field id={createFormFieldId(FORM_ID, orderFormFields.email.name)} name={orderFormFields.email.name}>
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
        <Field id={createFormFieldId(FORM_ID, orderFormFields.phoneNumber.name)} name={orderFormFields.phoneNumber.name}>
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
);

ContactInfo.displayName = 'ContactInfo';

const memoContactInfo = memo(ContactInfo);

export { memoContactInfo as ContactInfo };
