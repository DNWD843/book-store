import React from 'react';

import { TBookInfo } from '../../types';
import { CardTooltip } from '../CardTooltip';

import { Card } from './Card';

const CardComponent = (props: TBookInfo) => (
  <>
    <Card {...props} />
    <CardTooltip {...props} />
  </>

);

export { CardComponent as Card };
