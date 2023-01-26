import React from 'react';

import { LINK_TO_GITHUB, LINK_TO_LINKED_IN, LINK_TO_TELEGRAM } from '../../constants';
import { githubIcon, linkedInIcon, telegramIcon } from '../../vendor/icons';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.copyright}>&#169; Mad Damon, 2023</div>
      <ul className={styles.socialLinks}>
        <li className={styles.socialLinksListItem}>
          <a
            className={styles.link}
            href={LINK_TO_GITHUB}
            rel="noopener noreferrer"
            target="_blank"
          >
            {githubIcon}
          </a>
        </li>
        <li className={styles.socialLinksListItem}>
          <a
            className={styles.link}
            href={LINK_TO_TELEGRAM}
            rel="noopener noreferrer"
            target="_blank"
          >
            {telegramIcon}
          </a>
        </li>
        <li className={styles.socialLinksListItem}>
          <a
            className={styles.link}
            href={LINK_TO_LINKED_IN}
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkedInIcon}
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

Footer.displayName = 'Footer';

export { Footer };
