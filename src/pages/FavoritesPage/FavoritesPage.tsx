import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Cards } from '../../components/Cards';
import { Page } from '../../components/Page';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData, selectUserSavings } from '../../redux/store';
import { routes } from '../../routesMap';

export const FavoritesPage: React.FC = () => {
  // FIXME: вернуть тут favorites, когда исправлю слайс
  const { cartValue } = useAppSelector(selectUserSavings);
  const { isAnonymous } = useAppSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAnonymous) {
      navigate(routes.books);
    }
  }, [isAnonymous, navigate]);

  return (
    <Page subtitle={!cartValue.length ? 'Вы ничего не выбрали.' : ''} title="Избранное">
      <Cards books={cartValue} />
    </Page>
  );
};

FavoritesPage.displayName = 'FavoritesPage';
