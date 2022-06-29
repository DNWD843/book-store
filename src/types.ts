export type TBookInfo = {
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

export type TCardProps = TBookInfo & {
  showTooltip: () => void,
  hideTooltip: () => void,
};
