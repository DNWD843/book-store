import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { footer } = styles;
  return (
    <footer className={footer}>
      FOOTER
    </footer>
  );
};

Footer.displayName = 'Footer';

export { Footer };
