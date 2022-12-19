import React from 'react';

import { TColProps } from './Col.props';

export const Col: React.FC<TColProps> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);
