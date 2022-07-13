import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EFetchStatuses } from '../../enums';
import { useAppDispatch } from '../../redux/hooks';
import { loginUserAnonymously } from '../../redux/thunks/authThunks';
import { routes } from '../../routesMap';

import { StartPage } from './StartPage';

const StartPageComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickOnWelcomeButton = () => {
    dispatch(loginUserAnonymously())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.rejected) {
          // @ts-ignore
          throw res.error;
        }
        navigate(routes.main);
      }).catch((err: any) => {
      // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <StartPage
      onButtonClick={handleClickOnWelcomeButton}
    />
  );
};

StartPageComponent.displayName = 'StartPageComponent';

export { StartPageComponent as StartPage };
