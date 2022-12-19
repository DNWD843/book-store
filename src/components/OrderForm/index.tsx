import React from 'react';

import { OrderForm } from './OrderForm';

const OrderFormComponent = () => {
  const onSubmit = () => {};

  return (
    <OrderForm onSubmit={onSubmit} />
  );
};

OrderFormComponent.displayName = 'OrderForm';

export { OrderFormComponent as OrderForm };
