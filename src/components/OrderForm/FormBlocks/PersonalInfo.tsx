import React, { memo } from 'react';
import { Field } from 'react-final-form';

import { Col, Input, Region, Row } from '../../../ui-components';
import { createFormFieldId } from '../../../utils';
import { firstNameValidator, lastNameValidator } from '../../../validators/OrderFormValidators';
import { FORM_ID, orderFormFields } from '../constants';

const PersonalInfo: React.FC = () => (
  <Region>
    <Row>
      <Col>
        <Field
          id={createFormFieldId(FORM_ID, orderFormFields.lastName.name)}
          name={orderFormFields.lastName.name}
          validate={lastNameValidator}
          validateFields={[]}
        >
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
        <Field
          id={createFormFieldId(FORM_ID, orderFormFields.firstName.name)}
          name={orderFormFields.firstName.name}
          validate={firstNameValidator}
          validateFields={[]}
        >
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
        <Field id={createFormFieldId(FORM_ID, orderFormFields.patronymic.name)} name={orderFormFields.patronymic.name}>
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
);

PersonalInfo.displayName = 'PersonalInfo';

const memoPersonalInfo = memo(PersonalInfo);

export { memoPersonalInfo as PersonalInfo };
