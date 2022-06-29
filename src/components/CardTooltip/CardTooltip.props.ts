import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { TBookInfo } from '../../types';

export interface ICardTooltipProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: TBookInfo['title'],
  author: TBookInfo['author'],
  price: TBookInfo['price'],
  onMouseEnter: () => void,
  onMouseLeave: () => void,
}

export interface ICardTooltipComponentProps extends ICardTooltipProps {
  isVisible: boolean,
}