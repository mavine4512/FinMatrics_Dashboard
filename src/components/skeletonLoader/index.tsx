import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton skeleton-header"></div>
      <div className="skeleton skeleton-paragraph"></div>
      <div className="skeleton skeleton-paragraph"></div>
      <div className="skeleton skeleton-paragraph"></div>
    </div>
  );
};

export default SkeletonLoader;
