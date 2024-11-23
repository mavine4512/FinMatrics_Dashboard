import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import styles from "./MerchantTracker.module.css";
import Chart from "../../constants/Chart";

// Sample data for merchants
const sampleData = {
  merchants: {
    daily: Array.from({ length: 7 }, (_, day) => ({
      name: `Day ${day + 1}`,
      volume: Math.random() * 300,
      engagement: Math.random() * 100,
    })),
    weekly: Array.from({ length: 4 }, (_, week) => ({
      name: `Week ${week + 1}`,
      volume: Math.random() * 1200,
      engagement: Math.random() * 100,
    })),
    monthly: Array.from({ length: 12 }, (_, month) => ({
      name: `Month ${month + 1}`,
      volume: Math.random() * 3000,
      engagement: Math.random() * 100,
    })),
    custom: [],
  },
};

const MerchantTracker: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "monthly" | "custom">("daily");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const handleTimeFrameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeFrame(event.target.value as "daily" | "weekly" | "monthly" | "custom");
  };

  const merchantData = sampleData.merchants[timeFrame] || [];

  return (
    <div className={styles.merchantTracker}>
      <h1>Merchant Acquisition Tracker</h1>

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

      {/* Merchant Acquisition Volume Graph */}
      <div className={styles.section}>
        <h2>Merchant Transaction Volume</h2>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={300} />
        ) : (
           <Chart data={merchantData} chartType="line" color="#388e3c"/>
        )}
      </div>

      {/* Merchant Insights Section */}
      <div className={styles.section}>
        <h2>Merchant Insights</h2>
        {loading ? (
          <div>
            <Skeleton width="100%" height={30} />
            <Skeleton width="60%" height={30} />
            <Skeleton width="40%" height={30} />
          </div>
        ) : (
          <div className={styles.insights}>
            <p>Engagement Level: {(Math.random() * 100).toFixed(2)}%</p>
            <p>Average Transactions: {Math.floor(Math.random() * 500)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantTracker;
