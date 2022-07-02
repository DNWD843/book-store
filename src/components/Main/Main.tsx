import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BooksPage } from '../../pages/BooksPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { StartPage } from '../../pages/StartPage';
import { routes } from '../../routesMap';
import { BookDetails } from '../BookDetails';
import { Cards } from '../Cards';
import { ShoppingCart } from '../ShoppingCart';

import styles from './Main.module.css';

const Main: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<StartPage />} path={routes.startPage} />
      <Route element={<BooksPage />} path={routes.home}>
        <Route index element={<Cards />} />
        <Route element={<BookDetails />} path={routes.bookId} />
      </Route>
      <Route element={<ShoppingCart />} path={routes.shoppingCart} />
      <Route element={<div>Favorites</div>} path={routes.favorites} />
      <Route element={<div>User Profile</div>} path={routes.profile} />
      <Route element={<NotFoundPage />} path={routes.notFound} />
    </Routes>
  </main>
);

Main.displayName = 'Content';

export { Main };
