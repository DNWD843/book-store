import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';

import {
  booksRequestMessages,
  defaultMessages,
  deleteUserRequestMessages,
  POPUP_ID_PREFIX,
} from '../../../../../constants';
import { EFetchStatuses, EPopupTypes } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { headerActions, popupsActions, userSavingsActions } from '../../../../../redux/slices';
import { selectHeaderActionsState, storageActions } from '../../../../../redux/store';
import { auth, updateBooksCatalogue, deleteUserSavings } from '../../../../../redux/thunks';
import { userStore } from '../../../../../stores';
import { TUpdateCatalogueRequestResponse } from '../../../../../types';
import { storage, storageKeys } from '../../../../../utils';
import { ConfirmModal } from '../../../../Modals';

import { HeaderMenuActionButtons } from './HeaderMenuActionButtons';

const HeaderMenuActionButtonsComponent: React.FC = observer(() => {
  const dispatch = useAppDispatch();
  const { removeUserSavingsFromStore } = userSavingsActions;
  const { addPopup } = popupsActions;
  const { closeMenu, openConfirmModal, closeConfirmModal } = headerActions;
  const { isAdmin } = userStore.user;
  const { isConfirmModalOpened } = useAppSelector(selectHeaderActionsState);

  console.log('HeaderMenuActionButtonsComponent', userStore.user);

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
      .then(() => { dispatch(closeMenu()); })
      // eslint-disable-next-line no-console
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);

        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? defaultMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, closeMenu, dispatch, removeUserSavingsFromStore]);

  const onDelete = useCallback(() => { dispatch(openConfirmModal()); }, [dispatch, openConfirmModal]);
  const closeModal = useCallback(() => { dispatch(closeConfirmModal()); }, [closeConfirmModal, dispatch]);

  const onUpdateBooksCatalogue = useCallback(async () => {
    await dispatch(updateBooksCatalogue())
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.rejected) {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }

        const { books = [], updatedAt = '' } = res.payload as TUpdateCatalogueRequestResponse;

        dispatch(storageActions.setBooks);
        storage.setData(storageKeys.BOOKS, { books, updatedAt });

        dispatch(addPopup({
          id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
          message: booksRequestMessages.updateCollectionSuccess,
          type: EPopupTypes.success,
        }));
      })
      .then(() => { dispatch(closeMenu()); })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);

        dispatch(addPopup({
          id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err?.error?.message ?? defaultMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, closeMenu, dispatch]);

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
          message: err?.error?.message ?? defaultMessages.unexpectedError,
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
          message: err?.error?.message ?? defaultMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  }, [addPopup, closeModal, dispatch]);

  return (
    <>
      <HeaderMenuActionButtons
        isAdmin={isAdmin}
        onDelete={onDelete}
        onLogout={handleLogout}
        onUpdateBooksCatalogue={onUpdateBooksCatalogue}
      />
      <ConfirmModal
        clearButtonTitle="Отменить"
        isOpened={isConfirmModalOpened}
        submitButtonTitle="Удалить"
        onCancel={closeModal}
        onClose={closeModal}
        onSubmit={handleDeleteUser}
      />
    </>
  );
});

HeaderMenuActionButtonsComponent.displayName = 'HeaderMenuActionButtonsComponent';

export { HeaderMenuActionButtonsComponent as HeaderMenuActionButtons };
