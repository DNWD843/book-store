export type TBook = {
  id: number,
  title: string,
  author: {
    surname: string,
    name: string,
    patronymic: string,
  },
  price: number,
  image: string,
  description: string,
  genre: string,
};
