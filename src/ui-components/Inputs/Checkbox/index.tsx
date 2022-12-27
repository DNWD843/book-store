import classNames from 'classnames';
import React from 'react';

import styles from '../Input.module.css';
import { IInputComponentProps } from '../Input.props';

import { Checkbox } from './Checkbox';

const CheckboxComponent:React.FC<IInputComponentProps> = ({ input, meta, inputElementProps, label }) => {
  const { error = '' } = meta;
  const { className } = inputElementProps;
  const checkboxClassName = classNames(styles.checkbox, className);

  return (
    <Checkbox
      error={error}
      inputElementProps={{ ...input, ...inputElementProps, className: checkboxClassName }}
      label={label}
    />
  );
};

CheckboxComponent.displayName = 'CheckboxComponent';

export { CheckboxComponent as Checkbox };
