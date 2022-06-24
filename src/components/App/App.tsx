import React from 'react';

import './App.css';
import { ContentErrorPage } from '../../pages/ContentErrorPage';
import { ErrorBoundary } from '../ErrorBoundry';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MainComponent } from '../Main';

export const App: React.FC = () => (
  <div className="root_container app">
    <Header />
    <ErrorBoundary component={ContentErrorPage}>
      <MainComponent />
    </ErrorBoundary>
    <Footer />
  </div>
);
