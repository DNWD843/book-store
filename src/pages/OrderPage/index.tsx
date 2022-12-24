import React, { memo } from 'react';
import { Form } from 'react-final-form';

import { OrderForm } from '../../components/OrderForm';
import { FORM_ID } from '../../components/OrderForm/constants';
import { Page } from '../../components/Page';
import { TOrderFormValues } from '../../types';

const OrderPage = () => {
  const onSubmit = (data: TOrderFormValues) => {
    // TODO: сюда прикрутить моковый метод сабмита данных
    console.log('data', data);
  };

  return (
    <Page title="Оформление заказа">
      <Form id={FORM_ID} onSubmit={onSubmit}>
        {(formRenderProps) => (<OrderForm {...formRenderProps} />)}
      </Form>
    </Page>
  );
};

OrderPage.displayName = 'OrderPage';

const MemoOrderPage = memo(OrderPage);

export { MemoOrderPage as OrderPage };
