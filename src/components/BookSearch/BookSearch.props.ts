import { ChangeEventHandler, MouseEventHandler } from 'react';

export type TBookSearchProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onSearch: MouseEventHandler<HTMLButtonElement>,
  onClear: () => void,
};
