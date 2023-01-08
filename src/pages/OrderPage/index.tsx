import uniqueId from 'lodash/uniqueId';
import React, { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { OrderForm } from '../../components/OrderForm';
import { Page } from '../../components/Page';
import { ORDER_FORM_ID, orderSubmitMessages, POPUP_ID_PREFIX, RUBLE_SIGN } from '../../constants';
import { EFetchStatuses, EPopupTypes } from '../../enums';
import { useUserSavingsHandlers } from '../../hooks/useUserSavingsHandlers';
import { popupsActions } from '../../redux/slices/popupsSlice';
import { sendOrderData } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TOrderFormValues } from '../../types';
import { getTotalPrice } from '../../utils';

const OrderPage = () => {
  const navigate = useNavigate();
  const { updateSavings, userId, displayName, email, dispatch, favorites, cartValue, purchases } = useUserSavingsHandlers('');
  const { addPopup } = popupsActions;

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
      .then((res) => {
        if (res.meta.requestStatus === EFetchStatuses.fulfilled) {
          dispatch(addPopup({
            id: res.meta.requestId || uniqueId(POPUP_ID_PREFIX),
            message: res.payload?.message ?? '',
            type: EPopupTypes.success,
          }));
        } else {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw res;
        }
      })
      .then(() => { updateSavings(userId, savings); })
      .catch((err) => {
        dispatch(addPopup({
          id: err.meta.requestId || uniqueId(POPUP_ID_PREFIX),
          message: err.error.message || orderSubmitMessages.unexpectedError,
          type: EPopupTypes.danger,
        }));
      });
  };

  useEffect(() => {
    if (!cartValue.length) {
      navigate(routes.books);
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
