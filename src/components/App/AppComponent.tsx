import React from 'react';

import './App.css';
import { ContentErrorPage } from '../../pages/ContentErrorPage';
import { ErrorBoundary } from '../ErrorBoundry';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

export const AppComponent: React.FC = () => (
  <div className="root_container app">
    <Header />
    <ErrorBoundary component={ContentErrorPage}>
      <Main />
    </ErrorBoundary>
    <Footer />
  </div>
);