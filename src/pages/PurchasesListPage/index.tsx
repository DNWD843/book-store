import React from 'react';

import { Cards } from '../../components/Cards';
import { Page } from '../../components/Page';
import { RUBLE_SIGN } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUserPurchases } from '../../redux/store';
import { Region } from '../../ui-components';

import styles from './PurchasesListPage.module.css';

const PurchasesListPage: React.FC = () => {
  const purchases = useAppSelector(selectUserPurchases);
  const purchasesAsArray = Object.entries(purchases);

  return (
    <Page title="История покупок">
      <div className={styles.pageContent}>
        {purchasesAsArray
          .sort((a, b) => {
            if (b[0] > a[0]) {
              return 1;
            }
            return -1;
          })
          .map((purchase) => {
            const purchaseDate = purchase[0];
            const { orderPrice: purchasePrice, books } = purchase[1];

            return (
              <Region className={styles.pageRegion} key={purchaseDate}>
                <div className={styles.regionHeader}>
                  <span>{`Дата покупки: ${purchaseDate}`}</span>
                  <span>{`Время покупки: ${purchaseDate}`}</span>
                  <span>{`Стоимость покупки: ${purchasePrice} ${RUBLE_SIGN}`}</span>
                </div>
                <Cards books={books} />
              </Region>
            );
          })}
      </div>

    </Page>
  );
};

PurchasesListPage.displayName = 'PurchasesListPage';

export { PurchasesListPage };
