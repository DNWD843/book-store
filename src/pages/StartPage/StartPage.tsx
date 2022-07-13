import classNames from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { setBooksCollection } from '../../api';
import { mockedData } from '../../constants';
import { EFetchStatuses } from '../../enums';
import { useAppDispatch } from '../../redux/hooks';
import { loginUserAnonymously, logoutUser } from '../../redux/thunks/authThunks';
import { routes } from '../../routesMap';

import styles from './StartPage.module.css';

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(loginUserAnonymously())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.rejected) {
          // @ts-ignore
          throw res.error;
        }
        navigate(routes.main);
      }).catch((err: any) => {
      // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
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
        onClick={handleClick}
      >
        Перейти в магазин
      </button>
      <button className="btn btn-primary" type="button" onClick={() => setBooksCollection(mockedData)}>set books collection</button>
      <button className="btn btn-warning" type="button" onClick={() => dispatch(logoutUser())}>sign out</button>
    </div>
  );
};

StartPage.displayName = 'StartPage';

export { StartPage };
