import classNames from 'classnames';
import React from 'react';

import { Col } from './Col';
import { TColProps } from './Col.props';

import styles from './Col.module.css';

export const ColComponent: React.FC<TColProps> = ({ className, ...props }) => {
  const colClassName = classNames(className, styles.col);

  return (
    <Col {...props} className={colClassName} />
  );
};

ColComponent.displayName = 'ColComponent';
