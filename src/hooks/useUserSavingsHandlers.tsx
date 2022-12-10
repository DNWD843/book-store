import { useCallback, useMemo } from 'react';

import { ECollectionPaths } from '../enums';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { userSavingsActions } from '../redux/slices/userSavingsSlice';
import { selectUserData, selectUserSavings } from '../redux/store';
import { updateUserSavings } from '../redux/thunks';
import { TBookInfo, TUserSavingsToUpdate } from '../types';

export const useUserSavingsHandlers = (id: TBookInfo['id']) => {
  const dispatch = useAppDispatch();
  const { setUserSavingsToStore } = userSavingsActions;
  const { isAnonymous, userId } = useAppSelector(selectUserData);
  const { favorites, cartValue } = useAppSelector(selectUserSavings);

  const isAddedToFavorites = useMemo(() => favorites.includes(id), [id, favorites]);
  const isAddedToCart = useMemo(() => cartValue.some((book) => book.id === id), [cartValue, id]);

  const updateSavings = useCallback((key: TUserSavingsToUpdate['userId'], data: TUserSavingsToUpdate['savings']) => {
    if (isAnonymous) {
      dispatch(setUserSavingsToStore(data));
    } else {
      dispatch(updateUserSavings({ userId: key, savings: data }))
        .then(() => { dispatch(setUserSavingsToStore(data)); })
        // .then(() => {
        //   storage.setData(storageKeys.USER_SAVINGS, data);
        //   dispatch(serviceActions.setSavings);
        // })
        .catch((err) => { console.error(err); });
    }
  }, [dispatch, isAnonymous, setUserSavingsToStore]);

  const handleBookmarkClick = () => {
    let savings: TUserSavingsToUpdate['savings'];

    if (isAddedToFavorites) {
      const filteredFavorites = favorites.filter((bookId) => bookId !== id);
      savings = { cartValue, [ECollectionPaths.favorites]: filteredFavorites };
    } else {
      savings = { cartValue, [ECollectionPaths.favorites]: [...favorites, id] };
    }

    updateSavings(userId, savings);
  };

  const handleCartButtonClick = (bookInfo: TBookInfo) => {
    let savings: TUserSavingsToUpdate['savings'];

    if (isAddedToCart) {
      const filteredCartValue = cartValue.filter((book) => book.id !== id);
      savings = { favorites, [ECollectionPaths.cartValue]: filteredCartValue };
    } else {
      savings = { favorites, [ECollectionPaths.cartValue]: [...cartValue, { ...bookInfo }] };
    }

    updateSavings(userId, savings);
  };

  return {
    isAddedToFavorites,
    isAddedToCart,
    isAnonymous,
    handleCartButtonClick,
    handleBookmarkClick,
  };
};
