import React, { memo } from 'react';

import { purchaseDateTemplate } from '../../constants';
import { formatDate } from '../../utils';

import { PurchaseInfoBlock } from './PurchaseInfoBlock';
import { TPurchaseInfoComponentProps } from './PurchaseInfoBlock.props';

const PurchaseInfoBlockComponent: React.FC<TPurchaseInfoComponentProps> = ({ purchaseInfo }) => {
  const purchaseDateISOString = purchaseInfo[0];
  const { orderPrice: purchasePrice, books } = purchaseInfo[1];
  const purchaseDateAndTime = formatDate(purchaseDateISOString, purchaseDateTemplate);

  return (<PurchaseInfoBlock books={books} key={purchaseDateISOString} purchaseDateAndTime={purchaseDateAndTime} purchasePrice={purchasePrice} />);
};

PurchaseInfoBlockComponent.displayName = 'PurchaseInfoBlockComponent';

const MemoPurchaseInfoBlockComponent = memo(PurchaseInfoBlockComponent);

export { MemoPurchaseInfoBlockComponent as PurchaseInfoBlockComponent };
