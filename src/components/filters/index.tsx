import React from 'react';
import styles from './Filters.module.css';

interface FiltersProps {
  currentFilter: 'daily' | 'weekly' | 'monthly' | 'custom';
  onChangeFilter: (filter: 'daily' | 'weekly' | 'monthly' | 'custom') => void;
}

const Filters: React.FC<FiltersProps> = ({ currentFilter, onChangeFilter }) => {
  return (
    <div className={styles.filters}>
      {['daily', 'weekly', 'monthly', 'custom'].map((filter) => (
        <button
          key={filter}
          className={`${styles.filterButton} ${
            currentFilter === filter ? styles.active : ''
          }`}
          onClick={() => onChangeFilter(filter as 'daily' | 'weekly' | 'monthly' | 'custom')}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filters;
