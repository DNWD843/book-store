import React, { useMemo, useRef } from 'react';

import { DateWidget } from './DateWidget';
import { IDateWidgetProps } from './DateWidget.props';
import { daysOfWeek, months } from './constants';

const DateWidgetComponent: React.FC<Omit<IDateWidgetProps, 'date'>> = (props) => {
  const currentDate = useRef<Date>(new Date());
  const dateString = useMemo(
    // eslint-disable-next-line max-len
    () => `Сегодня ${currentDate.current.getDate()} ${months[currentDate.current.getMonth()]} ${currentDate.current.getFullYear()}г., ${daysOfWeek[currentDate.current.getDay()]}`,
    [],
  );

  return (
    <DateWidget date={dateString} {...props} />
  );
};

DateWidgetComponent.displayName = 'DateWidgetComponent';

export { DateWidgetComponent as DateWidget };
