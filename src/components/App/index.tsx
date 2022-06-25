import React, { useEffect } from 'react';

import './App.css';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppDispatch } from '../../redux/hooks';
import { getBooks } from '../../redux/thunks';

import { App } from './App';

const AppComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <App />
  );
};

export default withReduxStore(AppComponent);
