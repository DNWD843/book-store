import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

export const withReduxStore = (Component: React.ComponentType) => {
  const Wrapper: React.FC = () => (
    <Provider store={store}>
      <Component />
    </Provider>
  );

  Wrapper.displayName = `withReduxStore(${Component.displayName})`;

  return Wrapper;
};
