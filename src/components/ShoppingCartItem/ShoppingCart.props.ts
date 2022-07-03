import { TBookInfo } from '../../types';

export type TShoppingCartProps = {
  bookInfo: TBookInfo
  onDeleteBook: () => void
  index: number
};
