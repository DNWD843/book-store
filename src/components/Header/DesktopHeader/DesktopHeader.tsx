import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { BookSearch } from '../../BookSearch';
import { DateWidget } from '../HeaderDateWidget';
import { NavLinks } from '../HeaderNavLinks';
import { HeaderProfileComponent } from '../HeaderProfile';

import styles from './Header.module.css';

const DesktopHeader: React.FC<{ isBookSearchVisible: boolean }> = ({ isBookSearchVisible = false }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link className={styles.logoLink} title="На главную" to={routes.books}>
        <h2 className={styles.logo}>BookStore</h2>
      </Link>

      <div className={styles.search}>
        { isBookSearchVisible ? (<BookSearch />) : null}
      </div>
      <div className={styles.profile}>
        <HeaderProfileComponent />
      </div>
      <nav className={styles.navLinks}>
        <NavLinks />
      </nav>
      <DateWidget className={styles.dateWidget} />
    </div>
  </header>
);

DesktopHeader.displayName = 'Header';

const MemoDesktopHeader = memo(DesktopHeader);

export { MemoDesktopHeader as DesktopHeader };
