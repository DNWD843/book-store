import React, { ChangeEventHandler } from 'react';

export type TBookSearchFilterProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onClear: () => void,
  containerClassName: string,
  searchFilterRef: React.MutableRefObject<HTMLDivElement | null>,
};
