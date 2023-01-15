import { TBookInfo, TPurchase } from '../../types';

export type TPurchaseInfoComponentProps = { purchaseInfo: [string, TPurchase] };

export type TPurchaseInfoProps = {
  purchaseDateAndTime: string,
  purchasePrice: number,
  books: TBookInfo[],
};
