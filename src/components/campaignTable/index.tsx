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
      <div className={styles.responsiveTable}>
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
                <td data-label="Campaign">{campaign.name}</td>
                <td data-label="Impressions">{campaign.impressions}</td>
                <td data-label="Clicks">{campaign.clicks}</td>
                <td data-label="Conversions">{campaign.conversions}</td>
                <td data-label="ROI">{campaign.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
