import React from 'react';

import styles from './ContentErrorPage.module.css';

const ContentErrorPage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Что-то пошло не так!</h3>
      <p className={styles.message}>Пожалуйста, обновите страницу или попробуйте еще раз позднее.</p>
      <ul className={styles.links}>
        <li><a className={styles.redirectLink} href="/">Назад</a></li>
        <li><a className={styles.redirectLink} href="/">Вернуться на главную</a></li>
      </ul>
    </div>
  </div>
);

ContentErrorPage.displayName = 'ContentError';

export { ContentErrorPage };
