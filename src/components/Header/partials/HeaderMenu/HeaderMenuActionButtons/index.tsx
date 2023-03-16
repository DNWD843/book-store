import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';

import {
  booksRequestMessages,
  defaultMessages,
  deleteUserRequestMessages,
  POPUP_ID_PREFIX,
} from '../../../../../constants';
import { EPopupTypes } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { headerActions, popupsActions } from '../../../../../redux/slices';
import { selectHeaderActionsState } from '../../../../../redux/store';
import { booksStore, savingsStore, userStore } from '../../../../../stores';
import { storage, storageKeys } from '../../../../../utils';
import { ConfirmModal } from '../../../../Modals';

import { HeaderMenuActionButtons } from './HeaderMenuActionButtons';

const HeaderMenuActionButtonsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { closeMenu, openConfirmModal, closeConfirmModal } = headerActions;
  const { isConfirmModalOpened } = useAppSelector(selectHeaderActionsState);
  const { addPopup } = popupsActions;
  const { clearSavings, deleteSavingsInDB } = savingsStore;
  const { logout, deleteProfile, user: { isAdmin } } = userStore;

  const handleLogout = useCallback(async () => {
    try {
      clearSavings();
      await logout();
      storage.deleteData(storageKeys.USER);

      dispatch(closeMenu());
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }
  }, [addPopup, clearSavings, closeMenu, dispatch, logout]);

  const onDelete = useCallback(() => { dispatch(openConfirmModal()); }, [dispatch, openConfirmModal]);
  const closeModal = useCallback(() => { dispatch(closeConfirmModal()); }, [closeConfirmModal, dispatch]);

  const onUpdateBooksCatalogue = useCallback(async () => {
    try {
      const updatedCollection = await booksStore.updateBooksInDB();
      storage.setData(storageKeys.BOOKS, updatedCollection);

      dispatch(closeMenu());

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: booksRequestMessages.updateCollectionSuccess,
        type: EPopupTypes.success,
      }));
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }
  }, [addPopup, closeMenu, dispatch]);

  const handleDeleteUser = useCallback(async () => {
    try {
      await deleteSavingsInDB();
      await deleteProfile();
      storage.deleteData(storageKeys.USER);

      closeModal();

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: deleteUserRequestMessages.success,
        type: EPopupTypes.success,
      }));
    } catch (err: any) {
      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }
  }, [addPopup, closeModal, deleteProfile, deleteSavingsInDB, dispatch]);

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
};

HeaderMenuActionButtonsComponent.displayName = 'HeaderMenuActionButtonsComponent';

const ObservableHeaderMenuActionButtonsComponent = observer(HeaderMenuActionButtonsComponent);

export { ObservableHeaderMenuActionButtonsComponent as HeaderMenuActionButtons };
