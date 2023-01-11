import { PROFILE_FORM_ID, PROFILE_FORM_INPUT_NAME_PREFIX } from '../../../constants';
import { TProfileFormFieldsConfig, TProfileFormInputsConfig } from '../../../types';
import { createFormFieldId } from '../../../utils';
import { profileEmailValidator, profilePhoneNumberValidator } from '../../../validators';

const profileFormInputsConfig: TProfileFormInputsConfig = {
  email: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}email`, label: 'Email', placeholder: 'Введите email' },
  displayName: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}displayName`, label: 'Отображаемое имя', placeholder: 'Введите отображаемое имя' },
  photoURL: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}photoURL`, label: 'Ссылка на фото', placeholder: 'Введите ссылку на фото' },
  phoneNumber: { name: `${PROFILE_FORM_INPUT_NAME_PREFIX}phoneNumber`, label: 'Мобильный телефон', placeholder: 'Введите мобильный телефон' },
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
  },
  photoURL: {
    id: createFormFieldId(PROFILE_FORM_ID, profileFormInputsConfig.photoURL.name),
    name: profileFormInputsConfig.photoURL.name,
    validate: undefined,
    InputProps: {
      inputElementProps: {
        id: profileFormInputsConfig.photoURL.name,
        placeholder: profileFormInputsConfig.photoURL.placeholder,
      },
      label: profileFormInputsConfig.photoURL.label,
    },
  },
  phoneNumber: {
    id: createFormFieldId(PROFILE_FORM_ID, profileFormInputsConfig.phoneNumber.name),
    name: profileFormInputsConfig.phoneNumber.name,
    validate: profilePhoneNumberValidator,
    InputProps: {
      inputElementProps: {
        id: profileFormInputsConfig.phoneNumber.name,
        placeholder: profileFormInputsConfig.phoneNumber.placeholder,
      },
      label: profileFormInputsConfig.phoneNumber.label,
    },
  },
};

export { profileFormInputsConfig, profileFormFieldsConfig };
