import React from 'react';

import { useAppDispatch } from '../../../redux/hooks';
import { userSavingsActions } from '../../../redux/slices/userSavingsSlice';
import { updateUserSavings } from '../../../redux/thunks';
import { storage, storageKeys } from '../../../utils/localStorage';

import { CartActionButtons } from './CartActionButtons';
import { TCartActionButtonsComponentProps } from './CartActionButtons.props';

const CartActionButtonsComponent: React.FC<TCartActionButtonsComponentProps> = ({ savings, userId }) => {
  const dispatch = useAppDispatch();
  const { setUserSavingsToStore } = userSavingsActions;
  const onCreateOrder = () => {};
  const onClearCart = () => {
    const newData = { ...savings, cartValue: [] };
    dispatch(updateUserSavings({ userId, savings: newData }))
      .then(() => { dispatch(setUserSavingsToStore(newData)); })
      .then(() => { storage.setData(storageKeys.USER_SAVINGS, newData); });
  };

  return (<CartActionButtons onClearCart={onClearCart} onCreateOrder={onCreateOrder} />);
};

CartActionButtonsComponent.displayName = 'CartActionButtons';

export { CartActionButtonsComponent as CartActionButtons };
