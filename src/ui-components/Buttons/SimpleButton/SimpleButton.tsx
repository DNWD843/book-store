import React, { PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

export const SimpleButton: React.FC<PropsWithChildren<TButtonProps>> = (props) => (
  <button style={{ width: '100%' }} type="button" {...props} />
);
