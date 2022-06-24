import React, { useLayoutEffect } from 'react';

import './App.css';
import { withReduxStore } from '../../provider/withReduxStore';
import { useAppDispatch } from '../../redux/hooks';
import { getBooks } from '../../redux/thunks';

import { AppComponent } from './AppComponent';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <AppComponent />
  );
};

export default withReduxStore(App);
