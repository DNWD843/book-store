import React, { PropsWithChildren } from 'react';
import { Portal } from 'ui-components/Portal';

import styles from '../Overlays.module.css';

import { TModalProps } from './Modal.props';

export const Modal:React.FC<PropsWithChildren<TModalProps>> = ({ children, isOpened, onClose }) => {
  if (!isOpened) return null;

  return (
    <Portal>
      <div className={styles.modal} role="dialog">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <div className={styles.overlay} role="button" tabIndex={0} onClick={onClose} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
