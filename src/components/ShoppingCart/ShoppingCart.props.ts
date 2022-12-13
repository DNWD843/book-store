import { TBookInfo } from '../../types';

export type TShoppingCartProps = {
  isEmpty: boolean,
  selectedBooks: TBookInfo[],
  orderPrice: number,
};
