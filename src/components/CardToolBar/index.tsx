import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TBookInfo } from '../../types';

import { CardToolBar } from './CardToolBar';

import styles from './CardToolBar.module.css';

const CardToolBarComponent: React.FC<TBookInfo> = (props) => {
  const { id, author, title, price } = props;
  const navigate = useNavigate();
  const mouseOverRef = useRef<boolean>(false);
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    mouseOverRef.current = true;
    const timerId = setTimeout(() => {
      if (mouseOverRef.current) {
        setVisible(true);
      }
      clearTimeout(timerId);
    }, 400);
  };

  const hideTooltip = () => {
    if (mouseOverRef.current) {
      mouseOverRef.current = false;
      setVisible(false);
    }
  };

  const onBookClick = (bookId: TBookInfo['id']) => () => {
    navigate(String(bookId));
  };

  // TODO: затипизировать evt
  const onBookmarkClick = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const onCartButtonClick = (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  return (
    <CardToolBar
      author={author}
      className={classNames({ [styles.isVisible]: visible })}
      price={price}
      title={title}
      onBookCardClick={onBookClick(id)}
      onBookmarkButtonClick={onBookmarkClick}
      onCartButtonClick={onCartButtonClick}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    />
  );
};

CardToolBarComponent.displayName = 'CardToolBarComponent';

export { CardToolBarComponent as CardToolBar };
