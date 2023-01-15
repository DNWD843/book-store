import { TBookInfo } from '../../types';

export type TBookDetailsProps = TBookInfo & {
  isAnonymous: boolean,
  onBookmarkButtonClick: () => void,
  onCartButtonClick: () => void,
};

export type TBookDetailsComponentProps = {
  book: TBookInfo,
};
