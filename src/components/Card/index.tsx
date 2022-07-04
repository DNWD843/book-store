import React from 'react';

import { TBookInfo } from '../../types';
import { CardToolBar } from '../CardToolBar';

import { Card } from './Card';

const CardComponent: React.FC<TBookInfo> = (props) => (
  <>
    <Card {...props} />
    <CardToolBar {...props} />
  </>

);

CardComponent.displayName = 'CardElement';

export { CardComponent as Card };
