import React, { PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

export const SimpleButton: React.FC<PropsWithChildren<TButtonProps>> = (props) => (
  <button type="button" {...props} />
);
