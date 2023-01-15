import classNames from 'classnames';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { SimpleButton } from '../../../ui-components';

import { THeaderProfileProps } from './HeaderProfile.props';

import styles from './HeaderProfile.module.css';

const HeaderProfile = forwardRef<HTMLDivElement, THeaderProfileProps>(
  ({ title, onLogout, onDelete, onProfileClick, isMenuOpened, isAnonymous, photoUrl, menuButtonRef, isAdmin, onUpdateBooksCatalogue }, ref) => (
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
            <button
              className={classNames('btn btn-outline-secondary btn-sm', styles.menuButton)}
              ref={menuButtonRef}
              type="button"
              onClick={onProfileClick}
            >
              {title}
            </button>

            <div className={styles.overlay} />
            <div
              className={classNames(styles.menu, {
                [styles.isMenuOpened]: isMenuOpened,
              })}
              ref={ref}
            >
              <nav className={styles.navLinks}>
                <li>
                  <Link className={styles.link} to={routes.profile} onClick={onProfileClick}>Данные профиля</Link>
                </li>
                <li>
                  <Link className={styles.link} to={routes.purchasesHistory} onClick={onProfileClick}>История покупок</Link>
                </li>
              </nav>
              <div className={styles.buttons}>
                { isAdmin ? <SimpleButton onClick={onUpdateBooksCatalogue}>Обновить каталог</SimpleButton> : null }
                <button className={classNames('btn btn-outline-secondary btn-sm', styles.button)} type="button" onClick={onLogout}>Выйти</button>
                <button className={classNames('btn btn-outline-danger btn-sm', styles.button)} type="button" onClick={onDelete}>Удалить аккаунт</button>
              </div>
            </div>

          </>
        )}
    </div>
  ),
);

HeaderProfile.displayName = 'Profile';

export { HeaderProfile };
