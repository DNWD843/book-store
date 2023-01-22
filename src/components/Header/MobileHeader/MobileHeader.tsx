import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { BookSearchFilter } from '../../BookSearchFilter';
import { MobileProfile } from '../HeaderProfile_DEPRECATED';
import { DateWidget } from '../partials/HeaderDateWidget';
import { MobileHeaderActions } from '../partials/MobileHeaderActions';

import { TMobileHeaderProps } from './MobileHeader.props';

import styles from './MobileHeader.module.css';

const MobileHeader: React.FC<TMobileHeaderProps> = (
  { searchFilterRef, menuRef, isSearchFilterVisible, isMenuVisible },
) => (
  <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logoLink} title="На главную" to={routes.books}>
          <h2 className={styles.logo}>BookStore</h2>
        </Link>

        <div className={styles.actions}>
          <MobileHeaderActions />
        </div>

        <DateWidget className={styles.dateWidget} />
      </div>
    </header>

    <div className={classNames(styles.searchFilter, { [styles.isSearchFilterVisible]: isSearchFilterVisible })} ref={searchFilterRef}>
      <BookSearchFilter />
    </div>

    <div className={classNames(styles.menu, { [styles.isMenuVisible]: isMenuVisible })} ref={menuRef}>
      <div className={styles.menuContent}>
        <div className={styles.profile}>
          {isMenuVisible ? (<MobileProfile />) : null}
        </div>
        <div className={styles.menuActions} />
      </div>

    </div>
  </>
);

MobileHeader.displayName = 'MobileHeader';

const MemoMobileHeader = memo(MobileHeader);

export { MemoMobileHeader as MobileHeader };
