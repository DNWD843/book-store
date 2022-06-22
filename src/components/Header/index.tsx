import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  const { header } = styles;
  return (
    <header className={header}>
      HEADER
    </header>
  );
};

Header.displayName = 'Header';

export { Header };
