import classNames from 'classnames';
import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMatchMedia, useUserSavingsHandlers } from '../../hooks';
import { bookDetailsActions } from '../../redux/slices';
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
  const { setBookDetails } = bookDetailsActions;
  const navigate = useNavigate();
  const { isAnonymous, isAddedToFavorites, isAddedToCart, handleBookmarkClick, handleCartButtonClick, dispatch } = useUserSavingsHandlers(props.id);
  const [isInfoVisible, setInfoVisible] = useState<boolean>(false);
  const { isSmallScreen } = useMatchMedia();

  const { id, author, title, price } = props;

  const toggleInfoVisibility = useCallback(() => {
    setInfoVisible((prev) => !prev);
  }, []);

  const onBookmarkClick = useCallback(() => {
    handleBookmarkClick(props);
  }, [handleBookmarkClick, props]);

  const onCartButtonClick = useCallback(() => {
    handleCartButtonClick(props);
  }, [handleCartButtonClick, props]);

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

const MemoCardComponent = memo(CardComponent);

export { MemoCardComponent as Card };
