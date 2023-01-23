import React, { memo, useCallback } from 'react';

import { useMatchMedia } from '../../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectHeaderActionsState, selectUserData } from '../../../../redux/store';

import { DesktopMenuButton } from './DesktopMenuButton';

const DesktopMenuButtonComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openMenu } = headerActions;
  const { isAnonymous } = useAppSelector(selectUserData);
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);
  const { isDesktop } = useMatchMedia();

  const openHeaderMenu = useCallback(() => { dispatch(openMenu()); }, [dispatch, openMenu]);

  return (
    <DesktopMenuButton disabled={isDesktop ? isMenuOpened : !isAnonymous} isAnonymous={isAnonymous} onMenuButtonClick={openHeaderMenu} />
  );
};

DesktopMenuButtonComponent.displayName = 'DesktopMenuButtonComponent';

const MemoDesktopMenuButtonComponent = memo(DesktopMenuButtonComponent);

export { MemoDesktopMenuButtonComponent as DesktopMenuButton };
