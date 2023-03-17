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
import { booksStore, overlaysStore, savingsStore, userStore } from '../../../../../stores';
import { storage, storageKeys } from '../../../../../utils';
import { ConfirmModal } from '../../../../Modals';

import { HeaderMenuActionButtons } from './HeaderMenuActionButtons';

const HeaderMenuActionButtonsComponent: React.FC = () => {
  const { addPopup, closeMenu, openConfirmModal, closeConfirmModal, isConfirmModalOpened } = overlaysStore;
  const { clearSavings, deleteSavingsInDB } = savingsStore;
  const { logout, deleteProfile, user: { isAdmin } } = userStore;

  const handleLogout = useCallback(async () => {
    try {
      clearSavings();
      await logout();
      storage.deleteData(storageKeys.USER);
      closeMenu();
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(err);

      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      });
    }
  }, [addPopup, clearSavings, closeMenu, logout]);

  const onUpdateBooksCatalogue = useCallback(async () => {
    try {
      const updatedCollection = await booksStore.updateBooksInDB();
      storage.setData(storageKeys.BOOKS, updatedCollection);
      closeMenu();

      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: booksRequestMessages.updateCollectionSuccess,
        type: EPopupTypes.success,
      });
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);

      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      });
    }
  }, [addPopup, closeMenu]);

  const handleDeleteUser = useCallback(async () => {
    try {
      await deleteSavingsInDB();
      await deleteProfile();
      storage.deleteData(storageKeys.USER);
      closeConfirmModal();

      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: deleteUserRequestMessages.success,
        type: EPopupTypes.success,
      });
    } catch (err: any) {
      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      });
    }
  }, [addPopup, closeConfirmModal, deleteProfile, deleteSavingsInDB]);

  return (
    <>
      <HeaderMenuActionButtons
        isAdmin={isAdmin}
        onDelete={openConfirmModal}
        onLogout={handleLogout}
        onUpdateBooksCatalogue={onUpdateBooksCatalogue}
      />
      <ConfirmModal
        clearButtonTitle="Отменить"
        isOpened={isConfirmModalOpened}
        submitButtonTitle="Удалить"
        onCancel={closeConfirmModal}
        onClose={closeConfirmModal}
        onSubmit={handleDeleteUser}
      />
    </>
  );
};

HeaderMenuActionButtonsComponent.displayName = 'HeaderMenuActionButtonsComponent';

const ObservableHeaderMenuActionButtonsComponent = observer(HeaderMenuActionButtonsComponent);

export { ObservableHeaderMenuActionButtonsComponent as HeaderMenuActionButtons };
