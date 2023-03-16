import { TBookInfo } from '../../types';

export type TBookDetailsProps = TBookInfo & {
  isAnonymous: boolean,
  onClickFavoritesButton: () => void,
  onClickCartButton: () => void,
};

export type TBookDetailsComponentProps = {
  book: TBookInfo,
};
