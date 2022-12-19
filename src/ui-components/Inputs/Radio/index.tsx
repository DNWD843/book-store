import classNames from 'classnames';
import React from 'react';

import styles from '../Input.module.css';
import { IInputComponentProps } from '../Input.props';

import { Radio } from './Radio';

const RadioComponent:React.FC<IInputComponentProps> = ({ input, meta, inputElementProps, label }) => {
  const { error = '' } = meta;
  const { className } = inputElementProps;
  const radioClassName = classNames(styles.radio, 'form-check-input', className);

  return (
    <Radio
      error={error}
      inputElementProps={{ ...input, ...inputElementProps, className: radioClassName }}
      label={label}
    />
  );
};

RadioComponent.displayName = 'RadioComponent';

export { RadioComponent as Radio };
