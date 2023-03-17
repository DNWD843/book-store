import isEmpty from 'lodash/isEmpty';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Page } from '../../components/Page';
import { PurchaseInfoBlockComponent } from '../../components/PurchaseInfoBlock';
import { routes } from '../../routesMap';
import { savingsStore, userStore } from '../../stores';

import styles from './PurchasesListPage.module.css';

const PurchasesListPage: React.FC = () => {
  const purchases = toJS(savingsStore.purchases);
  const { isAnonymous } = userStore.user;
  const navigate = useNavigate();

  const purchasesSortedCollection = Object.entries(purchases)
    .sort((a, b) => (new Date(b[0]).getTime() - new Date(a[0]).getTime()));

  const subtitle = 'Вы пока ничего не купили.';

  useEffect(() => {
    if (isAnonymous) {
      navigate(routes.books);
    }
  }, [isAnonymous, navigate]);

  return (
    <Page subtitle={isEmpty(purchases) ? subtitle : ''} title="История покупок">
      <div className={styles.pageContent}>
        {purchasesSortedCollection.map((purchaseInfo) => (<PurchaseInfoBlockComponent key={purchaseInfo[0]} purchaseInfo={purchaseInfo} />))}
      </div>
    </Page>
  );
};

PurchasesListPage.displayName = 'PurchasesListPage';

const ObservablePurchasesListPage = observer(PurchasesListPage);

export { ObservablePurchasesListPage as PurchasesListPage };
