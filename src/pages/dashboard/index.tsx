import React, { useEffect, useState } from 'react';
import StatCard from '../../components/statCard';
import GraphSection from '../../components/graphSection';
import CampaignTable from '../../components/campaignTable';
import Filters from '../../components/filters';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Skeleton } from '@mui/material';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [timeFrame, setTimeFrame] = useState<'daily' | 'weekly' | 'monthly' | 'custom'>('daily');

  const handleFilterChange = (filter: 'daily' | 'weekly' | 'monthly' | 'custom') => {
    setTimeFrame(filter);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={styles.dashboard}>
      <Filters currentFilter={timeFrame} onChangeFilter={handleFilterChange} />
      
      <div className={styles.stats}>
        {loading ? (
          <>
            <Skeleton variant="rectangular" width="100%" height={80} />
            <Skeleton variant="rectangular" width="100%" height={80} />
            <Skeleton variant="rectangular" width="100%" height={80} />
          </>
        ) : (
          <>
            <StatCard icon={PeopleIcon} label="Total Users" value={1550} color="#1976d2" />
            <StatCard icon={TrendingUpIcon} label="New Acquisitions" value={120} color="#388e3c" />
            <StatCard icon={StorefrontIcon} label="Campaign ROI" value="18.5%" color="#d32f2f" />
          </>
        )}
      </div>
      
     {loading ? (
        <Skeleton variant="rectangular" width="100%" height={400} />
      ) : (
        <GraphSection timeFrame={timeFrame} loading={loading} />
      )}

      {/* Campaign Table */}
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={400} />
      ) : (
        <CampaignTable />
      )}
    </div>
  );
};

export default Dashboard;
