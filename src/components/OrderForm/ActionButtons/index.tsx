import React, { memo } from 'react';
import { useForm } from 'react-final-form';

import { ActionButtons } from './ActionButtons';

const ActionButtonsComponent: React.FC = () => {
  const { reset } = useForm();

  return (
    <ActionButtons onClear={reset} />
  );
};

ActionButtonsComponent.displayName = 'FormActionButtons';

const memoActionButtonsComponent = memo(ActionButtonsComponent);

export { memoActionButtonsComponent as FormButtons };
