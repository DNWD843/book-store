import uniqueId from 'lodash/uniqueId';
import React, { useCallback, useState } from 'react';

import { deleteUserRequestMessages, POPUP_ID_PREFIX } from '../../../constants';
import { EFetchStatuses, EPopupTypes } from '../../../enums';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { popupsActions, userSavingsActions } from '../../../redux/slices';
import { selectUserData, storageActions } from '../../../redux/store';
import { auth } from '../../../redux/thunks';
import { storageKeys, storage } from '../../../utils';
import ava from '../../../vendor/images/login_ava.png';

import { HeaderProfile } from './HeaderProfile';

const HeaderProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { removeUserSavingsFromStore } = userSavingsActions;
  const { addPopup } = popupsActions;
  const userData = useAppSelector(selectUserData);

  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

  const handleClickOnMenuButton = useCallback(() => { setMenuOpened((prev) => !prev); }, []);

  const title = userData?.isAnonymous
    ? 'Гость'
    : `Привет, ${userData?.displayName || userData?.email || 'Гость'}`;

  const handleLogout = useCallback(() => {
    dispatch(auth.logoutUser())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          dispatch(removeUserSavingsFromStore());
          storage.deleteData([storageKeys.USER, storageKeys.USER_SAVINGS]);
          dispatch(storageActions.removeUserInfo);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }
      })
      .then(() => { setMenuOpened(false); })
      // eslint-disable-next-line no-console
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);

        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? deleteUserRequestMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, dispatch, removeUserSavingsFromStore]);

  const handleDeleteUser = useCallback(() => {
    dispatch(auth.deleteUser())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          dispatch(addPopup({
            id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
            message: deleteUserRequestMessages.success,
            type: EPopupTypes.success,
          }));

          storage.deleteData([storageKeys.USER, storageKeys.USER_SAVINGS]);
          dispatch(storageActions.removeUserInfo);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }
      })
      .catch((err) => {
        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? deleteUserRequestMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, dispatch]);

  return (
    <HeaderProfile
      isAnonymous={userData?.isAnonymous}
      isMenuOpened={isMenuOpened}
      photoUrl={userData?.photoURL || ava}
      title={title}
      onDelete={handleDeleteUser}
      onLogout={handleLogout}
      onProfileClick={handleClickOnMenuButton}
    />
  );
};

HeaderProfileComponent.displayName = 'HeaderProfileComponent';

export { HeaderProfileComponent };
