import React, { memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { headerActions } from '../../../../redux/slices';
import { selectHeaderActionsState, selectUserData } from '../../../../redux/store';

import { DesktopMenuButton } from './DesktopMenuButton';

const DesktopMenuButtonComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openMenu } = headerActions;
  const { isAnonymous } = useAppSelector(selectUserData);
  const { isMenuOpened } = useAppSelector(selectHeaderActionsState);

  const openHeaderMenu = useCallback(() => { dispatch(openMenu()); }, [dispatch, openMenu]);

  return (
    <DesktopMenuButton disabled={isMenuOpened} isAnonymous={isAnonymous} onMenuButtonClick={openHeaderMenu} />
  );
};

DesktopMenuButtonComponent.displayName = 'DesktopMenuButtonComponent';

const MemoDesktopMenuButtonComponent = memo(DesktopMenuButtonComponent);

export { MemoDesktopMenuButtonComponent as DesktopMenuButton };
