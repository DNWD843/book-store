import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ECollectionPaths } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userSavingsActions } from '../../redux/slices/userSavingsSlice';
import { selectUserData, selectUserSavings, serviceActions } from '../../redux/store';
import { updateUserSavings } from '../../redux/thunks';
import { TBookInfo, TUserSavingsToUpdate } from '../../types';
import { storage, storageKeys } from '../../utils';

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
  const userSavings = useAppSelector(selectUserSavings);

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
        .then(() => {
          storage.setData(storageKeys.USER_SAVINGS, data);
          dispatch(serviceActions.setSavings);
        })
        .catch((err) => { console.error(err); });
    }
  }, [dispatch, isAnonymous, setUserSavingsToStore]);

  const onBookmarkClick = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    const savings = { ...omit(userSavings, 'resetStatus'), [ECollectionPaths.favorites]: [...userSavings.favorites, id] };
    updateSavings(userId, savings);
  };

  const onCartButtonClick = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();

    const savings = { ...omit(userSavings, 'resetStatus'), [ECollectionPaths.cartValue]: [...userSavings.cartValue, { ...props }] };
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
