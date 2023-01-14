import React, { PropsWithChildren } from 'react';

import { ModalPortal } from '../../Portals';
import styles from '../Overlays.module.css';

import { TModalProps } from './Modal.props';

export const Modal:React.FC<PropsWithChildren<TModalProps>> = ({ children, isOpened, onClose }) => {
  if (!isOpened) return null;

  return (
    <ModalPortal>
      <div className={styles.modal} role="dialog">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <div className={styles.overlay} role="button" tabIndex={0} onClick={onClose} />
        <div className={styles.modalContent}>{children}</div>
      </div>
    </ModalPortal>
  );
};
