import React from 'react';

import { Cards } from '../Cards';

import styles from './Main.module.css';

const Main: React.FC = () => (
  <main className={styles.main}>
    <Cards />
  </main>
);

Main.displayName = 'Content';

export { Main };
