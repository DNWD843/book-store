import React from 'react';

import './App.css';
import { withReduxStore } from '../../provider/withReduxStore';

import { App } from './App';

const AppComponent: React.FC = () => (
  <App />
);

export default withReduxStore(AppComponent);
