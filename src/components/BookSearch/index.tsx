import React, { ChangeEvent, FormEvent, useState } from 'react';

import { BookSearch } from './BookSearch';

const BookSearchController: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleClickOnClearButton = () => { setValue(''); };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(value);
  };

  return (<BookSearch value={value} onChange={handleChangeValue} onClear={handleClickOnClearButton} onSubmit={handleSubmit} />);
};

BookSearchController.displayName = 'BookSearchController';

export { BookSearchController as BookSearch };
