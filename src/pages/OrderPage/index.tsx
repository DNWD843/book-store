import React, { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { buyBooks } from '../../api';
import { OrderForm } from '../../components/OrderForm';
import { Page } from '../../components/Page';
import { ORDER_FORM_ID } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserSavings } from '../../redux/store';
import { routes } from '../../routesMap';
import { TOrderFormValues } from '../../types';

const OrderPage = () => {
  const { cartValue } = useAppSelector(selectUserSavings);
  const navigate = useNavigate();
  const onSubmit = (data: TOrderFormValues) => {
    // TODO: сюда прикрутить моковый метод сабмита данных
    console.log('data', data);
    return buyBooks();
  };

  useEffect(() => {
    if (!cartValue.length) {
      navigate(routes.shoppingCart);
    }
  }, [cartValue.length, navigate]);

  return (
    <Page title="Оформление заказа">
      <Form id={ORDER_FORM_ID} onSubmit={onSubmit}>
        {(formRenderProps) => (<OrderForm {...formRenderProps} />)}
      </Form>
    </Page>
  );
};

OrderPage.displayName = 'OrderPage';

const MemoOrderPage = memo(OrderPage);

export { MemoOrderPage as OrderPage };
