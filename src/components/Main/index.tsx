import React from 'react';

import { Error } from '../Error';

import styles from './Main.module.css';

const Main: React.FC = () => {
  const { main } = styles;
  return (
    <main className={main}>
      <Error />
    </main>
  );
};

Main.displayName = 'Main';

export { Main };
