import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routesMap';

import { TProfileProps } from './Profile.props';

import styles from './Profile.module.css';

const Profile: React.FC<TProfileProps> = ({ title, onLogout, onDelete, onProfileClick, isMenuOpened, isAnonymous, photoUrl }) => (
  <div className={styles.profile}>
    {isAnonymous
      ? (
        <>
          <img alt="аватар пользователя" className={styles.avatar} src={photoUrl} />
          <Link className={styles.loginLink} to={routes.login}>{title}</Link>
        </>
      )
      : (
        <>
          <img alt="аватар пользователя" className={styles.avatar} src={photoUrl} />
          <button className={classNames('btn btn-outline-secondary btn-sm', styles.menuButton)} type="button" onClick={onProfileClick}>{title}</button>

          <div className={styles.overlay} />
          <div
            className={classNames(styles.menu, {
              [styles.isMenuOpened]: isMenuOpened,
            })}
            onMouseLeave={onProfileClick}
          >
            <nav className={styles.navLinks}>
              <li>
                <Link className={styles.link} to={routes.profile}>Данные профиля</Link>
              </li>
              <li>
                <Link className={styles.link} to={routes.shoppingHistory}>История покупок</Link>
              </li>
            </nav>
            <div className={styles.buttons}>
              <button className={classNames('btn btn-outline-secondary btn-sm', styles.button)} type="button" onClick={onLogout}>Выйти</button>
              <button className={classNames('btn btn-outline-danger btn-sm', styles.button)} type="button" onClick={onDelete}>Удалить аккаунт</button>
            </div>
          </div>

        </>
      )}
  </div>
);

Profile.displayName = 'Profile';

export { Profile };
