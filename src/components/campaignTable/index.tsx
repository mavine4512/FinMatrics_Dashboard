import React from 'react';
import styles from './CampaignTable.module.css';

const campaigns = [
  { name: 'Campaign A', impressions: 10000, clicks: 2500, conversions: 500, roi: '20%' },
  { name: 'Campaign B', impressions: 15000, clicks: 3200, conversions: 750, roi: '25%' },
];

const CampaignTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <h3>Top Performing Campaigns</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>Conversions</th>
            <th>ROI</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign, index) => (
            <tr key={index}>
              <td>{campaign.name}</td>
              <td>{campaign.impressions}</td>
              <td>{campaign.clicks}</td>
              <td>{campaign.conversions}</td>
              <td>{campaign.roi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
