import uniqueId from 'lodash/uniqueId';
import React, { memo, useCallback } from 'react';

import { booksRequestMessages, defaultMessages, POPUP_ID_PREFIX } from '../../../../../constants';
import { EFetchStatuses, EPopupTypes } from '../../../../../enums';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import { headerActions, popupsActions, userSavingsActions } from '../../../../../redux/slices';
import { selectUserData, storageActions } from '../../../../../redux/store';
import { auth, updateBooksCatalogue } from '../../../../../redux/thunks';
import { TUpdateCatalogueRequestResponse } from '../../../../../types';
import { storage, storageKeys } from '../../../../../utils';

import { HeaderMenuActionButtons } from './HeaderMenuActionButtons';

const HeaderMenuActionButtonsComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { removeUserSavingsFromStore } = userSavingsActions;
  const { addPopup } = popupsActions;
  const { closeMenu, openConfirmModal } = headerActions;
  const { isAdmin } = useAppSelector(selectUserData);

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

  return (
    <HeaderMenuActionButtons
      isAdmin={isAdmin}
      onDelete={onDelete}
      onLogout={handleLogout}
      onUpdateBooksCatalogue={onUpdateBooksCatalogue}
    />
  );
};

HeaderMenuActionButtonsComponent.displayName = 'HeaderMenuActionButtonsComponent';

const MemoHeaderMenuActionButtonsComponent = memo(HeaderMenuActionButtonsComponent);

export { MemoHeaderMenuActionButtonsComponent as HeaderMenuActionButtons };
