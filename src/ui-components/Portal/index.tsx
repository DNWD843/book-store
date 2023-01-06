import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

export const Portal: React.FC<PropsWithChildren> = ({ children }) => {
  const modalContainer = useMemo(() => document.querySelector('#modal-container'), []);

  useEffect(() => {
    document.body.appendChild(modalContainer!);

    return () => {
      document.body.removeChild(modalContainer!);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return ReactDOM.createPortal(children, modalContainer!);
};

Portal.displayName = 'Portal';
