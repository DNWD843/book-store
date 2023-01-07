import React, { PropsWithChildren, useMemo } from 'react';
import ReactDOM from 'react-dom';

export const PopupPortal: React.FC<PropsWithChildren> = ({ children }) => {
  const popupContainer = useMemo(() => document.querySelector('#popup-container'), []);

  return ReactDOM.createPortal(children, popupContainer!);
};

PopupPortal.displayName = 'PopupPortal';
