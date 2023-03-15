import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectHeaderActionsState } from '../../../../redux/store';
import { uiStore, userStore } from '../../../../stores';

import { DesktopMenuButton } from './DesktopMenuButton';

const DesktopMenuButtonComponent: React.FC = observer(() => {
  const dispatch = useAppDispatch();
  const { openMenu, closeMenu } = headerActions;
  const { isAnonymous } = userStore.user;
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);
  const { isDesktop } = uiStore.screen;

  const openHeaderMenu = useCallback(() => { dispatch(openMenu()); }, [dispatch, openMenu]);
  const closeHeaderMenu = useCallback(() => {
    dispatch(closeMenu());
  }, [closeMenu, dispatch]);

  return (
    <DesktopMenuButton
      closeMenu={!isDesktop ? closeHeaderMenu : undefined}
      disabled={isDesktop ? isMenuOpened : !isAnonymous}
      isAnonymous={isAnonymous}
      onMenuButtonClick={openHeaderMenu}
    />
  );
});

DesktopMenuButtonComponent.displayName = 'DesktopMenuButtonComponent';

export { DesktopMenuButtonComponent as DesktopMenuButton };
