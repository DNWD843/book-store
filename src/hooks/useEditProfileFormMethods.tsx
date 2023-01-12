import uniqueId from 'lodash/uniqueId';
import { useCallback } from 'react';

import { POPUP_ID_PREFIX, updateProfileRequestMessages } from '../constants';
import { EFetchStatuses, EPopupTypes } from '../enums';
import { useAppDispatch } from '../redux/hooks';
import { authActions, popupsActions } from '../redux/slices';
import { updateUserData, updateUserLogin } from '../redux/thunks/authThunks';
import { TEditedData, TProfileFormValues } from '../types';

export const useEditProfileFormMethods = () => {
  const dispatch = useAppDispatch();
  const { addPopup } = popupsActions;
  const { setUserToStore } = authActions;

  const updateProfileData = useCallback(({ displayName, photoURL }: TProfileFormValues) => dispatch(updateUserData({ displayName, photoURL }))
    .then((res) => {
      console.log('res', res);
      if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
        dispatch(addPopup({
          id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
          message: updateProfileRequestMessages.success,
          type: EPopupTypes.success,
        }));

        dispatch(setUserToStore({ displayName, photoURL }));
        // TODO: тут сетать в локал сторейдж
      } else {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw res;
      }
    })
    .catch((err) => {
      dispatch(addPopup({
        id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
        message: err?.error?.message ?? updateProfileRequestMessages.unexpectedError,
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
        // TODO: тут сетать в локал сторейдж
      } else {
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw res;
      }
    })
    .catch((err) => {
      dispatch(addPopup({
        id: err?.meta?.requestId || uniqueId(POPUP_ID_PREFIX),
        message: err?.error?.message ?? updateProfileRequestMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }), [addPopup, dispatch, setUserToStore]);

  return { updateProfileData, updateEmail };
};
