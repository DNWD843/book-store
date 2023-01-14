import uniqueId from 'lodash/uniqueId';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { OrderForm } from '../../components/forms';
import { bookWordForms, ORDER_FORM_ID, orderSubmitMessages, POPUP_ID_PREFIX, RUBLE_SIGN } from '../../constants';
import { EFetchStatuses, EPopupTypes } from '../../enums';
import { useUserSavingsHandlers } from '../../hooks';
import { popupsActions } from '../../redux/slices';
import { sendOrderData } from '../../redux/thunks';
import { routes } from '../../routesMap';
import { TOrderFormValues } from '../../types';
import { getTotalPrice, pluralize } from '../../utils';

const OrderPage = () => {
  const navigate = useNavigate();
  const { updateSavings, userId, displayName, email, dispatch, favorites, cartValue, purchases, status } = useUserSavingsHandlers('');
  const { addPopup } = popupsActions;

  const { totalPrice: orderPrice, booksQuantity } = getTotalPrice(cartValue);
  const pluralizedBookWord = useMemo(() => pluralize({ quantity: booksQuantity, textForms: bookWordForms }), [booksQuantity]);
  const begin = displayName || email ? `${displayName || email}, В` : 'В';
  const subtitle = `${begin}аш заказ: ${booksQuantity} ${pluralizedBookWord} на сумму ${orderPrice} ${RUBLE_SIGN}`;

  const onSubmit = useCallback(async (data: TOrderFormValues) => {
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
  }, [addPopup, cartValue, dispatch, favorites, orderPrice, purchases, updateSavings, userId]);

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
      {status === EFetchStatuses.pending ? (<ScreenLoader />) : null}
    </Page>
  );
};

OrderPage.displayName = 'OrderPage';

const MemoOrderPage = memo(OrderPage);

export { MemoOrderPage as OrderPage };
