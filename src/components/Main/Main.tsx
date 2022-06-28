import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import { routes } from '../../routesMap';
import { Cards } from '../Cards';

import styles from './Main.module.css';

const Main: React.FC = () => (
  <main className={styles.main}>
    <Routes>
      <Route element={<div>Hello, world!</div>} path={routes.startPage} />
      <Route element={<div><Outlet /></div>} path={routes.books}>
        <Route index element={<Cards />} />
        <Route element={<div>Selected Book</div>} path={routes.book} />
      </Route>
      <Route element={<div>Cart</div>} path={routes.shoppingCart} />
      <Route element={<div>Favorites</div>} path={routes.favorites} />
      <Route element={<div>User Profile</div>} path={routes.profile} />
      <Route element={<div>Not Found Page</div>} path={routes.notFound} />
    </Routes>
  </main>
);

Main.displayName = 'Content';

export { Main };
