import classNames from 'classnames';
import React from 'react';

import { Region } from './Region';
import { TRegionProps } from './Region.props';

import styles from './Region.module.css';

export const RegionComponent: React.FC<TRegionProps> = ({ className, ...props }) => {
  const regionClassName = classNames(styles.region, className);

  return (
    <Region {...props} className={regionClassName} />
  );
};

RegionComponent.displayName = 'RegionComponent';
