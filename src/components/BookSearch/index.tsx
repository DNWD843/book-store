import React, { ChangeEvent, memo, useCallback, useEffect, useRef, useState } from 'react';

import { FILTER_DELAY } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';
import { booksActions } from '../../redux/slices';

import { BookSearch } from './BookSearch';

const BookSearchComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterCollection, resetFilterCollection } = booksActions;
  const prevTimerIdRef = useRef< NodeJS.Timeout | null>(null);

  const [value, setValue] = useState<string>('');

  const handleChangeValue = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
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
  }, [dispatch, filterCollection]);

  const handleClickOnClearButton = useCallback(() => {
    setValue('');
    dispatch(resetFilterCollection());
  }, [dispatch, resetFilterCollection]);

  useEffect(() => () => {
    handleClickOnClearButton();
  }, [handleClickOnClearButton]);

  return (<BookSearch value={value} onChange={handleChangeValue} onClear={handleClickOnClearButton} />);
};

BookSearchComponent.displayName = 'BookSearchComponent';

const MemoBookSearchComponent = memo(BookSearchComponent);

export { MemoBookSearchComponent as BookSearch };
