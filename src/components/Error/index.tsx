import React from 'react';

import styles from './Error.module.css';

export const Error = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>Произошла ошибка.</h3>
    <p className={styles.message}>Пожалуйста, попробуйте еще раз позднее.</p>
  </div>
);
