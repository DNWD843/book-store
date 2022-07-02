import React from 'react';

import { TBookInfo } from '../../types';

import { ShoppingCartItem } from './ShoppingCartItem';

const ShoppingCartItemComponent: React.FC<TBookInfo> = (bookInfo) => {
  const onDeleteBook = () => {};

  return (<ShoppingCartItem bookInfo={bookInfo} onDeleteBook={onDeleteBook} />);
};

export { ShoppingCartItemComponent as ShoppingCartItem };
