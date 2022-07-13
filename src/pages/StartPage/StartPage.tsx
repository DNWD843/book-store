import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { setBooksCollection } from '../../api';
import { mockedData } from '../../constants';
import { routes } from '../../routesMap';

import { TStartPageProps } from './StartPage.props';

import styles from './StartPage.module.css';

const StartPage: React.FC<TStartPageProps> = ({ onButtonClick }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Добро пожаловать в BookStore!</h1>
    <p className={styles.text}>
      Мы постоянно совершенствуемся, чтобы наш ассортимент мог удовлетворить любой, даже самый изысканный, запрос, а наши цены Вас приятно удивляли.
      <br />
      Зарегистрированным покупателям мы регулярно делаем интересные предложения со скидками.
      <br />
      Но, разумеется, в нашем магазине Вы можете совершать покупки и без регистрации.
      <br />
      Чтобы получать скидки и спецпредложения предлагаем Вам
      {' '}
      <Link to={routes.register}>Зарегистрироваться</Link>
      {' '}
      или
      {' '}
      <Link to={routes.login}>Войти</Link>
      , если Вы уже зарегистрированы.
    </p>
    <h2 className={styles.subtitle}>Желаем Вам приятных покупок!</h2>
    <button
      className={classNames(styles.button, 'btn', 'btn-secondary')}
      type="button"
      onClick={onButtonClick}
    >
      Перейти в магазин
    </button>
    <button className="btn btn-primary" type="button" onClick={() => setBooksCollection(mockedData)}>set books collection</button>
  </div>
);

StartPage.displayName = 'StartPage';

export { StartPage };
