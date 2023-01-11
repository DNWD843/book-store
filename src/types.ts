import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldProps, FieldRenderProps } from 'react-final-form';

import {
  ECollectionPaths,
  EFetchStatuses,
  EPluralizeConfigKey,
  EPersonalInfoFieldsNames,
  EPopupTypes,
  EProfileFormFieldsNames,
  ESendingTypes,
  orderFormFieldsNames,
  profileFormFieldsNames,
  ESendingTypeFieldsNames,
  EContactInfoFieldsNames,
  EAddressInfoFieldsNames,
} from './enums';
import { TColProps } from './ui-components/Col/Col.props';

export type TBookInfo = {
  id: string,
  title: string,
  author: string,
  price: number,
  cover: string,
  description: string,
  genre: string,
  isAddedToFavorites?: boolean,
  isAddedToCart?: boolean,
  quantity?: number,
};

export interface IBooksCollection {
  books: TBookInfo[] | null,
  updatedAt?: number,
}

export type TUrlParams = {
  bookId: string,
};

export type TUser = {
  userId: string,
  email?: string | null,
  displayName?: string | null,
  phoneNumber?: string | null,
  photoURL?: string | null,
  isAnonymous: boolean,
  isAdmin?: false,
  lastLoginAt?: number,
};

export type TUserData = TUser;

export type TPurchases = Record<string, { books: TBookInfo[], orderPrice: number }>;

export type TUserSavings = {
  status?: EFetchStatuses,
  id?: string,
  favorites: TBookInfo[],
  cartValue: TBookInfo[],
  purchases: TPurchases,
};

export type TUserSavingsToUpdate = {
  savings: {
    [ECollectionPaths.favorites]: TBookInfo[],
    [ECollectionPaths.cartValue]: TBookInfo[],
    [ECollectionPaths.purchases]: TPurchases,
  },
  userId: TUserData['userId'],
};

export type TAuthFormValues = { email: string, password: string };

export type TOrderFormValues = {
  [ESendingTypeFieldsNames.sendingType]: ESendingTypes,
  [EAddressInfoFieldsNames.postalCode]?: string,
  [EAddressInfoFieldsNames.country]?: string,
  [EAddressInfoFieldsNames.regionName]?: string,
  [EAddressInfoFieldsNames.cityName]?: string,
  [EAddressInfoFieldsNames.streetName]?: string,
  [EAddressInfoFieldsNames.houseNumber]?: string,
  [EAddressInfoFieldsNames.buildingNumber]?: string,
  [EAddressInfoFieldsNames.housingNumber]?: string,
  [EAddressInfoFieldsNames.flatNumber]?: string,
  [EContactInfoFieldsNames.email]?: string,
  [EContactInfoFieldsNames.phoneNumber]: string,
  [EPersonalInfoFieldsNames.firstName]: string,
  [EPersonalInfoFieldsNames.lastName]: string,
  [EPersonalInfoFieldsNames.patronymic]?: string,
};

export type TProfileFormValues = Record<EProfileFormFieldsNames, string | null>;

export type TSendingTypeRadioButton = {
  name: string,
  component: 'input',
  value: ESendingTypes,
  id: string,
  label: string,
  className: string,
};

export type TSendingTypeRadioButtons = TSendingTypeRadioButton[];
export type TInputElementProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type TSendingOrderData = {
  data: TOrderFormValues,
  currentPurchase: TPurchases
};

export type TPopupConfig = {
  id: string,
  message: string,
  type: EPopupTypes,
};
export type TPopupsState = TPopupConfig[];

export type TPluralizedTextForms = Record<EPluralizeConfigKey, string>;

// inputs configs
type TFormInputsConfigValue = { name: string, placeholder: string, label: string };
type TFormInputsConfig<TFormFieldsConfigKeys extends string> = Record<TFormFieldsConfigKeys, TFormInputsConfigValue>;

type TOrderFormInputsConfigKeys = keyof typeof orderFormFieldsNames;
export type TOrderFormInputsConfig = TFormInputsConfig<TOrderFormInputsConfigKeys>;

type TProfileFormInputsConfigKeys = keyof typeof profileFormFieldsNames;
export type TProfileFormInputsConfig = TFormInputsConfig<TProfileFormInputsConfigKeys>;

// form fields configs
export interface IFieldConfig extends FieldProps<string, FieldRenderProps<string>> {
  InputProps: {
    inputElementProps: TInputElementProps,
    label: string,
  },
  size: TColProps['size'],
}

type TFormFieldsConfig<T extends string> = Record<T, IFieldConfig>;

type TPersonalInfoFormFieldsConfigKeys = keyof typeof EPersonalInfoFieldsNames;
export type TPersonalInfoFormFieldsConfig = TFormFieldsConfig<TPersonalInfoFormFieldsConfigKeys>;

type TContactInfoFieldsConfigKeys = keyof typeof EContactInfoFieldsNames;
export type TContactInfoFieldsConfig = TFormFieldsConfig<TContactInfoFieldsConfigKeys>;

type TAddressInfoFieldsConfigKeys = keyof typeof EAddressInfoFieldsNames;
export type TAddressInfoFieldsConfig = TFormFieldsConfig<TAddressInfoFieldsConfigKeys>;

type TProfileFormFieldsConfigKeys = keyof typeof EProfileFormFieldsNames;
export type TProfileFormFieldsConfig = TFormFieldsConfig<TProfileFormFieldsConfigKeys>;
