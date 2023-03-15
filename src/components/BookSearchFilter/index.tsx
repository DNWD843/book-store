import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useRef } from 'react';

import { FILTER_DELAY } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectHeaderActionsState } from '../../redux/store';
import { booksStore, uiStore } from '../../stores';

import { BookSearchFilter } from './BookSearchFilter';

import styles from './BookSearchFilter.module.css';

const BookSearchFilterComponent: React.FC<{ searchFilterRef: React.MutableRefObject<HTMLDivElement | null> }> = ({ searchFilterRef }) => {
  const { filterCollectionByValue, clearSearchValue, setSearchValue, searchValue } = booksStore;
  const { isDesktop } = uiStore.screen;
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
    setSearchValue(evt.target.value);

    const id = setTimeout(() => {
      filterCollectionByValue(evt.target.value);
      clearTimeout(id);
      prevTimerIdRef.current = null;
    }, FILTER_DELAY);

    prevTimerIdRef.current = id;
  }, [filterCollectionByValue, setSearchValue]);

  const handleClickOnClearButton = useCallback(() => {
    clearSearchValue();
  }, [clearSearchValue]);

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

const ObservableBookSearchFilterComponent = observer(BookSearchFilterComponent);

export { ObservableBookSearchFilterComponent as BookSearchFilter };
