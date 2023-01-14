import React, { memo } from 'react';

import { RUBLE_SIGN } from '../../constants';
import styles from '../../pages/PurchasesListPage/PurchasesListPage.module.css';
import { Region } from '../../ui-components';
import { Cards } from '../Cards';

import { TPurchaseInfoProps } from './PurchaseInfoBlock.props';

const PurchaseInfoBlock: React.FC<TPurchaseInfoProps> = ({ purchaseDateAndTime, purchasePrice, books }) => (
  <Region className={styles.pageRegion}>
    <div className={styles.regionHeader}>
      <p className={styles.purchaseDateAndTime}>
        <span className={styles.accentBold}>Дата покупки:</span>
        <span className={styles.purchaseInfoValue}>{purchaseDateAndTime}</span>
      </p>
      <p className={styles.purchasePrice}>
        <span className={styles.accentBold}>Стоимость покупки:</span>
        <span className={styles.purchaseInfoValue}>{`${purchasePrice} ${RUBLE_SIGN}`}</span>
      </p>
    </div>
    <Cards books={books} />
  </Region>
);

PurchaseInfoBlock.displayName = 'PurchaseInfoBlock';

const MemoPurchaseInfoBlock = memo(PurchaseInfoBlock);

export { MemoPurchaseInfoBlock as PurchaseInfoBlock };
