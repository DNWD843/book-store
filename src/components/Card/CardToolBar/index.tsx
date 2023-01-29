import React from 'react';

import { CardToolBar } from './CardToolBar';
import { ICardToolBarProps } from './CardToolBar.props';

const CardToolBarComponent: React.FC<ICardToolBarProps> = (props) => {
  const { author, title, price } = props;

  return (
    <CardToolBar
      author={author}
      price={price}
      title={title}
    />
  );
};

CardToolBarComponent.displayName = 'CardToolBarComponent';

export { CardToolBarComponent as CardToolBar };
