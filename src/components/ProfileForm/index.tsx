import React, { memo, useCallback, useState } from 'react';
import { useForm } from 'react-final-form';

import { ProfileForm } from './ProfileForm';
import { IProfileFormComponentProps } from './ProfileForm.props';

const ProfileFormComponent: React.FC<IProfileFormComponentProps> = (props) => {
  const { reset } = useForm();
  const [isFormDisabled, setFormDisabled] = useState<boolean>(true);
  const { initialValues } = props;

  const toggleDisabled = useCallback(() => setFormDisabled((prev) => !prev), []);

  const onCancel = useCallback(() => {
    reset(initialValues);
    toggleDisabled();
  }, [initialValues, reset, toggleDisabled]);

  return (
    <ProfileForm {...props} disabled={isFormDisabled} onCancel={onCancel} onEdit={toggleDisabled} />
  );
};

ProfileFormComponent.displayName = 'ProfileFormComponent';

const MemoProfileFormComponent = memo(ProfileFormComponent);

export { MemoProfileFormComponent as ProfileForm };
