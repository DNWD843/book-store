import React from 'react';

import { OrderForm } from './OrderForm';
import { TOrderFormProps } from './OrderForm.props';

const OrderFormComponent:React.FC<TOrderFormProps> = ({ formTitle, onSubmit }) => (
  <OrderForm formTitle={formTitle} onSubmit={onSubmit} />
);
OrderFormComponent.displayName = 'OrderForm';

export { OrderFormComponent as OrderForm };
