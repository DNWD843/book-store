import isEmpty from 'lodash/isEmpty';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '../../components/Page';
import { PurchaseInfoBlockComponent } from '../../components/PurchaseInfoBlock';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData, selectUserPurchases } from '../../redux/store';
import { routes } from '../../routesMap';

import styles from './PurchasesListPage.module.css';

const PurchasesListPage: React.FC = () => {
  const purchases = useAppSelector(selectUserPurchases);
  const { isAnonymous } = useAppSelector(selectUserData);
  const navigate = useNavigate();

  const sortedPurchasesInfoMap = Object.entries(purchases)
    .sort((a, b) => {
      if (b[0] > a[0]) {
        return 1;
      }
      return -1;
    });

  const subtitle = 'Вы пока ничего не купили.';

  useEffect(() => {
    if (isAnonymous) {
      navigate(routes.books);
    }
  }, [isAnonymous, navigate]);

  return (
    <Page subtitle={isEmpty(purchases) ? subtitle : ''} title="История покупок">
      <div className={styles.pageContent}>
        {sortedPurchasesInfoMap.map((purchaseInfo) => (<PurchaseInfoBlockComponent key={purchaseInfo[0]} purchaseInfo={purchaseInfo} />))}
      </div>
    </Page>
  );
};

PurchasesListPage.displayName = 'PurchasesListPage';

export { PurchasesListPage };
