import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectStatus } from '../../redux/store';
import { Loader } from '../Loader';

import { Main } from './Main';

const MainComponent: React.FC = () => {
  const fetchStatus = useAppSelector(selectStatus);

  if (fetchStatus === 'loading') {
    return (<Loader />);
  }

  return (
    <Main />
  );
};

MainComponent.displayName = 'Content';

export { MainComponent };
