import React from 'react';

import './App.css';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

const App: React.FC = () => (
  <div className="root_container app">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
