import React from 'react';

import { DateWidget } from './DateWidget';
import { IDateWidgetProps } from './DateWidget.props';
import { daysOfWeek, months } from './constants';

const DateWidgetComponent: React.FC<Omit<IDateWidgetProps, 'date'>> = (props) => {
  const today = new Date();
  const dateString = `Сегодня ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}г., ${daysOfWeek[today.getDay()]}`;

  return (
    <DateWidget date={dateString} {...props} />
  );
};

DateWidgetComponent.displayName = 'DateWidgetComponent';

export { DateWidgetComponent as DateWidget };
