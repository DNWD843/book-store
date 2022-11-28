import { enableMapSet } from 'immer';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundry';
import { AppErrorPage } from './pages/AppErrorPage';

const root = createRoot(document.getElementById('root')!);
enableMapSet();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary component={AppErrorPage}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
