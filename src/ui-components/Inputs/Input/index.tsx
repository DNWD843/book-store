import classNames from 'classnames';
import React from 'react';

import styles from '../Input.module.css';
import { IInputComponentProps } from '../Input.props';

import { Input } from './Input';

export const InputComponent: React.FC<IInputComponentProps> = ({ input, meta, inputElementProps, label, ...otherProps }) => {
  const { error = '', submitFailed, touched } = meta;
  const { className } = inputElementProps;
  const inputClassName = classNames(className, styles.input, { [styles.hasError]: (submitFailed || touched) && error });

  return (
    <Input
      error={(submitFailed || touched) ? error : ''}
      inputElementProps={{ type: 'text', ...input, ...inputElementProps, className: inputClassName }}
      label={label}
      {...otherProps}
    />
  );
};

InputComponent.displayName = 'InputComponent';
