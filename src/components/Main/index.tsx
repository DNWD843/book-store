import React from 'react';

import { Counter } from '../../features/counter/Counter';

import styles from './Main.module.css';

const Main: React.FC = () => {
  const { main } = styles;
  return (
    <main className={main}>
      <Counter />
    </main>
  );
};

Main.displayName = 'Main';

export { Main };
