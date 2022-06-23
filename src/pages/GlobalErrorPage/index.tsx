import React from 'react';

import styles from './GlobalError.module.css';

export const GlobalErrorPage = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Произошла ошибка.</h3>
      <p className={styles.message}>Пожалуйста, попробуйте еще раз позднее.</p>
      <a className={styles.redirectLink} href="/">Вернуться на главную</a>
    </div>
  </div>
);
