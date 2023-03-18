import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../../../routesMap';
import { savingsStore } from '../../../stores';

import { CartActionButtons } from './CartActionButtons';

const CartActionButtonsComponent: React.FC = () => {
  const navigate = useNavigate();
  const { clearCartValue, updateSavingsInDB } = savingsStore;

  const onCreateOrder = () => { navigate(routes.order); };
  const onClearCart = useCallback(() => {
    clearCartValue();
    updateSavingsInDB();
  }, [clearCartValue, updateSavingsInDB]);

  return (<CartActionButtons onClearCart={onClearCart} onCreateOrder={onCreateOrder} />);
};

CartActionButtonsComponent.displayName = 'CartActionButtons';

export { CartActionButtonsComponent as CartActionButtons };
