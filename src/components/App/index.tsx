import React from 'react';

import './App.css';
import { withReduxStore } from '../../provider/withReduxStore';

import { App } from './App';

const AppWithReduxStore = withReduxStore(App);

const AppComponent: React.FC = () => (
  <AppWithReduxStore />
);

AppComponent.displayName = 'AppDataController';

export default AppComponent;
