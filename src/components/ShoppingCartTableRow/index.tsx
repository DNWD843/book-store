import React from 'react';

import { TBookInfo } from '../../types';

import { ShoppingCartTableRow } from './ShoppingCartTableRow';

const ShoppingCartTableRowComponent: React.FC<{ bookInfo: TBookInfo, index: number }> = ({ bookInfo, index }) => {
  const onDeleteBook = () => {};

  return (<ShoppingCartTableRow bookInfo={bookInfo} index={index} onDeleteBook={onDeleteBook} />);
};

ShoppingCartTableRowComponent.displayName = 'RowComponent';

export { ShoppingCartTableRowComponent as ShoppingCartTableRow };
