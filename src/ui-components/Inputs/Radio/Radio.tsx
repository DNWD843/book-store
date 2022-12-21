import React from 'react';
import { Field } from 'react-final-form';

import { TSendingTypeRadioButton } from '../../../types';
import styles from '../Input.module.css';

export const Radio: React.FC<TSendingTypeRadioButton> = ({ label, ...props }) => (
  <div className={styles.radioInputContainer}>
    <label className={styles.radioLabel}>
      {label}
      <Field {...props} type="radio" />
    </label>
  </div>
);

Radio.displayName = 'Radio';
