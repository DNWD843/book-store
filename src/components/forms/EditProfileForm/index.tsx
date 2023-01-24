import React, { memo, useCallback, useState } from 'react';

import { EProfileFormFieldsNames } from '../../../enums';
import { useEditProfileFormMethods } from '../../../hooks';
import { TEditedData, TEditProfileModalConfig, TOnEditArgs } from '../../../types';
import { Modal } from '../../../ui-components';
import { EditProfileModalForm } from '../EditProfileModalForm';
import { profileFormFieldsConfig } from '../formConfigs';

import { EditProfileForm } from './EditProfileForm';
import { IEditProfileFormComponentProps } from './EditProfileForm.props';

const ProfileFormComponent: React.FC<IEditProfileFormComponentProps> = (props) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<TEditProfileModalConfig>(null);

  const { updateProfileData, updateEmail } = useEditProfileFormMethods();

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

const MemoProfileFormComponent = memo(ProfileFormComponent);

export { MemoProfileFormComponent as ProfileForm };
