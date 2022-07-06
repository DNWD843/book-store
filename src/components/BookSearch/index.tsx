import React, { ChangeEvent, useState } from 'react';

import { BookSearch } from './BookSearch';

const BookSearchController: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const handleClickOnClearButton = () => { setValue(''); };

  return (<BookSearch value={value} onChange={handleChangeValue} onClear={handleClickOnClearButton} onSearch={() => {}} />);
};

BookSearchController.displayName = 'BookSearchController';

export { BookSearchController as BookSearch };
