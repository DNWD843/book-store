import React, { memo, useCallback, useState } from 'react';

import { TEditedData, TEditProfileModalConfig, TOnEditArgs } from '../../../types';
import { Modal } from '../../../ui-components';
import { EditProfileModalForm } from '../EditProfileModalForm';

import { ProfileForm } from './ProfileForm';
import { IProfileFormComponentProps } from './ProfileForm.props';

const ProfileFormComponent: React.FC<IProfileFormComponentProps> = (props) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<TEditProfileModalConfig>(null);

  const onEdit = useCallback(({ fieldKey, currentValue }: TOnEditArgs) => () => {
    setModalConfig({ fieldKey, currentValue });
    setModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpened(false);
    setModalConfig(null);
  }, []);

  const onSubmit = useCallback((data: TEditedData) => {
    console.log('modal data', data);
  }, []);

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

// {isFormDisabled
//   ? (
//     <SimpleButton
//       className={classNames(styles.editButton, 'btn-outline-secondary')}
//       onClick={toggleDisabled}
//     >
//       {EProfileForm.editButtonTitle}
//     </SimpleButton>
//   )
//   : (
//     <ActionButtons
//       clearButtonTitle={EProfileForm.cancelButtonTitle}
//       submitButtonTitle={EProfileForm.submitButtonTitle}
//       onClear={onCancel}
//     />
//   )}

// <Form id="modal" onSubmit={onSubmit}>
//   {[profileFormFieldsConfig[modalData.fieldKey]].map(({ InputProps, size, ...fieldProps }) => (
//     <Col key={fieldProps.id} size={size}>
//       <Field {...fieldProps} disabled={false} validateFields={[]}>
//         {(renderProps) => (
//           <div className={styles.inputWrapper}>
//             <Input {...renderProps} {...InputProps} />
//             <SimpleButton
//               className={classNames('btn-outline-secondary', styles.editButton)}
//               onClick={onEdit({ fieldKey: renderProps.input.name, currentValue: renderProps.input.value })}
//             >
//               <i className={styles.editIcon}>{pencilIcon}</i>
//             </SimpleButton>
//           </div>
//         )}
//       </Field>
//     </Col>
//   ))}
// </Form>
