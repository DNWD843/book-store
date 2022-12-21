import React from 'react';

import { Col, Radio, Region, Row } from '../../../../ui-components';
import styles from '../../OrderForm.module.css';

import { sendingTypeConfig } from './sendingTypeConfig';

export const SendingTypeSelect: React.FC = () => (
  <Region className={styles.block}>
    <Row>
      {
        sendingTypeConfig.map((params: any) => (
          <Col key={params.id}>
            <Radio {...params} />
          </Col>
        ))
      }
    </Row>
  </Region>
);

SendingTypeSelect.displayName = 'SendingTypeChoice';
