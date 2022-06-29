import classNames from 'classnames';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions } from '../../redux/reducers/booksReducer';
import { selectActiveCardId } from '../../redux/store';
import { TBookInfo } from '../../types';

import { CardTooltip } from './CardTooltip';

import styles from './CardTooltip.module.css';

const CardTooltipComponent: React.FC<TBookInfo> = ({ id, author, title, price }) => {
  const { showCardTooltip, hideCardTooltip } = actions;
  const dispatch = useAppDispatch();

  const showTooltip = (cardId: number) => () => {
    dispatch(showCardTooltip(cardId));
  };

  const hideTooltip = () => {
    dispatch(hideCardTooltip());
  };

  const activeCardId = useAppSelector(selectActiveCardId);
  const isTooltipVisible = activeCardId === id;

  return (
    <CardTooltip
      author={author}
      className={classNames({ [styles.isVisible]: isTooltipVisible })}
      price={price}
      title={title}
      onMouseEnter={showTooltip(id)}
      onMouseLeave={hideTooltip}
    />
  );
};

export { CardTooltipComponent as CardTooltip };
