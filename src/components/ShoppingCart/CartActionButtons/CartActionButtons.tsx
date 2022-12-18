import classNames from 'classnames';
import React from 'react';

import { SimpleButton } from '../../Buttons';

import styles from './CartActionButtons.module.css';

export const CartActionButtons = () => (
  <div className={styles.buttons}>
    <SimpleButton className={classNames(styles.button, 'btn-success')}>
      Оформить заказ
    </SimpleButton>
    <SimpleButton className={classNames(styles.button, 'btn-secondary')}>
      Очистить корзину
    </SimpleButton>
  </div>
);

CartActionButtons.displayName = 'CartActionButtons';
