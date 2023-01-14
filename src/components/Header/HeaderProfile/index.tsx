import uniqueId from 'lodash/uniqueId';
import React, { useCallback, useRef, useState } from 'react';

import { deleteUserRequestMessages, POPUP_ID_PREFIX } from '../../../constants';
import { EFetchStatuses, EPopupTypes } from '../../../enums';
import { useClickOutside } from '../../../hooks';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { popupsActions, userSavingsActions } from '../../../redux/slices';
import { selectUserData, storageActions } from '../../../redux/store';
import { auth, deleteUserSavings } from '../../../redux/thunks';
import { storageKeys, storage } from '../../../utils';
import ava from '../../../vendor/images/login_ava.png';
import { ConfirmModal } from '../../Modals';

import { HeaderProfile } from './HeaderProfile';

const HeaderProfileComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { removeUserSavingsFromStore } = userSavingsActions;
  const { addPopup } = popupsActions;
  const userData = useAppSelector(selectUserData);

  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const [isMenuOpened, setMenuOpened] = useState<boolean>(false);

  const closeModal = useCallback(() => { setModalOpened(false); }, []);

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

  const onDelete = useCallback(() => { setModalOpened(true); }, []);

  const handleDeleteUser = useCallback(async () => {
    await dispatch(deleteUserSavings())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          storage.deleteData(storageKeys.USER_SAVINGS);
          dispatch(storageActions.removeUserSavings);
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

    await dispatch(auth.deleteUser())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          dispatch(addPopup({
            id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
            message: deleteUserRequestMessages.success,
            type: EPopupTypes.success,
          }));

          storage.deleteData(storageKeys.USER);
          dispatch(storageActions.removeUserInfo);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }
      })
      .then(() => { closeModal(); })
      .catch((err) => {
        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? deleteUserRequestMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, closeModal, dispatch]);

  const profileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeProfileMenu = useCallback(() => { setMenuOpened(false); }, []);

  useClickOutside(closeProfileMenu, [profileMenuRef, menuButtonRef]);

  return (
    <>
      <HeaderProfile
        isAnonymous={userData?.isAnonymous}
        isMenuOpened={isMenuOpened}
        menuButtonRef={menuButtonRef}
        photoUrl={userData?.photoURL || ava}
        ref={profileMenuRef}
        title={title}
        onDelete={onDelete}
        onLogout={handleLogout}
        onProfileClick={handleClickOnMenuButton}
      />
      <ConfirmModal
        clearButtonTitle="Отменить"
        isOpened={isModalOpened}
        submitButtonTitle="Удалить"
        onCancel={closeModal}
        onClose={closeModal}
        onSubmit={handleDeleteUser}
      />
    </>
  );
};

HeaderProfileComponent.displayName = 'HeaderProfileComponent';

export { HeaderProfileComponent };
