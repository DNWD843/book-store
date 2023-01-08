import classNames from 'classnames';
import React, { memo, PropsWithChildren } from 'react';

import { TButtonProps } from '../Button.props';

import { SubmitButton } from './SubmitButton';

const SubmitButtonComponent: React.FC<PropsWithChildren<TButtonProps>> = ({ className, ...props }) => {
  const buttonClassName = classNames(className, 'btn');

  return (<SubmitButton {...props} className={buttonClassName} />
  );
};

const MemoSubmitButton = memo(SubmitButtonComponent);

SubmitButtonComponent.displayName = 'SubmitButtonComponent';

export { MemoSubmitButton as SubmitButtonComponent };
