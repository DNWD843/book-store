import React from 'react';

import styles from '../Input.module.css';
import { TInputProps } from '../Input.props';

export const Input: React.FC<TInputProps> = ({ label = '', error = '', inputElementProps }) => (
  <div className={styles.inputContainer}>
    <label className={styles.label}>
      <span className={styles.inputLabel}>{label}</span>
      <input
        {...inputElementProps}
      />
    </label>
    <span className={styles.error}>{error}</span>
  </div>
);

Input.displayName = 'Input';
