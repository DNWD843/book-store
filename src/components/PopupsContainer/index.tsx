import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { popupsActions } from '../../redux/slices/popupsSlice';
import { selectPopups } from '../../redux/store';
import { Popup } from '../../ui-components';

export const PopupsContainer: React.FC = () => {
  const popups = useAppSelector(selectPopups);
  const dispatch = useAppDispatch();
  const { removePopup } = popupsActions;

  return (
    <>
      {popups.length
        ? (popups.map(({ id, type, message }) => (
          <Popup key={id} type={type} onClose={() => dispatch(removePopup(id))}>
            {message}
          </Popup>
        )))
        : null}
    </>
  );
};

PopupsContainer.displayName = 'PopupsContainer';
