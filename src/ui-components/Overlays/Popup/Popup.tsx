import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import { PopupPortal } from '../../Portals';
import styles from '../Overlays.module.css';

import { TPopupProps } from './Popup.props';
import { PopupHeader } from './PopupHeader';
import { popupTitles } from './constants';

export const Popup:React.FC<PropsWithChildren<TPopupProps>> = ({ children, onClose, type }) => (
  <PopupPortal>
    <div className={styles.popup} role="dialog">
      <div className={classNames(styles.content, styles[type])}>
        <PopupHeader title={popupTitles[type]} onClose={onClose} />
        {children}
      </div>
    </div>
  </PopupPortal>
);
