import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions } from '../../redux/reducers/booksReducer';
import { selectCardTooltipState } from '../../redux/store';
import { TBookInfo } from '../../types';

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

  const activeCardId = useAppSelector(selectCardTooltipState);
  const isTooltipVisible = activeCardId === props.id;

  return (
    <div>
      <Card
        onMouseEnter={showTooltip(props.id)}
        onMouseLeave={hideTooltip}
        {...props}
      />
      {isTooltipVisible && (<div>Tooltip</div>)}
    </div>
  );
};

export { CardComponent as Card };
