import React, { PropsWithChildren, useMemo } from 'react';
import ReactDOM from 'react-dom';

export const ModalPortal: React.FC<PropsWithChildren> = ({ children }) => {
  const modalContainer = useMemo(() => document.querySelector('#modal-container'), []);

  return ReactDOM.createPortal(children, modalContainer!);
};

ModalPortal.displayName = 'ModalPortal';
