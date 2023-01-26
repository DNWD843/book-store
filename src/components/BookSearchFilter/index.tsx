import classNames from 'classnames';
import React, { ChangeEvent, memo, useCallback, useEffect, useMemo, useRef } from 'react';

import { FILTER_DELAY } from '../../constants';
import { useMatchMedia } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { booksActions } from '../../redux/slices';
import { selectHeaderActionsState, selectSearchValue } from '../../redux/store';

import { BookSearchFilter } from './BookSearchFilter';

import styles from './BookSearchFilter.module.css';

const BookSearchFilterComponent: React.FC<{ searchFilterRef: React.MutableRefObject<HTMLDivElement | null> }> = ({ searchFilterRef }) => {
  const dispatch = useAppDispatch();
  const { isDesktop } = useMatchMedia();
  const { filterCollection, clearSearchValue, setSearchValue } = booksActions;
  const searchValue = useAppSelector(selectSearchValue);
  const { isSearchFilterOpened } = useAppSelector(selectHeaderActionsState);
  const prevTimerIdRef = useRef< NodeJS.Timeout | null>(null);

  const containerClassName = useMemo(() => (isDesktop
    ? classNames(styles.searchFilterDesktop)
    : classNames(styles.searchFilterMobile, { [styles.isSearchFilterVisible]: isSearchFilterOpened })),
  [isDesktop, isSearchFilterOpened]);

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

  return (
    <BookSearchFilter
      containerClassName={containerClassName}
      searchFilterRef={searchFilterRef}
      value={searchValue}
      onChange={handleChangeValue}
      onClear={handleClickOnClearButton}
    />
  );
};

BookSearchFilterComponent.displayName = 'BookSearchFilterComponent';

const MemoBookSearchFilterComponent = memo(BookSearchFilterComponent);

export { MemoBookSearchFilterComponent as BookSearchFilter };
