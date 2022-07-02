import classNames from 'classnames';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { booksActions } from '../../redux/reducers/booksReducer';
import { selectActiveCardId } from '../../redux/store';
import { TBookInfo } from '../../types';

import { CardToolBar } from './CardToolBar';

import styles from './CardToolBar.module.css';

const CardToolBarComponent: React.FC<TBookInfo> = ({ id, author, title, price }) => {
  const { showCardTooltip, hideCardTooltip } = booksActions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mouseOverRef = useRef<boolean>(false);

  const showTooltip = (cardId: number) => () => {
    mouseOverRef.current = true;
    const timerId = setTimeout(() => {
      if (mouseOverRef.current) {
        dispatch(showCardTooltip(cardId));
      }
      clearTimeout(timerId);
    }, 400);
  };

  const hideTooltip = () => {
    if (mouseOverRef.current) {
      mouseOverRef.current = false;
      dispatch(hideCardTooltip());
    }
  };

  const onBookClick = (bookId: TBookInfo['id']) => () => {
    navigate(String(bookId));
  };

  // TODO: затипизировать evt
  const onBookmarkClick = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
  };
  const onCartButtonClick = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const activeCardId = useAppSelector(selectActiveCardId);
  const isTooltipVisible = activeCardId === id;

  return (
    <CardToolBar
      author={author}
      className={classNames({ [styles.isVisible]: isTooltipVisible })}
      price={price}
      title={title}
      onBookClick={onBookClick(id)}
      onBookmarkClick={onBookmarkClick}
      onCartButtonClick={onCartButtonClick}
      onMouseEnter={showTooltip(id)}
      onMouseLeave={hideTooltip}
    />
  );
};

export { CardToolBarComponent as CardToolBar };
