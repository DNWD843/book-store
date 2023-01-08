import classNames from 'classnames';
import omit from 'lodash/omit';
import React, { memo, PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

import { SimpleButton } from './SimpleButton';

const SimpleButtonComponent: React.FC<PropsWithChildren<TButtonProps>> = ({ className, ...props }) => {
  const buttonClassName = classNames(className, 'btn');

  return (<SimpleButton {...omit(props, 'type')} className={buttonClassName} />);
};

SimpleButtonComponent.displayName = 'SimpleButtonComponent';

const MemoSimpleButton = memo(SimpleButtonComponent);

export { MemoSimpleButton as SimpleButtonComponent };
