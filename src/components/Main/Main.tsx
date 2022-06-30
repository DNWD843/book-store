import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BooksPage } from '../../pages/BooksPage';
import { ShoppingCartPage } from '../../pages/ShoppingCartPage';
import { StartPage } from '../../pages/StartPage';
import { routes } from '../../routesMap';
import { BookDetails } from '../BookDetails';
import { Cards } from '../Cards';

import styles from './Main.module.css';

const Main: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<StartPage />} path={routes.startPage} />
      <Route element={<BooksPage />} path={routes.books}>
        <Route index element={<Cards />} />
        <Route element={<BookDetails />} path={routes.bookId} />
      </Route>
      <Route element={<ShoppingCartPage />} path={routes.shoppingCart} />
      <Route element={<div>Favorites</div>} path={routes.favorites} />
      <Route element={<div>User Profile</div>} path={routes.profile} />
      <Route element={<div>Not Found Page</div>} path={routes.notFound} />
    </Routes>
  </main>
);

Main.displayName = 'Content';

export { Main };
