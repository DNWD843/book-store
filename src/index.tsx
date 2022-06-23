import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundry';
import { GlobalErrorPage } from './pages/GlobalErrorPage';
import { store } from './redux/store';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ErrorBoundary component={GlobalErrorPage}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
