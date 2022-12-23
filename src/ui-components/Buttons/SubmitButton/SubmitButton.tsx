import React, { PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

export const SubmitButton: React.FC<PropsWithChildren<TButtonProps>> = (props) => (
  <button style={{ width: '100%' }} type="submit" {...props} />
);

SubmitButton.displayName = 'SubmitButton';
