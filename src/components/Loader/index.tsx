import React from 'react';

import styles from './Loader.module.css';

export const Loader: React.FC = () => (
  <div className={styles.container}>
    <div className={`text-center text-secondary ${styles.loader}`}>
      <div className="spinner-border" role="status" style={{ 'width': '4rem', 'height': '4rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);
