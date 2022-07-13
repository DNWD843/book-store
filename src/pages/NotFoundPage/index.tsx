import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../routesMap';

import { NotFoundPage } from './NotFoundPage';

const NotFoundPageComponent: React.FC = () => {
  const navigate = useNavigate();

  const onClickGoBackButton = () => { navigate(-1); };

  const onClickGoToMainButton = () => { navigate(routes.books); };

  return (
    <NotFoundPage onClickGoBackButton={onClickGoBackButton} onClickGoToMainButton={onClickGoToMainButton} />
  );
};

NotFoundPageComponent.displayName = 'NotFoundPageComponent';

export { NotFoundPageComponent as NotFoundPage };
