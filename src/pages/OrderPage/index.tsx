import React from 'react';

import { OrderForm } from '../../components/OrderForm';
import { Page } from '../../components/Page';
import { TOrderFormValues } from '../../types';

export const OrderPage = () => {
  const onSubmit = (data: TOrderFormValues) => {
    console.log('data', data);
  };

  return (
    <Page title="Оформление заказа">
      <OrderForm onSubmit={onSubmit} />
    </Page>
  );
};

OrderPage.displayName = 'OrderPage';
