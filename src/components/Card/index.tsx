import React from 'react';

import { TBookInfo } from '../../types';

import { Card } from './Card';
import { CardToolBar } from './CardToolBar';

const CardComponent: React.FC<TBookInfo> = (props) => (
  <>
    <Card {...props} />
    <CardToolBar {...props} />
  </>

);

CardComponent.displayName = 'CardElement';

export { CardComponent as Card };
