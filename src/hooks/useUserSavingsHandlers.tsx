import { useCallback } from 'react';

import { MINIMAL_BOOKS_QUANTITY } from '../constants';
import { ECollectionPaths } from '../enums';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { userSavingsActions } from '../redux/slices/userSavingsSlice';
import { selectUserData, selectUserSavings } from '../redux/store';
import { updateUserSavings } from '../redux/thunks';
import { TBookInfo, TUserSavingsToUpdate } from '../types';

export const useUserSavingsHandlers = (id: TBookInfo['id']) => {
  const dispatch = useAppDispatch();
  const { setUserSavingsToStore } = userSavingsActions;
  const { isAnonymous, userId, displayName, email } = useAppSelector(selectUserData);
  const { favorites = [], cartValue = [], purchases = {} } = useAppSelector(selectUserSavings);

  const updateSavings = useCallback((key: TUserSavingsToUpdate['userId'], data: TUserSavingsToUpdate['savings']) => {
    if (isAnonymous) {
      dispatch(setUserSavingsToStore(data));
    } else {
      dispatch(updateUserSavings({ userId: key, savings: data }))
        .then(() => { dispatch(setUserSavingsToStore(data)); })
        .catch((err) => { console.error(err); });
    }
  }, [dispatch, isAnonymous, setUserSavingsToStore]);

  const isAddedToFavorites = favorites.some((book) => book.id === id);
  const isAddedToCart = cartValue.some((book) => book.id === id);

  const handleBookmarkClick = (bookInfo: TBookInfo) => {
    let savings: TUserSavingsToUpdate['savings'];

    if (isAddedToFavorites) {
      const filteredFavorites = favorites.filter((book) => book.id !== id);

      savings = { [ECollectionPaths.cartValue]: [...cartValue],
        [ECollectionPaths.purchases]: { ...purchases },
        [ECollectionPaths.favorites]: filteredFavorites };
    } else {
      savings = { [ECollectionPaths.cartValue]: [...cartValue],
        [ECollectionPaths.purchases]: { ...purchases },
        [ECollectionPaths.favorites]: [...favorites, { ...bookInfo }] };
    }

    updateSavings(userId, savings);
  };

  const handleCartButtonClick = (bookInfo: TBookInfo) => {
    let savings: TUserSavingsToUpdate['savings'];

    if (isAddedToCart) {
      const filteredCartValue = cartValue.filter((book) => book.id !== id);

      savings = { [ECollectionPaths.favorites]: [...favorites],
        [ECollectionPaths.purchases]: { ...purchases },
        [ECollectionPaths.cartValue]: filteredCartValue };
    } else {
      savings = {
        [ECollectionPaths.favorites]: [...favorites],
        [ECollectionPaths.purchases]: { ...purchases },
        [ECollectionPaths.cartValue]: [...cartValue, { ...bookInfo, quantity: bookInfo.quantity ?? MINIMAL_BOOKS_QUANTITY }],
      };
    }

    updateSavings(userId, savings);
  };

  const increaseBooksQuantity = () => {
    const changedCartValue = cartValue.map((book) => {
      if (book.id === id && book.quantity) {
        return ({ ...book, quantity: book.quantity + 1 });
      }

      return book;
    });

    updateSavings(userId, { [ECollectionPaths.favorites]: [...favorites],
      [ECollectionPaths.purchases]: { ...purchases },
      [ECollectionPaths.cartValue]: changedCartValue });
  };

  const decreaseBooksQuantity = () => {
    const changedCartValue = cartValue.map((book) => {
      if (book.id === id && book.quantity) {
        return ({ ...book, quantity: book.quantity - 1 });
      }

      return book;
    });

    updateSavings(userId, { [ECollectionPaths.favorites]: [...favorites],
      [ECollectionPaths.purchases]: { ...purchases },
      [ECollectionPaths.cartValue]: changedCartValue });
  };

  return {
    isAddedToFavorites,
    isAddedToCart,
    isAnonymous,
    userId,
    favorites,
    cartValue,
    purchases,
    handleCartButtonClick,
    handleBookmarkClick,
    increaseBooksQuantity,
    decreaseBooksQuantity,
    updateSavings,
    dispatch,
    displayName,
    email,
  };
};
