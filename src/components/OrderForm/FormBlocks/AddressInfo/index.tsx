import React, { useMemo } from 'react';
import { useFormState } from 'react-final-form';

import { ESendingTypes } from '../../../../enums';

import { AddressForm } from './AddressForm';

const AddressInfoComponent: React.FC = () => {
  const { values: { sendingType } } = useFormState();

  return useMemo(
    () => (sendingType === ESendingTypes.post ? (<AddressForm />) : null),
    [sendingType],
  );
};

AddressInfoComponent.displayName = 'AddressInfo';

export { AddressInfoComponent as AddressInfo };
