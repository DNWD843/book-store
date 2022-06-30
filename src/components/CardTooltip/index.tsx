import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { booksActions } from '../../redux/reducers/booksReducer';
import { selectActiveCardId } from '../../redux/store';
import { TBookInfo } from '../../types';

import { CardTooltip } from './CardTooltip';

import styles from './CardTooltip.module.css';

const CardTooltipComponent: React.FC<TBookInfo> = ({ id, author, title, price }) => {
  const { showCardTooltip, hideCardTooltip } = booksActions;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showTooltip = (cardId: number) => () => {
    dispatch(showCardTooltip(cardId));
  };

  const hideTooltip = () => {
    dispatch(hideCardTooltip());
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
    <CardTooltip
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

export { CardTooltipComponent as CardTooltip };
