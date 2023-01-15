import classNames from 'classnames';
import React, { memo, PropsWithChildren } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { routes } from '../../routesMap';
import { SimpleButton } from '../../ui-components';

import { TPageProps } from './Page.props';

import styles from './Page.module.css';

const Page: React.FC<PropsWithChildren<TPageProps>> = ({ title, subtitle, withNavLinks = true, children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>{title}</h2>
        {withNavLinks
          ? (
            <>
              <SimpleButton className={classNames(styles.pageNavLink)} onClick={() => navigate(-1)}>Назад</SimpleButton>
              <NavLink className={styles.pageNavLink} to={routes.books}>На главную</NavLink>
            </>
          )
          : null}
        {subtitle && (<p className={styles.pageSubtitle}>{subtitle}</p>)}
      </div>
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
};

Page.displayName = 'Page';

const MemoPage = memo(Page);

export { MemoPage as Page };
