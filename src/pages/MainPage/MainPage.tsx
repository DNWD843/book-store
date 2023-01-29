import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from '../../routesMap';
import { BookDetailsPage } from '../BookDetailsPage';
import { BooksPage, BooksCataloguePage } from '../BooksPage';
import { FavoritesCataloguePage, FavoritesPage } from '../FavoritesPage';
import { LoginPage } from '../LoginPage';
import { NotFoundPage } from '../NotFoundPage';
import { OrderPage } from '../OrderPage';
import { ProfilePage } from '../ProfilePage';
import { PurchasesListPage } from '../PurchasesListPage';
import { RegisterPage } from '../RegisterPage';
import { ShoppingCartPage } from '../ShoppingCartPage';

import styles from './Main.module.css';

const MainPage: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<Navigate to={routes.books} />} path={routes.home} />
      <Route element={<BooksPage />} path={routes.books}>
        <Route index element={<BooksCataloguePage />} />
        <Route element={<BookDetailsPage />} path={routes.bookId} />
      </Route>
      <Route element={<ShoppingCartPage />} path={routes.shoppingCart} />
      <Route element={<FavoritesPage />} path={routes.favorites}>
        <Route index element={<FavoritesCataloguePage />} />
        <Route element={<BookDetailsPage />} path={routes.bookId} />
      </Route>
      <Route element={<ProfilePage />} path={routes.profile} />
      <Route element={<RegisterPage />} path={routes.register} />
      <Route element={<LoginPage />} path={routes.login} />
      <Route element={<OrderPage />} path={routes.order} />
      <Route element={<PurchasesListPage />} path={routes.purchasesHistory} />
      <Route element={<Navigate to={routes.books} />} path={routes.ghPagesRoute} />
      <Route element={<NotFoundPage />} path={routes.notFound} />
    </Routes>
  </main>
);

MainPage.displayName = 'Content';

export { MainPage };
