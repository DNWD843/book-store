import classNames from 'classnames';
import React from 'react';

import { Input } from './Input';
import { IInputComponentProps } from './Input.props';

import styles from './Input.module.css';

export const InputComponent: React.FC<IInputComponentProps> = ({ input, meta, inputElementProps, label }) => {
  const { error = '' } = meta;
  const { className } = inputElementProps;
  const inputClassName = classNames(className, styles.input, { [styles.hasError]: error });

  return (
    <Input
      error={error}
      inputElementProps={{ ...input, ...inputElementProps, className: inputClassName }}
      label={label}
    />
  );
};

InputComponent.displayName = 'InputComponent';
