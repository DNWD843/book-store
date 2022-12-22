import React from 'react';

import { SimpleButton, SubmitButton } from '../../../ui-components';

import styles from './ActionButtons.module.css';

export const ActionButtons:React.FC<{ onClear: () => void }> = ({ onClear }) => (
  <div className={styles.formButtons}>
    <SubmitButton className="btn-primary btn-lg">Оформить заказ</SubmitButton>
    <SimpleButton className="btn-outline-secondary btn-lg" onClick={onClear}>Очистить форму</SimpleButton>
  </div>
);

ActionButtons.displayName = 'FormButtons';
