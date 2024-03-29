import classNames from 'classnames';
import React, { memo } from 'react';

import { IDateWidgetProps } from './DateWidget.props';

import styles from './DateWidget.module.css';

const DateWidget: React.FC<IDateWidgetProps> = ({ className, date }) => (
  <div className={classNames(styles.widgetContainer, className)}>
    <p className={styles.date}>{date}</p>
  </div>
);

DateWidget.displayName = 'DateWidget';

const MemoDateWidget = memo(DateWidget);

export { MemoDateWidget as DateWidget };
