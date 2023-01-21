import classNames from 'classnames';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { SimpleButton } from '../../../ui-components';
import { menuIconMobile, menuIconTablet, searchIconMobile, searchIconTablet } from '../../../vendor/icons';
import { BookSearch } from '../../BookSearch';
import { DateWidget } from '../HeaderDateWidget';
import { HeaderProfileComponent } from '../HeaderProfile';

import { TMobileHeaderProps } from './MobileHeader.props';

import styles from './MobileHeader.module.css';

const MobileHeader: React.FC<TMobileHeaderProps> = ({ isBookSearchVisible, isTablet }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <Link className={styles.logoLink} title="На главную" to={routes.books}>
        <h2 className={styles.logo}>BookStore</h2>
      </Link>

      <div className={styles.actions}>
        <SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')}>{isTablet ? searchIconTablet : searchIconMobile}</SimpleButton>
        <SimpleButton className={classNames(styles.actionButton, 'btn-outline-secondary')}>{isTablet ? menuIconTablet : menuIconMobile}</SimpleButton>
      </div>

      <DateWidget className={styles.dateWidget} />

      <div className={styles.search}>
        { isBookSearchVisible ? (<BookSearch />) : null}
      </div>

      <div className={styles.menu}>
        {isBookSearchVisible
          ? (
            <div className={styles.profile}>
              <HeaderProfileComponent />
            </div>
          )
          : null}
      </div>
    </div>
  </header>
);

MobileHeader.displayName = 'MobileHeader';

const MemoMobileHeader = memo(MobileHeader);

export { MemoMobileHeader as MobileHeader };
