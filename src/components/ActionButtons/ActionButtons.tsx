import React, { memo } from 'react';

import { SimpleButton, SubmitButton } from '../../ui-components';

import { TActionButtonsProps } from './ActionButtons.props';

import styles from './ActionButtons.module.css';

const ActionButtons:React.FC<TActionButtonsProps> = ({ onClear, submitButtonTitle, clearButtonTitle = 'Очистить форму' }) => (
  <div className={styles.formButtons}>
    <SimpleButton className="btn-outline-secondary" onClick={onClear}>{clearButtonTitle}</SimpleButton>
    <SubmitButton className="btn-primary">{submitButtonTitle}</SubmitButton>
  </div>
);

ActionButtons.displayName = 'FormButtons';

const MemoActionButtons = memo(ActionButtons);

export { MemoActionButtons as ActionButtons };
