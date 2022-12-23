import React from 'react';

import { SimpleButton, SubmitButton } from '../../../ui-components';

import styles from './ActionButtons.module.css';

export const ActionButtons:React.FC<{ onClear: () => void }> = ({ onClear }) => (
  <div className={styles.formButtons}>
    <SimpleButton className="btn-outline-secondary btn-lg" onClick={onClear}>Очистить форму</SimpleButton>
    <SubmitButton className="btn-primary btn-lg">Оформить заказ</SubmitButton>
  </div>
);

ActionButtons.displayName = 'FormButtons';
