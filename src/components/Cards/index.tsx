import React from 'react';

import { useAppSelector } from '../../redux/hooks';
import { selectBooks } from '../../redux/store';

import { Cards } from './Cards';

const CardsComponent = () => {
  const books = useAppSelector(selectBooks);

  return (
    <Cards books={books} />
  );
};

CardsComponent.displayName = 'CardsContainer';

export { CardsComponent as Cards };
