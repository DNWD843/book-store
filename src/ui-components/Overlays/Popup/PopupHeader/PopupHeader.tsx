import classNames from 'classnames';
import React from 'react';

import { SimpleButton } from '../../../Buttons';

import { TPopupHeaderPropsWithChildren } from './PopupHeader.props';

import styles from './PopupHeader.module.css';

export const PopupHeader:React.FC<TPopupHeaderPropsWithChildren> = ({ children, title, onClose, closeButtonClassName, headerClassName }) => (
  <div className={classNames(styles.header, headerClassName)}>
    {title && (<span className={styles.title}>{title}</span>)}
    {children && (<div className={styles.childrenContainer}>{children}</div>)}
    <SimpleButton className={classNames('btn-sm btn-outline-secondary btn-close', styles.closeButton, closeButtonClassName)} onClick={onClose} />
  </div>
);
