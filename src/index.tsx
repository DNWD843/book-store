import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundry';
import { GlobalErrorPage } from './pages/GlobalErrorPage';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary component={GlobalErrorPage}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
