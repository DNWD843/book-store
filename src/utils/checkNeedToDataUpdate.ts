type TCheckNeedToDataUpdateArgs = {
  date: number,
  limit: number
};

/**
 * @description Проверяет необходимость обновления контента. Возвращает true/false.
 * если true - необходимо обновить контент
 * если false - контент можно не обновлять
 * @param {number} date - timestamp даты получения контента
 * @param {number} limit - timestamp максимального отклонения от даты контента
 */

export const checkNeedToDataUpdate = ({ date, limit }: TCheckNeedToDataUpdateArgs) => (Date.now() - date) > limit;
