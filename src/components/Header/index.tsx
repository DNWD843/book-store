import React from 'react';

import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    HEADER
  </header>
);

Header.displayName = 'Header';

export { Header };
