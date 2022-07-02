import React from 'react';

import { TBookInfo } from '../../types';
import { CardToolBar } from '../CardToolBar';

import { Card } from './Card';

const CardComponent = (props: TBookInfo) => (
  <>
    <Card {...props} />
    <CardToolBar {...props} />
  </>

);

export { CardComponent as Card };
