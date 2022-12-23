import React, { useMemo } from 'react';
import { useFormState } from 'react-final-form';

import { SendingTypeSelect } from './SendingTypeSelect';

const SendingTypeSelectComponent: React.FC = () => {
  const { errors, submitFailed } = useFormState();

  const error = useMemo(() => (submitFailed && errors?.sendingType ? errors.sendingType : ''), [errors?.sendingType, submitFailed]);

  return (<SendingTypeSelect error={error} />);
};

export { SendingTypeSelectComponent as SendingTypeSelect };
