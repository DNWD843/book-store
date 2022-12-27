import classNames from 'classnames';
import React from 'react';

import { Row } from './Row';
import { TRowProps } from './Row.props';

import styles from './Row.module.css';

export const RowComponent: React.FC<TRowProps> = ({ className, ...props }) => {
  const rowClassName = classNames(styles.row, className);

  return (<Row {...props} className={rowClassName} />);
};
