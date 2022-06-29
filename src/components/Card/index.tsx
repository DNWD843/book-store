import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions } from '../../redux/reducers/booksReducer';
import { selectCardTooltipState } from '../../redux/store';
import { TBookInfo } from '../../types';
import { CardTooltip } from '../CardTooltip';

import { Card } from './Card';

const CardComponent = (props: TBookInfo) => {
  const { showCardTooltip, hideCardTooltip } = actions;
  const dispatch = useAppDispatch();

  const showTooltip = (cardId: number) => () => {
    dispatch(showCardTooltip(cardId));
  };

  const hideTooltip = () => {
    dispatch(hideCardTooltip());
  };

  const { id, author, title, price } = props;
  const activeCardId = useAppSelector(selectCardTooltipState);
  const isTooltipVisible = activeCardId === id;

  return (
    <>
      <Card {...props} />
      <CardTooltip
        author={author}
        isVisible={isTooltipVisible}
        price={price}
        title={title}
        onMouseEnter={showTooltip(id)}
        onMouseLeave={hideTooltip}
      />
    </>

  );
};

export { CardComponent as Card };
