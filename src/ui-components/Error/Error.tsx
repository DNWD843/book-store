import classNames from 'classnames';
import React, { memo } from 'react';

import { TErrorProps } from './Error.props';

import styles from './Error.module.css';

const Error:React.FC<TErrorProps> = ({ error = '', className }) => (
  <span className={classNames(className, styles.error)}>{error}</span>
);

Error.displayName = 'Error';

const MemoError = memo(Error);

export { MemoError as Error };
