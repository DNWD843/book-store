import React from 'react';

import { Popup, PopupHeader } from '../../ui-components';

import { TInfoPopupPropsWithChildren } from './InfoPopup.props';

import styles from './InfoPopup.module.css';

export const InfoPopup: React.FC<TInfoPopupPropsWithChildren> = ({ isOpened, onClose, title, children }) => (
  <Popup isOpened={isOpened} onClose={onClose}>
    <div className={styles.content}>
      <PopupHeader title={title} onClose={onClose} />
      {children}
    </div>
  </Popup>
);
