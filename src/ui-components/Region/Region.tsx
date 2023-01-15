import React from 'react';

import { TRegionProps } from './Region.props';

export const Region: React.FC<TRegionProps> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

Region.displayName = 'Region';
