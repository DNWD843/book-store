import { TUserData, TUserSavings } from '../../../types';

export type TCartActionButtonsComponentProps = {
  savings: TUserSavings,
  userId: TUserData['userId'],
};

export type TActionButtonsProps = {
  onCreateOrder: () => void,
  onClearCart: () => void,
};
