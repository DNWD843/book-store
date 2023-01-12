import React, { memo, useCallback, useState } from 'react';

import { EProfileFormFieldsNames } from '../../../enums';
import { useEditProfileFormMethods } from '../../../hooks';
import { TEditedData, TEditProfileModalConfig, TOnEditArgs } from '../../../types';
import { Modal } from '../../../ui-components';
import { EditProfileModalForm } from '../EditProfileModalForm';

import { ProfileForm } from './ProfileForm';
import { IProfileFormComponentProps } from './ProfileForm.props';

const ProfileFormComponent: React.FC<IProfileFormComponentProps> = (props) => {
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
    console.log('modal data', data);
    if (fieldKey === EProfileFormFieldsNames.email) {
      console.log('EMAIL');
      updateEmail(data)
        .then(() => { closeModal(); });
    } else {
      console.log('OTHER');
      updateProfileData(data)
        .then(() => { closeModal(); });
    }
  }, [closeModal, modalConfig, updateEmail, updateProfileData]);

  return (
    <>
      <form noValidate>
        <ProfileForm {...props} disabled onEdit={onEdit} />
      </form>
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
