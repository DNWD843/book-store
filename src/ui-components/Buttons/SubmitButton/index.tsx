import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

import { SubmitButton } from './SubmitButton';

export const SubmitButtonComponent: React.FC<PropsWithChildren<TButtonProps>> = ({ className, ...props }) => {
  const buttonClassName = classNames(className, 'btn');

  return (<SubmitButton {...props} className={buttonClassName} />
  );
};

SubmitButtonComponent.displayName = 'SubmitButtonComponent';
