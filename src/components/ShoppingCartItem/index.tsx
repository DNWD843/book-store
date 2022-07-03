import React from 'react';

import { TBookInfo } from '../../types';

import { ShoppingCartItem } from './ShoppingCartItem';

const ShoppingCartItemComponent: React.FC<{ bookInfo: TBookInfo, index: number }> = ({ bookInfo, index }) => {
  const onDeleteBook = () => {};

  return (<ShoppingCartItem bookInfo={bookInfo} index={index} onDeleteBook={onDeleteBook} />);
};

export { ShoppingCartItemComponent as ShoppingCartItem };
