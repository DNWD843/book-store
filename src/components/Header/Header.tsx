import React from 'react';
import { NavLink } from 'react-router-dom';

import { BookSearch } from '../BookSearch';

import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <h2 className={styles.logo}>BookStore</h2>
    <div className={styles.search}>
      <BookSearch />
    </div>
    <div className={styles.profile}>HOC ProtectedRoute</div>
    <nav className={styles.navLinks}>
      <ul>
        <li>
          <NavLink className={styles.favoritesLink} to="#" type="button">Fav</NavLink>
        </li>
        <li>
          <NavLink className={styles.cartLink} to="#" type="button">Cart</NavLink>
        </li>
      </ul>
    </nav>
    <span className={styles.dateToday}>today</span>
  </header>
);

Header.displayName = 'Header';

export { Header };
