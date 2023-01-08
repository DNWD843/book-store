import React, { memo } from 'react';

import { TBookInfo } from '../../types';
import { Cards } from '../Cards';

const BooksCatalogue: React.FC<{ books: TBookInfo[] }> = ({ books }) => (<Cards books={books} />);

BooksCatalogue.displayName = 'BooksCatalogue';

const MemoBooksCatalogue = memo(BooksCatalogue);

export { MemoBooksCatalogue as BooksCatalogue };
