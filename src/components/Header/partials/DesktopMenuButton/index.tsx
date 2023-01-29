import React, { memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectHeaderActionsState, selectMatchMediaState, selectUserData } from '../../../../redux/store';

import { DesktopMenuButton } from './DesktopMenuButton';

const DesktopMenuButtonComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openMenu, closeMenu } = headerActions;
  const { isAnonymous } = useAppSelector(selectUserData);
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);
  const { isDesktop } = useAppSelector(selectMatchMediaState);

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
};

DesktopMenuButtonComponent.displayName = 'DesktopMenuButtonComponent';

const MemoDesktopMenuButtonComponent = memo(DesktopMenuButtonComponent);

export { MemoDesktopMenuButtonComponent as DesktopMenuButton };
