import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectStatus } from '../../redux/store';
import { Loader } from '../Loader';

import styles from './Main.module.css';

const Main: React.FC = () => {
  const { main } = styles;

  const fetchStatus = useAppSelector(selectStatus);

  if (fetchStatus === 'loading') {
    return (<Loader />);
  }

  return (
    <main className={main}>
      Content
    </main>
  );
};

Main.displayName = 'Content';

export { Main };
