import { TBookInfo } from '../../types';

export type TShoppingCartTableRowProps = {
  bookInfo: TBookInfo
  onDeleteBook: () => void
  index: number
};
