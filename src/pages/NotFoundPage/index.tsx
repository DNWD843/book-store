import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { createRelativePathToHomePageFromCurrentLocation } from '../../utils';

import { NotFoundPage } from './NotFoundPage';

export const NotFoundPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathToHomePage = createRelativePathToHomePageFromCurrentLocation(location.pathname);

  const onClickGoBackButton = () => { navigate(-1); };

  const onClickGoToMainButton = () => { navigate(pathToHomePage); };

  return (
    <NotFoundPage onClickGoBackButton={onClickGoBackButton} onClickGoToMainButton={onClickGoToMainButton} />
  );
};
