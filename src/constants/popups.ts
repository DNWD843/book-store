import { EPopupTypes } from '../enums';

export const popupTitles = {
  [EPopupTypes.success]: 'Операция выполнена!',
  [EPopupTypes.warning]: 'Внимание!',
  [EPopupTypes.danger]: 'Произошла ошибка!',
  [EPopupTypes.info]: 'Информация.',
};

export const POPUP_ID_PREFIX = 'popup_';
