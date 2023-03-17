import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useState } from 'react';

import { defaultMessages, POPUP_ID_PREFIX, updateProfileRequestMessages } from '../../../constants';
import { EPopupTypes, EProfileFormFieldsNames } from '../../../enums';
import { overlaysStore, userStore } from '../../../stores';
import { TEditedData, TEditProfileFormValues, TEditProfileModalConfig, TOnEditArgs, TUserData } from '../../../types';
import { Modal } from '../../../ui-components';
import { storage, storageKeys } from '../../../utils';
import { EditProfileModalForm } from '../EditProfileModalForm';
import { profileFormFieldsConfig } from '../formConfigs';

import { EditProfileForm } from './EditProfileForm';
import { IEditProfileFormComponentProps } from './EditProfileForm.props';

const ProfileFormComponent: React.FC<IEditProfileFormComponentProps> = (props) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<TEditProfileModalConfig>(null);

  const { updateProfileInDB, updateLogin, setUserToStore } = userStore;
  const { addPopup } = overlaysStore;

  const updateProfileData = useCallback(async (data: TEditProfileFormValues) => {
    try {
      const res = await updateProfileInDB(data);

      if (res) {
        setUserToStore(data as TUserData);
        storage.updateData(storageKeys.USER, data);
        addPopup({
          id: uniqueId(POPUP_ID_PREFIX),
          message: updateProfileRequestMessages.success,
          type: EPopupTypes.success,
        });
      }
    } catch (err: any) {
      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      });
    }
  }, [addPopup, setUserToStore, updateProfileInDB]);

  const updateEmail = useCallback(async ({ email }: TEditedData) => {
    try {
      const res = await updateLogin({ email });

      if (res) {
        setUserToStore({ email } as TUserData);
        storage.updateData(storageKeys.USER, { email });
        addPopup({
          id: uniqueId(POPUP_ID_PREFIX),
          message: updateProfileRequestMessages.success,
          type: EPopupTypes.success,
        });
      }
    } catch (err: any) {
      addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err?.message ?? defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      });
    }
  }, [addPopup, setUserToStore, updateLogin]);

  const onEdit = useCallback(({ fieldKey, currentValue }: TOnEditArgs) => () => {
    setModalConfig({ fieldKey, currentValue });
    setModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpened(false);
    setModalConfig(null);
  }, []);

  const onSubmit = useCallback((data: TEditedData) => {
    if (!modalConfig) return;

    const { fieldKey } = modalConfig;
    const isEmptyObject = !(fieldKey in data);

    if (fieldKey === EProfileFormFieldsNames.email && isEmptyObject) return;

    const dataToUpdate = isEmptyObject ? { [fieldKey]: '' } as TEditedData : { ...data };

    if (fieldKey === EProfileFormFieldsNames.email) {
      updateEmail(dataToUpdate)
        .then(() => { closeModal(); });
    } else {
      updateProfileData(data)
        .then(() => { closeModal(); });
    }
  }, [closeModal, modalConfig, updateEmail, updateProfileData]);

  return (
    <>
      <EditProfileForm {...props} disabled formFieldsConfig={Object.values(profileFormFieldsConfig)} onEdit={onEdit} />

      {modalConfig && (
        <Modal isOpened={isModalOpened} onClose={closeModal}>
          <EditProfileModalForm {...modalConfig} onCancel={closeModal} onSubmit={onSubmit} />
        </Modal>
      )}
    </>
  );
};

ProfileFormComponent.displayName = 'ProfileFormComponent';

const ObservableProfileFormComponent = observer(ProfileFormComponent);

export { ObservableProfileFormComponent as ProfileForm };
