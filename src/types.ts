export type TBook = {
  id: number,
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
