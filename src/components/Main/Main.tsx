import React from 'react';

import styles from './Main.module.css';

const Main: React.FC = () => (
  <main className={styles.main}>
    Content
  </main>
);

Main.displayName = 'Content';

export { Main };
