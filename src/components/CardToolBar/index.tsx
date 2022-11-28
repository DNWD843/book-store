import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/slices/bookDetailsSlice';
import { booksActions } from '../../redux/slices/booksSlice';
import { getSelectedBooks } from '../../redux/store';
import { TBookInfo } from '../../types';

import { CardToolBar } from './CardToolBar';

import styles from './CardToolBar.module.css';

const CardToolBarComponent: React.FC<TBookInfo> = (props) => {
  const { id, author, title, price } = props;
  const { setBookDetails } = bookDetailsActions;
  const { addBookToSelectedBooks, removeBookFromSelectedBooks } = booksActions;
  const selectedBooks = useSelector(getSelectedBooks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mouseOverRef = useRef<boolean>(false);
  const [visible, setVisible] = useState(false);

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

  const onBookClick = (bookId: TBookInfo['id'], bookInfo: TBookInfo) => () => {
    dispatch(setBookDetails(bookInfo));
    navigate(String(bookId));
  };

  // TODO: затипизировать evt
  const onBookmarkClick = (bookId: TBookInfo['id']) => (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (selectedBooks.includes(id)) {
      dispatch(removeBookFromSelectedBooks(id));
    } else {
      dispatch(addBookToSelectedBooks(bookId));
    }
  };

  const onCartButtonClick = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  return (
    <CardToolBar
      author={author}
      className={classNames({ [styles.isVisible]: visible })}
      price={price}
      title={title}
      onBookCardClick={onBookClick(id, props)}
      onBookmarkButtonClick={onBookmarkClick(id)}
      onCartButtonClick={onCartButtonClick}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    />
  );
};

CardToolBarComponent.displayName = 'CardToolBarComponent';

export { CardToolBarComponent as CardToolBar };
