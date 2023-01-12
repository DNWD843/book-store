import React, { useMemo } from 'react';

import { TEditedData } from '../../../types';
import { profileFormFieldsConfig } from '../formConfigs';

import { EditProfileModalForm } from './EditProfileModalForm';
import { TEditProfileModalFormComponentProps } from './EditProfileModalForm.props';

const EditProfileModalFormComponent: React.FC<TEditProfileModalFormComponentProps> = ({ fieldKey, currentValue, ...props }) => {
  const initialFormValue: TEditedData = useMemo(() => ({ [fieldKey]: currentValue }), [currentValue, fieldKey]);

  return (
    <EditProfileModalForm initialFormValue={initialFormValue} {...props} {...profileFormFieldsConfig[fieldKey]} />);
};

export { EditProfileModalFormComponent as EditProfileModalForm };
