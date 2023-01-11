import { COL_SIZE_1, COL_SIZE_2, PROFILE_FORM_ID, PROFILE_FORM_INPUT_NAME_PREFIX } from '../../../constants';
import { TProfileFormFieldsConfig, TProfileFormInputsConfig } from '../../../types';
import { createFormFieldId } from '../../../utils';
import { profileEmailValidator, profileUrlValidator } from '../../../validators';

const profileFormInputsConfig: TProfileFormInputsConfig = {
  email: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}email`, label: 'Email', placeholder: 'Введите email' },
  displayName: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}displayName`, label: 'Отображаемое имя', placeholder: 'Введите отображаемое имя' },
  photoURL: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}photoURL`, label: 'Ссылка на фото', placeholder: 'Введите ссылку на фото' },
};

const profileFormFieldsConfig: TProfileFormFieldsConfig = {
  email: {
    id: createFormFieldId(PROFILE_FORM_ID, profileFormInputsConfig.email.name),
    name: profileFormInputsConfig.email.name,
    validate: profileEmailValidator,
    InputProps: {
      inputElementProps: {
        id: profileFormInputsConfig.email.name,
        placeholder: profileFormInputsConfig.email.placeholder,
      },
      label: profileFormInputsConfig.email.label,
    },
    size: COL_SIZE_2,
  },
  displayName: {
    id: createFormFieldId(PROFILE_FORM_ID, profileFormInputsConfig.displayName.name),
    name: profileFormInputsConfig.displayName.name,
    validate: undefined,
    InputProps: {
      inputElementProps: {
        id: profileFormInputsConfig.displayName.name,
        placeholder: profileFormInputsConfig.displayName.placeholder,
      },
      label: profileFormInputsConfig.displayName.label,
    },
    size: COL_SIZE_2,
  },
  photoURL: {
    id: createFormFieldId(PROFILE_FORM_ID, profileFormInputsConfig.photoURL.name),
    name: profileFormInputsConfig.photoURL.name,
    validate: profileUrlValidator,
    InputProps: {
      inputElementProps: {
        id: profileFormInputsConfig.photoURL.name,
        placeholder: profileFormInputsConfig.photoURL.placeholder,
      },
      label: profileFormInputsConfig.photoURL.label,
    },
    size: COL_SIZE_1,
  },
};

export { profileFormInputsConfig, profileFormFieldsConfig };
