import React from 'react';
import Chart from '../../constants/Chart';

interface GraphSectionProps {
  timeFrame: 'daily' | 'weekly' | 'monthly' | 'custom';
  loading: boolean;
}

const sampleData = {
  daily: Array.from({ length: 7 }, (_, day) => ({ name: `Day ${day + 1}`, volume: Math.random() * 100 })),
  weekly: Array.from({ length: 4 }, (_, week) => ({ name: `Week ${week + 1}`, volume: Math.random() * 500 })),
  monthly: Array.from({ length: 12 }, (_, month) => ({ name: `Month ${month + 1}`, volume: Math.random() * 1000 })),
};

const GraphSection: React.FC<GraphSectionProps> = ({ timeFrame, loading }) => {
  const data = timeFrame === "custom" ? [] : sampleData[timeFrame];

  if (loading) {
    return <div style={{ height: '300px' }} />;
  }

  return (
    <Chart data={data} chartType="line" color="#8884d8" />
  );
};

export default GraphSection;
