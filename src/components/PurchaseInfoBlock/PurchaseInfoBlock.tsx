import React, { memo } from 'react';

import { RUBLE_SIGN } from '../../constants';
import styles from '../../pages/PurchasesListPage/PurchasesListPage.module.css';
import { Region } from '../../ui-components';
import { Cards } from '../Cards';

import { TPurchaseInfoProps } from './PurchaseInfoBlock.props';

const PurchaseInfoBlock: React.FC<TPurchaseInfoProps> = ({ purchaseDateAndTime, purchasePrice, books }) => (
  <Region className={styles.pageRegion}>
    <div className={styles.regionHeader}>
      <div className={styles.purchaseDateAndTime}>
        <span className={styles.accentBold}>Дата покупки:</span>
        <span className={styles.purchaseInfoValue}>{purchaseDateAndTime}</span>
      </div>
      <div className={styles.purchasePrice}>
        <span className={styles.accentBold}>Стоимость покупки:</span>
        <span className={styles.purchaseInfoValue}>{`${purchasePrice} ${RUBLE_SIGN}`}</span>
      </div>
    </div>
    <Cards books={books} />
  </Region>
);

PurchaseInfoBlock.displayName = 'PurchaseInfoBlock';

const MemoPurchaseInfoBlock = memo(PurchaseInfoBlock);

export { MemoPurchaseInfoBlock as PurchaseInfoBlock };
