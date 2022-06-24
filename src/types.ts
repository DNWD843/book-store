export type TBook = {
  id: number,
  title: string,
  author: {
    surname: string,
    name: string,
    patronymic: string,
  },
  price: number,
  description: string,
  genre: string,
};
