import classNames from 'classnames';
import React from 'react';

import { SimpleButton } from '../../Buttons';

import { TActionButtonsProps } from './CartActionButtons.props';

import styles from './CartActionButtons.module.css';

export const CartActionButtons: React.FC<TActionButtonsProps> = ({ onCreateOrder, onClearCart }) => (
  <div className={styles.buttons}>
    <SimpleButton className={classNames(styles.button, 'btn-success')} onClick={onCreateOrder}>
      Оформить заказ
    </SimpleButton>
    <SimpleButton className={classNames(styles.button, 'btn-secondary')} onClick={onClearCart}>
      Очистить корзину
    </SimpleButton>
  </div>
);

CartActionButtons.displayName = 'ActionButtons';
