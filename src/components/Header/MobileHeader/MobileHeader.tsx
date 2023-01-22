import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { SimpleButton } from '../../../ui-components';
import {
  closeIconMobile,
  closeIconTablet,
  menuIconMobile,
  menuIconTablet,
  searchIconMobile,
  searchIconTablet,
} from '../../../vendor/icons';
import { BookSearchFilter } from '../../BookSearchFilter';
import { DateWidget } from '../HeaderDateWidget';
import { HeaderProfileComponent } from '../HeaderProfile/DesktopProfile';

import { TMobileHeaderProps } from './MobileHeader.props';

import styles from './MobileHeader.module.css';

const MobileHeader: React.FC<TMobileHeaderProps> = (
  { searchFilterRef, menuRef, isSearchAvailable, isSearchFilterVisible, isMenuVisible, isTablet, showSearchFilter, showMenu },
) => (
  <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logoLink} title="На главную" to={routes.books}>
          <h2 className={styles.logo}>BookStore</h2>
        </Link>

        <div className={styles.actions}>
          {isSearchAvailable
            ? (
              <div>
                {isSearchFilterVisible
                  ? (<SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')}>{isTablet ? closeIconTablet : closeIconMobile}</SimpleButton>)
                  : (<SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')} onClick={showSearchFilter}>{isTablet ? searchIconTablet : searchIconMobile}</SimpleButton>)}

              </div>
            ) : null}
          {isMenuVisible
            ? (<SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')}>{isTablet ? closeIconTablet : closeIconMobile}</SimpleButton>)
            : (<SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')} onClick={showMenu}>{isTablet ? menuIconTablet : menuIconMobile}</SimpleButton>)}
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
          {isMenuVisible ? (<HeaderProfileComponent />) : null}
        </div>
        <div className={styles.menuActions}></div>
      </div>

    </div>
  </>
);

MobileHeader.displayName = 'MobileHeader';

const MemoMobileHeader = memo(MobileHeader);

export { MemoMobileHeader as MobileHeader };
