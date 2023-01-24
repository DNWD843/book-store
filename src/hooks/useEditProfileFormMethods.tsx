import uniqueId from 'lodash/uniqueId';
import { useCallback } from 'react';

import { defaultMessages, POPUP_ID_PREFIX, updateProfileRequestMessages } from '../constants';
import { EFetchStatuses, EPopupTypes } from '../enums';
import { useAppDispatch } from '../redux/hooks';
import { authActions, popupsActions } from '../redux/slices';
import { storageActions } from '../redux/store';
import { updateUserData, updateUserLogin } from '../redux/thunks/authThunks';
import { TEditedData, TEditProfileFormValues } from '../types';
import { storage, storageKeys } from '../utils/localStorage';

export const useEditProfileFormMethods = () => {
  const dispatch = useAppDispatch();
  const { addPopup } = popupsActions;
  const { setUserToStore } = authActions;

  const updateProfileData = useCallback((data: TEditProfileFormValues) => dispatch(updateUserData(data))
    .then((res) => {
      if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
        dispatch(addPopup({
          id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
          message: updateProfileRequestMessages.success,
          type: EPopupTypes.success,
        }));

        dispatch(setUserToStore(data));
        storage.updateData(storageKeys.USER, data);
        dispatch(storageActions.updateUserInfo);
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
    }), [addPopup, dispatch, setUserToStore]);

  const updateEmail = useCallback(({ email }: TEditedData) => dispatch(updateUserLogin({ email }))
    .then((res) => {
      if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
        dispatch(addPopup({
          id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
          message: updateProfileRequestMessages.success,
          type: EPopupTypes.success,
        }));

        dispatch(setUserToStore({ email }));
        storage.updateData(storageKeys.USER, { email });
        dispatch(storageActions.updateUserInfo);
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
    }), [addPopup, dispatch, setUserToStore]);

  return { updateProfileData, updateEmail };
};
