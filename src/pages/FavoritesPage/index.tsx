import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Cards } from '../../components/Cards';
import { Page } from '../../components/Page';
import { routes } from '../../routesMap';
import { savingsStore, userStore } from '../../stores';

const FavoritesPage: React.FC = () => (<Outlet />);

FavoritesPage.displayName = 'FavoritesPage';

const FavoritesCataloguePage: React.FC = () => {
  const { isAnonymous } = userStore.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAnonymous) {
      navigate(routes.books);
    }
  }, [isAnonymous, navigate]);

  return (
    <Page subtitle={!savingsStore.favorites.length ? 'Вы ничего не выбрали.' : ''} title="Избранное">
      <Cards books={toJS(savingsStore.favorites)} />
    </Page>
  );
};

FavoritesCataloguePage.displayName = 'FavoritesCataloguePage';

const ObservableFavoritesCataloguePage = observer(FavoritesCataloguePage);

export { FavoritesPage, ObservableFavoritesCataloguePage as FavoritesCataloguePage };
