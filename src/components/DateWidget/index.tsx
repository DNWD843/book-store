import React, { useMemo, useRef } from 'react';

import { DateWidget } from './DateWidget';
import { IDateWidgetProps } from './DateWidget.props';
import { months } from './months';

const DateWidgetController: React.FC<Omit<IDateWidgetProps, 'date'>> = (props) => {
  const currentDate = useRef<Date>(new Date());
  const dateString = useMemo(
    () => `Сегодня ${currentDate.current.getDate()} ${months[currentDate.current.getMonth()]} ${currentDate.current.getFullYear()}г.`,
    [],
  );

  return (
    <DateWidget date={dateString} {...props} />
  );
};

DateWidgetController.displayName = 'DateWidgetController';

export { DateWidgetController as DateWidget };
