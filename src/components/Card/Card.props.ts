import { TBookInfo } from '../../types';

export type TCardProps = TBookInfo & {
  onCardClick: () => void,
};
