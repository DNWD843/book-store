import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { BookDetails } from '../../components/BookDetails';
import { Cards } from '../../components/Cards';
import { ShoppingCart } from '../../components/ShoppingCart';
import { routes } from '../../routesMap';
import { BooksPage } from '../BooksPage';
import { LoginPage } from '../LoginPage';
import { NotFoundPage } from '../NotFoundPage';
import { RegisterPage } from '../RegisterPage';

import styles from './Main.module.css';

const MainPage: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<Navigate to={routes.books} />} path={routes.home} />
      <Route element={<BooksPage />} path={routes.books}>
        <Route index element={<Cards />} />
        <Route element={<BookDetails />} path={routes.bookId} />
      </Route>
      <Route element={<ShoppingCart />} path={routes.shoppingCart} />
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
