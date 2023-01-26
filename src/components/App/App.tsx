import React from 'react';

import './App.css';
import { ContentErrorPage } from '../../pages/ContentErrorPage';
import { MainPage } from '../../pages/MainPage';
import { ErrorBoundary } from '../ErrorBoundry';
import { Footer } from '../Footer';
import { DesktopHeader, MobileHeader } from '../Header';
import { PopupsContainer } from '../PopupsContainer';

const App: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => (
  <div className="root_container app">
    {isDesktop ? (<DesktopHeader />) : (<MobileHeader />)}
    <ErrorBoundary component={ContentErrorPage}>
      <MainPage />
    </ErrorBoundary>
    <Footer />
    <PopupsContainer />
  </div>
);

App.displayName = 'App';

export { App };
