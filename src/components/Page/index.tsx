import React, { PropsWithChildren } from 'react';

import { TPageProps } from './Page.props';

import styles from './Page.module.css';

export const Page: React.FC<PropsWithChildren<TPageProps>> = ({ title, subtitle, children }) => (
  <div className={styles.pageContainer}>
    <div className={styles.pageHeader}>
      <h2 className={styles.pageTitle}>{title}</h2>
      {subtitle && (<p className={styles.pageSubtitle}>{subtitle}</p>)}
    </div>
    <div className={styles.pageContent}>
      {children}
    </div>
  </div>
);

Page.displayName = 'Page';
