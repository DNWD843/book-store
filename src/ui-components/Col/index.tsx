import classNames from 'classnames';
import React from 'react';

import { COL_SIZE_DEFAULT } from '../../constants';

import { Col } from './Col';
import { TColProps } from './Col.props';

import styles from './Col.module.css';

export const ColComponent: React.FC<TColProps> = ({ className, size = COL_SIZE_DEFAULT, ...props }) => {
  const colClassName = classNames(className, styles.col, styles[`size-${size}`]);

  return (
    <Col {...props} className={colClassName} />
  );
};

ColComponent.displayName = 'ColComponent';
