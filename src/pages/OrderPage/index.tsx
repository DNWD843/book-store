import React, { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { OrderForm } from '../../components/OrderForm';
import { Page } from '../../components/Page';
import { ORDER_FORM_ID, RUBLE_SIGN } from '../../constants';
import { useUserSavingsHandlers } from '../../hooks/useUserSavingsHandlers';
// import { useAppSelector } from '../../redux/hooks';
// import { selectUserSavings } from '../../redux/store';
import { sendOrderData } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TOrderFormValues } from '../../types';
import { getTotalPrice } from '../../utils';

const OrderPage = () => {
  const navigate = useNavigate();
  const { updateSavings, userId, displayName, email, dispatch, favorites, cartValue, purchases } = useUserSavingsHandlers('');

  const orderPrice = getTotalPrice(cartValue);
  const begin = displayName || email ? `${displayName || email}, В` : 'В';
  const subtitle = `${begin}аш заказ: ${cartValue.length} книг на сумму ${orderPrice} ${RUBLE_SIGN}`;

  const onSubmit = async (data: TOrderFormValues) => {
    const currentPurchase = { [new Date().toISOString()]: { books: cartValue, orderPrice } };
    const orderData = { data, currentPurchase };
    const savings = { cartValue: [],
      favorites,
      purchases: {
        ...purchases,
        ...currentPurchase,
      } };

    dispatch(sendOrderData(orderData))
      .then(() => { updateSavings(userId, savings); });
  };

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
