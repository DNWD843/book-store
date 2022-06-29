import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions } from '../../redux/reducers/booksReducer';
import { selectCardTooltipState } from '../../redux/store';
import { TBookInfo } from '../../types';
import { CardTooltip } from '../CardTooltip/CardTooltip';

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
  // const isTooltipVisible = activeCardId === id;
  const isTooltipVisible = true;

  return (
    <div>
      <Card
        onMouseEnter={showTooltip(id)}
        onMouseLeave={hideTooltip}
        {...props}
      />
      {isTooltipVisible && (<CardTooltip author={author} price={price} title={title} />)}
    </div>
  );
};

export { CardComponent as Card };
