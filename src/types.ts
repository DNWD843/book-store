import { ECollectionPaths, EFetchStatuses } from './enums';

export type TBookInfo = {
  id: string,
  title: string,
  author: {
    surname: string,
    name: string,
    patronymic: string,
  },
  price: number,
  cover: string,
  description: string,
  genre: string,
  isAddedToFavorites?: boolean,
  isAddedToCart?: boolean,
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
  resetStatus?: EFetchStatuses,
  id?: string,
  favorites: string[],
  cartValue: TBookInfo[],
};

export type TUserSavingsToUpdate = {
  savings: {
    [ECollectionPaths.favorites]: Array<TBookInfo['id']>,
    [ECollectionPaths.cartValue]: TBookInfo[],
  },
  userId: TUserData['userId'],
};
