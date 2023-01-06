import React, { memo, useState } from 'react';
import { useForm } from 'react-final-form';

import { InfoPopup } from '../../InfoPopup';

import { ActionButtons } from './ActionButtons';

const ActionButtonsComponent: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { reset } = useForm();
  const [isOpened, setOpened] = useState<boolean>(false);
  const onClose = () => setOpened(false);
  const openPopup = () => setOpened(true);

  return (
    <>
      <ActionButtons onClear={openPopup} />
      <InfoPopup isOpened={isOpened} title="Информация" onClose={onClose}>some children</InfoPopup>
    </>

  );
};

ActionButtonsComponent.displayName = 'FormActionButtons';

const memoActionButtonsComponent = memo(ActionButtonsComponent);

export { memoActionButtonsComponent as FormButtons };
