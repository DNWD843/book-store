import { useLayoutEffect, useState } from 'react';

import { EScreenTypes } from '../enums';
import { TMatchMediaValues, TScreenTypes } from '../types';

const queries = [
  '(max-width: 424px)', // small screen
  '(min-width: 425px) and (max-width: 766px)', // mobile
  '(min-width: 767px) and (max-width: 1079px)', // tablet
  '(min-width: 1080px)', // desktop
];

const screenTypes: TScreenTypes = [EScreenTypes.isSmallScreen, EScreenTypes.isMobile, EScreenTypes.isTablet, EScreenTypes.isDesktop];
const getValues = (queryLists: MediaQueryList[]) => () => queryLists.reduce<TMatchMediaValues>((acc, mql, index) => {
  acc[screenTypes[index]] = mql.matches;

  return acc;
}, {} as TMatchMediaValues);
export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const [values, setValues] = useState<TMatchMediaValues>(getValues(mediaQueryLists));

  useLayoutEffect(() => {
    const handleChange = () => { setValues(getValues(mediaQueryLists)); };

    mediaQueryLists.forEach((mql) => mql.addEventListener('change', handleChange));

    return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handleChange));
  }, [mediaQueryLists]);

  return { ...values };
};
