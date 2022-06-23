import React from 'react';

export const Loader: React.FC = () => (
  <div className="text-center text-info">
    <div className="spinner-border" role="status" style={{ 'width': '4rem', 'height': '4rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
