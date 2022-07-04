import React from 'react';
import { Outlet } from 'react-router-dom';

const BooksPage: React.FC = () => (<Outlet />);

BooksPage.displayName = 'BooksPage';

export { BooksPage };
