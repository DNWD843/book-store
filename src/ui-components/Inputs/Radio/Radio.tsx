import classNames from 'classnames';
import React from 'react';

import styles from '../Input.module.css';
import { TInputProps } from '../Input.props';

export const Radio: React.FC<TInputProps> = ({ label = '', error = '', inputElementProps }) => (
  <div className={classNames(styles.inputContainer, styles.radioInputContainer)}>
    <label className={classNames(styles.label, styles.radioLabel)}>
      <span className={styles.inputLabel}>{label}</span>
      <input type="radio" {...inputElementProps} />
      <span className={styles.error}>{error}</span>
    </label>
  </div>
);

Radio.displayName = 'Radio';
