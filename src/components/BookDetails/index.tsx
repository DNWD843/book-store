import React from 'react';

import { NotFoundPage } from '../../pages/NotFoundPage';
import { useAppSelector } from '../../redux/hooks';
import { selectBookDetails } from '../../redux/store';

import { BookDetails } from './BookDetails';

const BookDetailsComponent: React.FC = () => {
  const bookInfo = useAppSelector(selectBookDetails);

  if (!bookInfo) {
    return (<NotFoundPage />);
  }

  return (<BookDetails {...bookInfo} />);
};

BookDetailsComponent.displayName = 'BookDetailsComponent';

export { BookDetailsComponent as BookDetails };
