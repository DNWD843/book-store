import React from 'react';

import { TSendingTypeRadioButtons } from '../../../types';
import { Col, Radio, Region, Row } from '../../../ui-components';
import { createFormFieldId } from '../../../utils';
import styles from '../OrderForm.module.css';
import { FORM_ID, orderFormFields } from '../constants';

export const sendingTypeConfig: TSendingTypeRadioButtons = [
  {
    name: orderFormFields.sendingType.name,
    component: 'input',
    value: 'email',
    id: createFormFieldId(FORM_ID, orderFormFields.sendingTypeEmail.name),
    label: orderFormFields.sendingTypeEmail.label,
    className: 'form-check-input',
  },
  {
    name: orderFormFields.sendingType.name,
    component: 'input',
    value: 'post',
    id: createFormFieldId(FORM_ID, orderFormFields.sendingTypePost.name),
    label: orderFormFields.sendingTypePost.label,
    className: 'form-check-input',
  },
];

export const SendingTypeChoice: React.FC = () => (
  <Region>
    <Row>
      <Col className={styles.block}>
        {
          sendingTypeConfig.map((params: any) => (<Radio key={params.id} {...params} />))
        }
      </Col>
    </Row>
  </Region>
);

SendingTypeChoice.displayName = 'SendingTypeChoice';
