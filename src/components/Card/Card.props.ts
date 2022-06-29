import { TBookInfo } from '../../types';

export type TCardProps = TBookInfo & {
  onMouseEnter: () => void,
  onMouseLeave: () => void,
};
