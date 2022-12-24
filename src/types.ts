import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { ECollectionPaths, EFetchStatuses, ESendingTypes } from './enums';

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

export type TUserSavings = {
  status?: EFetchStatuses,
  id?: string,
  favorites: TBookInfo[],
  cartValue: TBookInfo[],
};

export type TUserSavingsToUpdate = {
  savings: {
    [ECollectionPaths.favorites]: TBookInfo[],
    [ECollectionPaths.cartValue]: TBookInfo[],
  },
  userId: TUserData['userId'],
};

export type TAuthFormValues = { email: string, password: string };
export type TOrderFormValues = {
  sendingType: ESendingTypes,
  postalCode: string,
  country: string,
  regionName: string,
  cityName: string,
  streetName: string,
  houseNumber: string,
  buildingNumber: string,
  housingNumber: string,
  flatNumber: string,
  email: string,
  phoneNumber: string,
  firstName: string,
  lastName: string,
  patronymic: string,
};

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

export type TFieldConfig = {
  id: string,
  name: string,
  validate?: (value: string) => string | undefined,
  InputProps: {
    inputElementProps: TInputElementProps,
    label: string,
  },
};
