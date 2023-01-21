import React, { ChangeEvent, memo, useCallback, useEffect, useRef } from 'react';

import { FILTER_DELAY } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { booksActions } from '../../redux/slices';
import { selectSearchValue } from '../../redux/store';

import { BookSearchFilter } from './BookSearchFilter';

const BookSearchFilterComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterCollection, clearSearchValue, setSearchValue } = booksActions;
  const searchValue = useAppSelector(selectSearchValue);
  const prevTimerIdRef = useRef< NodeJS.Timeout | null>(null);

  const handleChangeValue = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    if (prevTimerIdRef.current) {
      clearTimeout(prevTimerIdRef.current);
    }
    dispatch(setSearchValue(evt.target.value));

    const id = setTimeout(() => {
      dispatch(filterCollection(evt.target.value));
      clearTimeout(id);
      prevTimerIdRef.current = null;
    }, FILTER_DELAY);

    prevTimerIdRef.current = id;
  }, [dispatch, filterCollection, setSearchValue]);

  const handleClickOnClearButton = useCallback(() => {
    dispatch(clearSearchValue());
  }, [dispatch, clearSearchValue]);

  useEffect(() => () => {
    handleClickOnClearButton();
  }, [handleClickOnClearButton]);

  return (<BookSearchFilter value={searchValue} onChange={handleChangeValue} onClear={handleClickOnClearButton} />);
};

BookSearchFilterComponent.displayName = 'BookSearchFilterComponent';

const MemoBookSearchFilterComponent = memo(BookSearchFilterComponent);

export { MemoBookSearchFilterComponent as BookSearchFilter };
