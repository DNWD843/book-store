import classNames from 'classnames';
import React from 'react';

import styles from './NotFound.module.css';

type TNotFoundPageProps = {
  onClickGoBackButton: () => void,
  onClickGoToMainButton: () => void
};

export const NotFoundPage: React.FC<TNotFoundPageProps> = ({ onClickGoBackButton, onClickGoToMainButton }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Страница не найдена или не существует</h2>
    <div className={styles.links}>
      <button className={classNames(styles.goBackButton, 'btn', 'btn-link')} type="button" onClick={onClickGoBackButton}>Вернуться назад</button>
      <button className={classNames(styles.goHomeButton, 'btn', 'btn-link')} type="button" onClick={onClickGoToMainButton}>Перейти на главную</button>
    </div>
  </div>
);
