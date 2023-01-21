import { ChangeEventHandler } from 'react';

export type TBookSearchFilterProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onClear: () => void,
};
