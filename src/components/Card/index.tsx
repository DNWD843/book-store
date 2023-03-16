import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { bookDetailsActions } from '../../redux/slices';
import { savingsStore, uiStore, userStore } from '../../stores';
import { TBookInfo } from '../../types';
import { storage, storageKeys } from '../../utils';
import {
  bookmarkActiveIcon,
  bookmarkIcon,
  infoMobile, infoMobilePressed,
  shoppingCartEmptyIcon,
  shoppingCartFilledIcon,
} from '../../vendor/icons';

import { Card } from './Card';
import { CardToolBar } from './CardToolBar';

import styles from './Card.module.css';

const CardComponent: React.FC<TBookInfo> = (props) => {
  const dispatch = useAppDispatch();
  const { setBookDetails } = bookDetailsActions;
  const { isSmallScreen } = uiStore.screen;
  const { isAnonymous } = userStore.user;
  const { addToFavorites, removeFromFavorites, addToCart, removeFromCart, cartValue, favorites, updateSavingsInDB } = savingsStore;
  const navigate = useNavigate();
  const [isInfoVisible, setInfoVisible] = useState<boolean>(false);

  const { id, author, title, price } = props;

  const isAddedToFavorites = favorites.some((book) => book.id === id);
  const isAddedToCart = cartValue.some((book) => book.id === id);

  const toggleInfoVisibility = useCallback(() => {
    setInfoVisible((prev) => !prev);
  }, []);

  const onBookmarkClick = useCallback(() => {
    if (isAddedToFavorites) {
      removeFromFavorites(props);
    } else {
      addToFavorites(props);
    }

    if (!isAnonymous) {
      updateSavingsInDB();
    }
  }, [addToFavorites, isAddedToFavorites, isAnonymous, props, removeFromFavorites, updateSavingsInDB]);

  const onCartButtonClick = useCallback(() => {
    if (isAddedToCart) {
      removeFromCart(props);
    } else {
      addToCart(props);
    }

    if (!isAnonymous) {
      updateSavingsInDB();
    }
  }, [addToCart, isAddedToCart, isAnonymous, props, removeFromCart, updateSavingsInDB]);

  const onCardClick = useCallback((bookId: TBookInfo['id']) => () => {
    dispatch(setBookDetails(props));
    storage.setData(storageKeys.BOOK_DETAILS, props);
    navigate(String(bookId));
  }, [dispatch, navigate, props, setBookDetails]);

  return (
    <div className={styles.cardWrapper}>
      <Card {...props} onCardClick={onCardClick(id)} />
      <div className={styles.cardIconsContainer}>
        {!isAnonymous && (
          <i
            className={classNames(styles.icon, styles.bookmarkIcon)}
            title={isAddedToFavorites ? 'Удалить из избранного' : 'Добавить в избранное'}
            onClick={onBookmarkClick}
          >
            {
              isAddedToFavorites
                ? bookmarkActiveIcon
                : bookmarkIcon
            }
          </i>
        )}
        <i
          className={classNames(styles.icon, styles.cartIcon)}
          title={isAddedToCart ? 'Удалить из корзины' : 'Положить в корзину'}
          onClick={onCartButtonClick}
        >
          {isAddedToCart
            ? shoppingCartFilledIcon
            : shoppingCartEmptyIcon}
        </i>
        {!isSmallScreen
          ? (
            <i
              className={classNames(styles.icon, styles.infoIcon)}
              onClick={toggleInfoVisibility}
            >
              {isInfoVisible
                ? infoMobilePressed
                : infoMobile}
            </i>
          )
          : null}
      </div>
      <div className={classNames(styles.infoContainer, { [styles.infoContainerVisible]: isInfoVisible })}>
        {!isSmallScreen
          ? (<CardToolBar author={author} price={price} title={title} />)
          : null}
      </div>
    </div>
  );
};

CardComponent.displayName = 'CardElement';

const ObservableCardComponent = observer(CardComponent);

export { ObservableCardComponent as Card };
