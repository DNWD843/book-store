import classNames from 'classnames';
import React from 'react';

import { RadioGroup } from './RadioGroup';
import { TRadioGroupProps } from './RadioGroup.props';

import styles from './RadioGroup.module.css';

export const RadioGroupComponent:React.FC<TRadioGroupProps> = ({ className, ...props }) => {
  const radioGroupClassName = classNames(styles.radioGroup, className);

  return (
    <RadioGroup {...props} className={radioGroupClassName} />);
};

RadioGroupComponent.displayName = 'RadioGroupComponent';
