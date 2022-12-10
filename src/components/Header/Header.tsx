import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { routes } from '../../routesMap';
import { BookSearch } from '../BookSearch';
import { DateWidget } from '../DateWidget';
import { NavLinks } from '../HeaderNavLinks';
import { ProfileComponent } from '../Profile';

import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Link className={styles.logoLink} title="На главную" to={routes.books}>
      <h2 className={styles.logo}>BookStore</h2>
    </Link>

    <div className={styles.search}>
      <Routes>
        <Route element={<BookSearch />} path={routes.books}>
          <Route element={<BookSearch />} path={routes.bookId} />
        </Route>
        <Route element={<></>} path={routes.shoppingCart} />
        <Route element={<></>} path={routes.favorites} />
      </Routes>
    </div>
    <div className={styles.profile}>
      <ProfileComponent />
    </div>
    <nav className={styles.navLinks}>
      <NavLinks />
    </nav>
    <DateWidget className={styles.dateWidget} />
  </header>
);

Header.displayName = 'Header';

export { Header };
