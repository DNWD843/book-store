import React from 'react';

import { Modal } from '../../../ui-components';
import { TModalProps } from '../../../ui-components/Overlays/Modal/Modal.props';
import { ActionButtons } from '../../forms';
import { TActionButtonsProps } from '../../forms/FormActionButtons/ActionButtons.props';

import styles from './ConfirmModal.module.css';

export const ConfirmModal: React.FC<TModalProps & TActionButtonsProps> = (
  { isOpened, onClose, onSubmit, onCancel, clearButtonTitle, submitButtonTitle },
) => (
  <Modal isOpened={isOpened} onClose={onClose}>
    <div className={styles.content}>
      <h2 className={styles.title}>Подтверждение удаления профиля</h2>
      <ActionButtons clearButtonTitle={clearButtonTitle} submitButtonTitle={submitButtonTitle} onCancel={onCancel} onSubmit={onSubmit} />
    </div>
  </Modal>
);
