import classNames from 'classnames';
import React, { memo } from 'react';

import { Col, Radio, Region, Row, Error } from '../../../../ui-components';
import styles from '../../OrderForm.module.css';

import { sendingTypeConfig } from './sendingTypeConfig';

const SendingTypeSelect: React.FC<{ error: string }> = ({ error }) => (
  <Region className={classNames(styles.block, { [styles.error]: error })}>
    <Row>
      {
        sendingTypeConfig.map((params: any) => (
          <Col key={params.id}>
            <Radio {...params} />
          </Col>
        ))
      }
    </Row>
    <Error error={error} />
  </Region>
);

SendingTypeSelect.displayName = 'SendingTypeChoice';

const memoSendingTypeSelect = memo(SendingTypeSelect);

export { memoSendingTypeSelect as SendingTypeSelect };
