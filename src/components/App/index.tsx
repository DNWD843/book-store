import React, { useEffect } from 'react';

import './App.css';
import { ContentErrorPage } from '../../pages/ContentErrorPage';
import { useAppDispatch } from '../../redux/hooks';
import { getBooks } from '../../redux/thunks';
import { ErrorBoundary } from '../ErrorBoundry';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="root_container app">
      <Header />
      <ErrorBoundary component={ContentErrorPage}>
        <Main />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default App;
