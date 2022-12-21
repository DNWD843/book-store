import React from 'react';
import { useFormState } from 'react-final-form';

import { ESendingTypes } from '../../../../enums';
import { orderFormFields } from '../../constants';

import { AddressForm } from './AddressForm';

const AddressInfoComponent: React.FC = () => {
  const { values } = useFormState();

  return values[orderFormFields.sendingType.name] === ESendingTypes.post
    ? (<AddressForm />)
    : null;
};

AddressInfoComponent.displayName = 'AddressInfo';

export { AddressInfoComponent as AddressInfo };
