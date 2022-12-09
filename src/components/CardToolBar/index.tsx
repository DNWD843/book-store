import classNames from 'classnames';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ECollectionPaths } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userSavingsActions } from '../../redux/slices/userSavingsSlice';
import { selectUserData, selectUserSavings } from '../../redux/store';
import { updateUserSavings } from '../../redux/thunks';
import { TBookInfo, TUserSavingsToUpdate } from '../../types';

import { CardToolBar } from './CardToolBar';

import styles from './CardToolBar.module.css';

const CardToolBarComponent: React.FC<TBookInfo> = (props) => {
  const { id, author, title, price } = props;
  const navigate = useNavigate();
  const mouseOverRef = useRef<boolean>(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { setUserSavingsToStore } = userSavingsActions;
  const { isAnonymous, userId } = useAppSelector(selectUserData);
  const { favorites, cartValue } = useAppSelector(selectUserSavings);
  const isAddedToFavorites = useMemo(() => favorites.includes(id), [id, favorites]);
  const isAddedToCart = useMemo(() => cartValue.some((book) => book.id === id), [cartValue, id]);

  const showTooltip = () => {
    mouseOverRef.current = true;
    const timerId = setTimeout(() => {
      if (mouseOverRef.current) {
        setVisible(true);
      }
      clearTimeout(timerId);
    }, 400);
  };

  const hideTooltip = () => {
    if (mouseOverRef.current) {
      mouseOverRef.current = false;
      setVisible(false);
    }
  };

  const onBookClick = (bookId: TBookInfo['id']) => () => {
    navigate(String(bookId));
  };

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

  const onBookmarkClick = useCallback((evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    let savings: TUserSavingsToUpdate['savings'];

    if (isAddedToFavorites) {
      const filteredFavorites = favorites.filter((bookId) => bookId !== id);
      savings = { cartValue, [ECollectionPaths.favorites]: filteredFavorites };
    } else {
      savings = { cartValue, [ECollectionPaths.favorites]: [...favorites, id] };
    }

    updateSavings(userId, savings);
  }, [cartValue, favorites, id, isAddedToFavorites, updateSavings, userId]);

  const onCartButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    let savings: TUserSavingsToUpdate['savings'];

    if (isAddedToCart) {
      const filteredCartValue = cartValue.filter((book) => book.id !== id);
      savings = { favorites, [ECollectionPaths.cartValue]: filteredCartValue };
    } else {
      savings = { favorites, [ECollectionPaths.cartValue]: [...cartValue, { ...props }] };
    }

    updateSavings(userId, savings);
  };

  return (
    <CardToolBar
      author={author}
      className={classNames({ [styles.isVisible]: visible })}
      isAnonymous={isAnonymous}
      price={price}
      title={title}
      onBookCardClick={onBookClick(id)}
      onBookmarkButtonClick={onBookmarkClick}
      onCartButtonClick={onCartButtonClick}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    />
  );
};

CardToolBarComponent.displayName = 'CardToolBarComponent';

export { CardToolBarComponent as CardToolBar };
