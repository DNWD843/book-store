import React from 'react';

import { TInputProps } from './Input.props';

import styles from './Input.module.css';

export const Input: React.FC<TInputProps> = ({ label = '', error = '', inputElementProps }) => (
  <div className={styles.fieldset}>
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
