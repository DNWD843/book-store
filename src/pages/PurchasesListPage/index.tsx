import React from 'react';

import { Page } from '../../components/Page';
import { PurchaseInfoBlockComponent } from '../../components/PurchaseInfoBlock';
import { useAppSelector } from '../../redux/hooks';
import { selectUserPurchases } from '../../redux/store';

import styles from './PurchasesListPage.module.css';

const PurchasesListPage: React.FC = () => {
  const purchases = useAppSelector(selectUserPurchases);
  const sortedPurchasesInfoMap = Object.entries(purchases)
    .sort((a, b) => {
      if (b[0] > a[0]) {
        return 1;
      }
      return -1;
    });

  return (
    <Page title="История покупок">
      <div className={styles.pageContent}>
        {sortedPurchasesInfoMap.map((purchaseInfo) => (<PurchaseInfoBlockComponent key={purchaseInfo[0]} purchaseInfo={purchaseInfo} />))}
      </div>
    </Page>
  );
};

PurchasesListPage.displayName = 'PurchasesListPage';

export { PurchasesListPage };
