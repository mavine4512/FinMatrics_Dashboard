import React, { useState } from 'react';
import './topNav.css';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import LogoutModal from '../logoutModal';

interface TopNavProps {
  toggleSidebar: () => void;
  isMobile: boolean;
  username: string;
}

const TopNav: React.FC<TopNavProps> = ({ toggleSidebar, isMobile, username }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    console.log('User logged out');
     setIsModalOpen(false);
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="topnav">
      <div className="logo" onClick={toggleSidebar}>
        {isMobile ? '☰' : 'MogRex'}
      </div>
      <div className="user-section">
        <FaUserCircle size={24} className="user-icon" />
        <span className="username">{username}</span>
        <button className="logout-btn" onClick={handleLogoutClick}>
          <FiLogOut size={20} className="logout-icon" />
          Logout
        </button>
      </div>
       <LogoutModal 
        isOpen={isModalOpen} 
        onClose={handleCancelLogout} 
        onConfirm={handleConfirmLogout} 
      />
    </nav>
  );
};

export default TopNav;
