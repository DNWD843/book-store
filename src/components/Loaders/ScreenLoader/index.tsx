import React from 'react';

import { ContentLoader } from '../ContentLoader';

export const ScreenLoader: React.FC = () => (
  <div style={{ height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2000 }}
  >
    <ContentLoader />
  </div>
);
