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
};

export type TUrlParams = {
  bookId: string,
};

export type TUser = {
  userId: string | null,
  email: string | null,
  displayName: string | null,
  phoneNumber: string | null,
  photoURL: string | null,
  isAnonymous: boolean,
  isAdmin: false,
  lastLoginAt: number,
};
