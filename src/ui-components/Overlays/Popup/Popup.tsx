import React, { PropsWithChildren } from 'react';
import { Portal } from 'ui-components/Portal';

import styles from '../Overlays.module.css';

import { TPopupProps } from './Popup.props';

export const Popup:React.FC<PropsWithChildren<TPopupProps>> = ({ children, isOpened }) => {
  if (!isOpened) return null;

  return (
    <Portal>
      <div className={styles.popup} role="dialog">
        {children}
      </div>
    </Portal>
  );
};
