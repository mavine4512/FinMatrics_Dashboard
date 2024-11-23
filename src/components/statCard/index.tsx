import React from 'react';
import styles from './StatCard.module.css';
import { SvgIconComponent } from '@mui/icons-material';

interface StatCardProps {
  icon: SvgIconComponent;
  label: string;
  value: number | string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, color }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.icon}>
        <Icon style={{ fontSize: '2.5rem', color: '#fff' }} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.label}>{label}</h3>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
