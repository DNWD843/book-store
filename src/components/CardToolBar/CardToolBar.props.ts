import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { TBookInfo } from '../../types';

export interface ICardToolBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: TBookInfo['title']
  author: TBookInfo['author']
  price: TBookInfo['price']
  onMouseEnter: () => void
  onMouseLeave: () => void
  onCartButtonClick: (evt: any) => void
  onBookmarkButtonClick: (evt: any) => void
  onBookCardClick: () => void
}
