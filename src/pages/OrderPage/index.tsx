import React, { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { buyBooks } from '../../api';
import { OrderForm } from '../../components/OrderForm';
import { Page } from '../../components/Page';
import { ORDER_FORM_ID, RUBLE_SIGN } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData, selectUserSavings } from '../../redux/store';
import { routes } from '../../routesMap';
import { TOrderFormValues } from '../../types';
import { getTotalPrice } from '../../utils';

const OrderPage = () => {
  const { cartValue } = useAppSelector(selectUserSavings);
  const { userId, isAnonymous, displayName, email, phoneNumber } = useAppSelector(selectUserData);
  const navigate = useNavigate();
  const onSubmit = (data: TOrderFormValues) => {
    // TODO: сюда прикрутить моковый метод сабмита данных
    console.log('data', data);
    return buyBooks();
  };

  const orderPrice = getTotalPrice(cartValue);
  const begin = displayName || email ? `${displayName || email}, В` : 'В';

  const subtitle = `${begin}аш заказ: ${cartValue.length} книг на сумму ${orderPrice} ${RUBLE_SIGN}`;

  useEffect(() => {
    if (!cartValue.length) {
      navigate(routes.shoppingCart);
    }
  }, [cartValue.length, navigate]);

  return (
    <Page subtitle={subtitle} title="Оформление заказа">
      <Form id={ORDER_FORM_ID} onSubmit={onSubmit}>
        {(formRenderProps) => (<OrderForm {...formRenderProps} />)}
      </Form>
    </Page>
  );
};

OrderPage.displayName = 'OrderPage';

const MemoOrderPage = memo(OrderPage);

export { MemoOrderPage as OrderPage };
