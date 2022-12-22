import React, { memo } from 'react';

import { Col, Radio, Region, Row } from '../../../../ui-components';
import styles from '../../OrderForm.module.css';

import { sendingTypeConfig } from './sendingTypeConfig';

const SendingTypeSelect: React.FC = () => (
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

const memoSendingTypeSelect = memo(SendingTypeSelect);

export { memoSendingTypeSelect as SendingTypeSelect };
