import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserSavingsHandlers } from '../../../hooks/useUserSavingsHandlers';
import { useAppDispatch } from '../../../redux/hooks';
import { bookDetailsActions } from '../../../redux/slices/bookDetailsSlice';
import { TBookInfo } from '../../../types';
import { storage, storageKeys } from '../../../utils/localStorage';

import { CardToolBar } from './CardToolBar';

import styles from './CardToolBar.module.css';

const CardToolBarComponent: React.FC<TBookInfo> = (props) => {
  const { id, author, title, price } = props;
  const navigate = useNavigate();
  const mouseOverRef = useRef<boolean>(false);
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { setBookDetails } = bookDetailsActions;

  const { isAnonymous, isAddedToFavorites, isAddedToCart, handleBookmarkClick, handleCartButtonClick } = useUserSavingsHandlers(id);

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
    dispatch(setBookDetails(props));
    storage.setData(storageKeys.BOOK_DETAILS, props);
    navigate(String(bookId));
  };

  const onBookmarkClick = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    handleBookmarkClick(props);
  };

  const onCartButtonClick = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();

    handleCartButtonClick(props);
  };

  return (
    <CardToolBar
      author={author}
      className={classNames({ [styles.isVisible]: visible })}
      isAddedToCart={isAddedToCart}
      isAddedToFavorites={isAddedToFavorites}
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
