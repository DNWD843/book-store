import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';

import { savingsStore, userStore } from '../../stores';

import { BookDetails } from './BookDetails';
import { TBookDetailsComponentProps } from './BookDetails.props';

const BookDetailsComponent: React.FC<TBookDetailsComponentProps> = ({ book }) => {
  const { isAnonymous } = userStore.user;
  const { favorites, cartValue, addToFavorites, removeFromFavorites, addToCart, removeFromCart, updateSavingsInDB } = savingsStore;

  const isAddedToFavorites = toJS(favorites).some((favoriteBook) => favoriteBook.id === book.id);
  const isAddedToCart = toJS(cartValue).some((favoriteBook) => favoriteBook.id === book.id);

  const handleClickFavoritesButton = useCallback(() => {
    if (isAddedToFavorites) {
      removeFromFavorites(book);
    } else {
      addToFavorites(book);
    }

    if (!isAnonymous) {
      updateSavingsInDB();
    }
  }, [addToFavorites, book, isAddedToFavorites, isAnonymous, removeFromFavorites, updateSavingsInDB]);

  const handleClickCartButton = useCallback(() => {
    if (isAddedToCart) {
      removeFromCart(book);
    } else {
      addToCart(book);
    }

    if (!isAnonymous) {
      updateSavingsInDB();
    }
  }, [addToCart, book, isAddedToCart, isAnonymous, removeFromCart, updateSavingsInDB]);

  return (
    <BookDetails
      {...book}
      isAddedToCart={isAddedToCart}
      isAddedToFavorites={isAddedToFavorites}
      isAnonymous={isAnonymous}
      onClickCartButton={handleClickCartButton}
      onClickFavoritesButton={handleClickFavoritesButton}
    />
  );
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

const ObservableBookDetailsComponent = observer(BookDetailsComponent);

export { ObservableBookDetailsComponent as BookDetails };
