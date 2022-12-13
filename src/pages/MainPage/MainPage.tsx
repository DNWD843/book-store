import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { BookDetails } from '../../components/BookDetails';
import { BooksCatalogue } from '../../components/BooksCatalogue';
import { routes } from '../../routesMap';
import { BooksPage } from '../BooksPage';
import { FavoritesPage } from '../FavoritesPage/FavoritesPage';
import { LoginPage } from '../LoginPage';
import { NotFoundPage } from '../NotFoundPage';
import { RegisterPage } from '../RegisterPage';
import { ShoppingCartPage } from '../ShoppingCartPage';

import styles from './Main.module.css';

const MainPage: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<Navigate to={routes.books} />} path={routes.home} />
      <Route element={<BooksPage />} path={routes.books}>
        <Route index element={<BooksCatalogue />} />
        <Route element={<BookDetails />} path={routes.bookId} />
      </Route>
      <Route element={<ShoppingCartPage />} path={routes.shoppingCart} />
      <Route element={<FavoritesPage />} path={routes.favorites} />
      <Route element={<div>User Profile</div>} path={routes.profile} />
      <Route element={<RegisterPage />} path={routes.register} />
      <Route element={<LoginPage />} path={routes.login} />
      <Route element={<NotFoundPage />} path={routes.notFound} />
    </Routes>
  </main>
);

MainPage.displayName = 'Content';

export { MainPage };
