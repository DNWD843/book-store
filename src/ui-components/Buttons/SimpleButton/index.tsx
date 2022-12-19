import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

import { SimpleButton } from './SimpleButton';

export const SimpleButtonComponent: React.FC<PropsWithChildren<TButtonProps>> = ({ className, ...props }) => {
  const buttonClassName = classNames(className, 'btn');

  return (<SimpleButton {...omit(props, 'type')} className={buttonClassName} />);
};

SimpleButtonComponent.displayName = 'SimpleButtonComponent';
