import { ChangeEventHandler } from 'react';

export type TBookSearchProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onClear: () => void,
};
