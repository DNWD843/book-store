import React from 'react';

import { TRadioGroupProps } from './RadioGroup.props';

export const RadioGroup: React.FC<TRadioGroupProps> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

RadioGroup.displayName = 'RadioGroup';
