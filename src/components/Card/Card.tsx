import React from 'react';

import { TBook } from '../../types';

export const Card: React.FC<Omit<TBook, 'id'>> = ({ title, description, author: { surname, name }, price }) => (
  <article>
    <h2>{title}</h2>
    <p>{`Автор: ${name} ${surname}`}</p>
    <p>{`Сюжет: ${description}`}</p>
    <p>{`Купить за ${price} ₽`}</p>
  </article>
);
