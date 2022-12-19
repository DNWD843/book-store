import React from 'react';

import { TRowProps } from './Row.props';

import styles from './Row.module.css';

export const Row: React.FC<TRowProps> = ({ children }) => (
  <div className={styles.row}>
    {children}
  </div>
);
