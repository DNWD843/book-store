import React from 'react';

import './App.css';
import { ContentErrorPage } from '../../pages/ContentErrorPage';
import { MainPage } from '../../pages/MainPage';
import { ErrorBoundary } from '../ErrorBoundry';
import { Footer } from '../Footer';
import { Header } from '../Header';

const App: React.FC = () => (
  <div className="root_container app">
    <Header />
    <ErrorBoundary component={ContentErrorPage}>
      <MainPage />
    </ErrorBoundary>
    <Footer />
  </div>
);

App.displayName = 'App';

export { App };
