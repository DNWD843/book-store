import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundry';
import { AppErrorPage } from './pages/AppErrorPage';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <ErrorBoundary component={AppErrorPage}>
      <App />
      <div className="modal-container" id="modal-container" />
      <div className="popup-container" id="popup-container" />
    </ErrorBoundary>
  </BrowserRouter>,
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service worker registered'))
    .catch((err) => console.log('service worker not registered', err));
}
