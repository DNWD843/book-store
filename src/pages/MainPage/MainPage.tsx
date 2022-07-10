import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BookDetails } from '../../components/BookDetails';
import { Cards } from '../../components/Cards';
import { routes } from '../../routesMap';
import { BooksPage } from '../BooksPage';
import { LoginPage } from '../LoginPage';
import { NotFoundPage } from '../NotFoundPage';
import { RegisterPage } from '../RegisterPage';
import { ShoppingCartPage } from '../ShoppingCartPage';
import { StartPage } from '../StartPage';

import styles from './Main.module.css';

const MainPage: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<StartPage />} path={routes.startPage} />
      <Route element={<BooksPage />} path={routes.home}>
        <Route index element={<Cards />} />
        <Route element={<BookDetails />} path={routes.bookId} />
      </Route>
      <Route element={<ShoppingCartPage />} path={routes.shoppingCart} />
      <Route element={<div>Favorites</div>} path={routes.favorites} />
      <Route element={<div>User Profile</div>} path={routes.profile} />
      <Route element={<RegisterPage />} path={routes.register} />
      <Route element={<LoginPage />} path={routes.login} />
      <Route element={<NotFoundPage />} path={routes.notFound} />
    </Routes>
  </main>
);

MainPage.displayName = 'Content';

export { MainPage };
