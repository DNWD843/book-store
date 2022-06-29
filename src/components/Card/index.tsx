import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actions, TCardTooltipData } from '../../redux/reducers/booksReducer';
import { selectCardTooltip } from '../../redux/store';
import { TBookInfo } from '../../types';

import { Card } from './Card';

const CardComponent = (props: TBookInfo) => {
  const { showCardTooltip, hideCardTooltip } = actions;
  const dispatch = useAppDispatch();
  const { id, author, title, price } = props;

  const showTooltip = (data: TCardTooltipData) => () => {
    dispatch(showCardTooltip(data));
  };

  const hideTooltip = () => {
    dispatch(hideCardTooltip());
  };

  const { isVisible } = useAppSelector(selectCardTooltip(id.toString()));

  return (
    <div>
      <Card
        hideTooltip={hideTooltip}
        showTooltip={showTooltip({ id, author, title, price })}
        {...props}
      />
      {isVisible && (<div>Tooltip</div>)}
    </div>
  );
};

export { CardComponent as Card };
