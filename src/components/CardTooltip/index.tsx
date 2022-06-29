import classNames from 'classnames';
import React from 'react';

import { CardTooltip } from './CardTooltip';
import { ICardTooltipComponentProps } from './CardTooltip.props';

import styles from './CardTooltip.module.css';

const CardTooltipComponent: React.FC<ICardTooltipComponentProps> = (
  { author, price, title, isVisible, onMouseEnter, onMouseLeave },
) => (
  <CardTooltip
    author={author}
    className={classNames({ [styles.isVisible]: isVisible })}
    price={price}
    title={title}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  />
);

export { CardTooltipComponent as CardTooltip };
