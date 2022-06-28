import classNames from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { routes } from '../../routesMap';

import styles from './StartPage.module.css';

export const StartPage = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(routes.books);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в BookStore!</h1>
      <p className={styles.text}>
        Мы убеждены, что наш ассортимент удовлетворит любой, даже самый изысканный, запрос, а наши цены Вас приятно удивят.
        <br />
        Нашим зарегистрированным покупателям мы регулярно предоставляем интересные скидки.
        <br />
        Но, разумеется, в нашем магазине Вы можете совершать покупки и без регистрации.
        <br />
        Чтобы получать скидки и спецпредложения предлагаем Вам
        {' '}
        <Link to={routes.register}>Зарегистрироваться</Link>
        {' '}
        или
        {' '}
        <Link to={routes.auth}>Войти</Link>
        , если Вы уже зарегистрированы.
      </p>
      <h2 className={styles.subtitle}>Желаем Вам приятных покупок!</h2>
      <button
        className={classNames(styles.button, 'btn', 'btn-secondary')}
        type="button"
        onClick={handleClick}
      >
        Перейти в магазин
      </button>
    </div>
  );
};
