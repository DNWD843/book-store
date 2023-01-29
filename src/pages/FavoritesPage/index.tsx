import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Cards } from '../../components/Cards';
import { Page } from '../../components/Page';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData, selectUserSavings } from '../../redux/store';
import { routes } from '../../routesMap';

const FavoritesPage: React.FC = () => (<Outlet />);

FavoritesPage.displayName = 'FavoritesPage';
const FavoritesCataloguePage: React.FC = () => {
  const { favorites } = useAppSelector(selectUserSavings);
  const { isAnonymous } = useAppSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAnonymous) {
      navigate(routes.books);
    }
  }, [isAnonymous, navigate]);

  return (
    <Page subtitle={!favorites.length ? 'Вы ничего не выбрали.' : ''} title="Избранное">
      <Cards books={favorites} />
    </Page>
  );
};

FavoritesCataloguePage.displayName = 'FavoritesCataloguePage';

export { FavoritesPage, FavoritesCataloguePage };
