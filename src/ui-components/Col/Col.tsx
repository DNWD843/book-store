import React from 'react';

import { TColProps } from './Col.props';

export const Col: React.FC<Omit<TColProps, 'size'>> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);
