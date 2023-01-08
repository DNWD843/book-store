import React, { ChangeEvent, useRef, useState } from 'react';

import { FILTER_DELAY } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';
import { booksActions } from '../../redux/slices/booksSlice';

import { BookSearch } from './BookSearch';

const BookSearchComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterCollection, resetFilterCollection } = booksActions;
  const prevTimerIdRef = useRef< NodeJS.Timeout | null>(null);

  const [value, setValue] = useState<string>('');

  const handleChangeValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (prevTimerIdRef.current) {
      clearTimeout(prevTimerIdRef.current);
    }
    setValue(evt.target.value);

    const id = setTimeout(() => {
      dispatch(filterCollection(evt.target.value));
      clearTimeout(id);
      prevTimerIdRef.current = null;
    }, FILTER_DELAY);

    prevTimerIdRef.current = id;
  };

  const handleClickOnClearButton = () => {
    setValue('');
    dispatch(resetFilterCollection());
  };

  return (<BookSearch value={value} onChange={handleChangeValue} onClear={handleClickOnClearButton} />);
};

BookSearchComponent.displayName = 'BookSearchComponent';

export { BookSearchComponent as BookSearch };
