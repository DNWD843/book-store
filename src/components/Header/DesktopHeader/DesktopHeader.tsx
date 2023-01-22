import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { BookSearchFilter } from '../../BookSearchFilter';
import { DesktopMenuButton } from '../partials/DesktopMenuButton';
import { DateWidget } from '../partials/HeaderDateWidget';
import { NavLinks } from '../partials/HeaderNavLinks';

import styles from './DesktopHeader.module.css';

const DesktopHeader: React.FC<{ isSearchAvailable: boolean }> = ({ isSearchAvailable = false }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link className={styles.logoLink} title="На главную" to={routes.books}>
        <h2 className={styles.logo}>BookStore</h2>
      </Link>
      { isSearchAvailable ? (<BookSearchFilter searchFilterRef={{ current: null }} />) : null}
      <DesktopMenuButton />
      <NavLinks />
      <DateWidget className={styles.dateWidget} />
    </div>
  </header>
);

DesktopHeader.displayName = 'Header';

const MemoDesktopHeader = memo(DesktopHeader);

export { MemoDesktopHeader as DesktopHeader };
