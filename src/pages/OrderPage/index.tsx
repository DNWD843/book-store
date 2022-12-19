import React from 'react';

import { OrderForm } from '../../components/OrderForm';
import { Page } from '../../components/Page';

export const OrderPage = () => (
  <Page title="Оформление заказа">
    <OrderForm />
  </Page>
);

OrderPage.displayName = 'OrderPage';
