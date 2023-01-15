import React from 'react';

import styles from '../Input.module.css';
import { TInputProps } from '../Input.props';

export const Checkbox: React.FC<TInputProps> = ({ label = '', error = '', inputElementProps }) => (
  <div className={styles.inputContainer}>
    <label className={styles.label}>
      <span className={styles.inputLabel}>{label}</span>
      <input type="checkbox" {...inputElementProps} />
      <span className={styles.error}>{error}</span>
    </label>
  </div>
);

Checkbox.displayName = 'Checkbox';
