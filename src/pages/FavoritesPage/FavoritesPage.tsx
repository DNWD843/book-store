import React from 'react';

import { Cards } from '../../components/Cards';
import { Page } from '../../components/Page';
import { useAppSelector } from '../../redux/hooks';
import { selectUserSavings } from '../../redux/store';

export const FavoritesPage: React.FC = () => {
  // FIXME: вернуть тут favorites, когда исправлю слайс
  const { cartValue } = useAppSelector(selectUserSavings);

  return (
    <Page title="Избранное">
      <Cards books={cartValue} />
    </Page>
  );
};

FavoritesPage.displayName = 'FavoritesPage';
