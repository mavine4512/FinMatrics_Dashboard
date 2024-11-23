import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "./TransactionVolume.module.css";
import Chart from "../../constants/Chart";


const sampleData = {
  normalUsers: {
    daily: Array.from({ length: 7 }, (_, day) => ({ name: `Day ${day + 1}`, volume: Math.random() * 100 })),
    weekly: Array.from({ length: 4 }, (_, week) => ({ name: `Week ${week + 1}`, volume: Math.random() * 500 })),
    monthly: Array.from({ length: 12 }, (_, month) => ({ name: `Month ${month + 1}`, volume: Math.random() * 1000 })),
    custom: [], 
  },
  merchants: {
    daily: Array.from({ length: 7 }, (_, day) => ({ name: `Day ${day + 1}`, volume: Math.random() * 80 })),
    weekly: Array.from({ length: 4 }, (_, week) => ({ name: `Week ${week + 1}`, volume: Math.random() * 300 })),
    monthly: Array.from({ length: 12 }, (_, month) => ({ name: `Month ${month + 1}`, volume: Math.random() * 700 })),
    custom: [], 
  },
};

const TransactionVolume: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "monthly" | "custom">("daily");

  // Simulate loading of data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleTimeFrameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeFrame(event.target.value as "daily" | "weekly" | "monthly" | "custom");
  };

  const normalUserData = sampleData.normalUsers[timeFrame] || [];
  const merchantData = sampleData.merchants[timeFrame] || [];

  return (
    <div className={styles.transactionVolume}>
      <h1>Transaction Volume</h1>

      {/* Filter Section */}
      <div className={styles.filters}>
        <label htmlFor="timeFrame">Select Timeframe:</label>
        <select id="timeFrame" value={timeFrame} onChange={handleTimeFrameChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Normal User Transaction Volume Section */}
      <div className={styles.section}>
        <h2>Normal Users - Transaction Volume</h2>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={300} />
        ) : (
          <Chart data={normalUserData} chartType="line" color="#1976d2" />
        )}
      </div>

      {/* Merchant Transaction Volume Section */}
      <div className={styles.section}>
        <h2>Merchants - Transaction Volume</h2>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={300} />
        ) : (
          <Chart data={merchantData} chartType="line" color="#388e3c" />
        )}
      </div>
    </div>
  );
};

export default TransactionVolume;
