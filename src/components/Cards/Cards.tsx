import React from 'react';

import { TBook } from '../../types';
import { Card } from '../Card';

export const Cards: React.FC<{ books?: TBook[] }> = ({ books }) => {
  if (!books) return null;

  return (
    <ul>
      {books.map(({ id, ...book }) => (
        <li key={id.toString()}>
          <Card {...book} />
        </li>
      ))}
    </ul>
  );
};
