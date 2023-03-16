import uniqueId from 'lodash/uniqueId';
import { flowResult, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import { ScreenLoader } from '../../components/Loaders';
import { Page } from '../../components/Page';
import { OrderForm } from '../../components/forms';
import {
  bookWordForms,
  defaultMessages,
  ORDER_FORM_ID, orderSubmitMessages,
  POPUP_ID_PREFIX,
  RUBLE_SIGN,
} from '../../constants';
import { EFetchStatuses, EPopupTypes } from '../../enums';
import { useAppDispatch } from '../../redux/hooks';
import { popupsActions } from '../../redux/slices';
import { routes } from '../../routesMap';
import { booksStore, savingsStore, userStore } from '../../stores';
import { TOrderFormValues } from '../../types';
import { getTotalPrice, pluralize } from '../../utils';

const OrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { addPopup } = popupsActions;
  const { displayName, email } = userStore.user;
  const { buyBooks, status } = booksStore;
  const { updateSavingsInDB, addToPurchases, clearCartValue } = savingsStore;
  const cartValue = toJS(savingsStore.cartValue);

  const { totalPrice: orderPrice, bookQuantity } = getTotalPrice(cartValue);
  const pluralizedBookWord = useMemo(() => pluralize({ quantity: bookQuantity, textForms: bookWordForms }), [bookQuantity]);
  const begin = displayName || email ? `${displayName || email}, В` : 'В';
  const subtitle = `${begin}аш заказ: ${bookQuantity} ${pluralizedBookWord} на сумму ${orderPrice} ${RUBLE_SIGN}`;

  const onSubmit = useCallback(async (data: TOrderFormValues) => {
    try {
      const newPurchase = {
        key: new Date().toISOString(),
        value: { books: cartValue, orderPrice },
      };
      const orderData = { data, newPurchase };
      const response = await flowResult(buyBooks(orderData));

      addToPurchases(newPurchase);
      clearCartValue();
      updateSavingsInDB();

      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: response?.message ?? orderSubmitMessages.success,
        type: EPopupTypes.success,
      }));
    } catch (err: any) {
      dispatch(addPopup({
        id: uniqueId(POPUP_ID_PREFIX),
        message: err.message || defaultMessages.unexpectedError,
        type: EPopupTypes.danger,
      }));
    }
  }, [addPopup, addToPurchases, buyBooks, cartValue, clearCartValue, dispatch, orderPrice, updateSavingsInDB]);

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

const ObservableOrderPage = observer(OrderPage);

export { ObservableOrderPage as OrderPage };
