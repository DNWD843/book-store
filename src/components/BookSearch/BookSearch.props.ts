import { ChangeEventHandler, FormEventHandler } from 'react';

export type TBookSearchProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  onSubmit: FormEventHandler<HTMLFormElement>,
  onClear: () => void,
};
