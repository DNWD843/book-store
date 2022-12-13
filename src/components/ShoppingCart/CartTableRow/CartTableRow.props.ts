import { TBookInfo } from '../../../types';

export type TCartTableRowProps = {
  bookInfo: TBookInfo
  onDeleteBook: () => void
  index: number,
  totalPricePerBook: number,
  decreaseQuantity: () => void,
  increaseQuantity: () => void,
};
