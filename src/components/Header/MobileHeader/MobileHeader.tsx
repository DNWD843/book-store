import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { DateWidget } from '../partials/HeaderDateWidget';
import { MobileHeaderActions } from '../partials/MobileHeaderActions';

import styles from './MobileHeader.module.css';

const MobileHeader: React.FC = () => (
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
);

MobileHeader.displayName = 'MobileHeader';

const MemoMobileHeader = memo(MobileHeader);

export { MemoMobileHeader as MobileHeader };
