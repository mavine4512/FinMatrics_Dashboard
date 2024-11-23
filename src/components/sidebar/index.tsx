import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaMoneyBillWave, FaStore ,FaTachometerAlt} from 'react-icons/fa'; 
import { Paths } from '../../enums';
import './sidebar.css'; 

interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  username: string;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, isMobile, toggleSidebar, username }) => {
  const [activeItem, setActiveItem] = useState<string>(Paths.DASHBOARD);

  const handleItemClick = (path: string) => {
    setActiveItem(path);
    isMobile && toggleSidebar()
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2 className="logo">{username}</h2>
        {isMobile && (
          <button className="close-btn" onClick={toggleSidebar}>
            ✖
          </button>
        )}
      </div>

      <div className="sidebar-menu">
        <Link
          to={Paths.DASHBOARD}
          className={`sidebar-item ${activeItem === Paths.DASHBOARD ? 'active' : ''}`}
          onClick={() => handleItemClick(Paths.DASHBOARD)}
        >
          <FaTachometerAlt/>Dashboard
        </Link>
        <Link
          to={Paths.USERACQUISITION}
          className={`sidebar-item ${activeItem === Paths.USERACQUISITION ? 'active' : ''}`}
          onClick={() => handleItemClick(Paths.USERACQUISITION)}
        >
          <FaUsers /> User Acquisitions
        </Link>
        <Link
          to={Paths.TRANSACTIONVALUME}
          className={`sidebar-item ${activeItem === Paths.TRANSACTIONVALUME ? 'active' : ''}`}
          onClick={() => handleItemClick(Paths.TRANSACTIONVALUME)}
        >
          <FaMoneyBillWave /> Transaction Volume
        </Link>
        <Link
          to={Paths.MERCHANTTRACKER}  // This will navigate to the Merchant Tracker screen
          className={`sidebar-item ${activeItem === '/merchant-tracker' ? 'active' : ''}`}
          onClick={() => handleItemClick('/merchant-tracker')}
        >
          <FaStore /> Merchant Tracker
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
