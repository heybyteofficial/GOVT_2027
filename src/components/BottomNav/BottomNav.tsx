import React from 'react';
import { Home, Map as MapIcon, Bell, User } from 'lucide-react';
import styles from './BottomNav.module.css';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        {/* Home */}
        <div 
          className={`${styles.navItem} ${activeTab === 'home' ? styles.active : ''}`}
          onClick={() => onTabChange('home')}
        >
          <Home size={24} className={styles.icon} />
          <span className={styles.label}>Home</span>
        </div>

        {/* Map */}
        <div 
          className={`${styles.navItem} ${activeTab === 'map' ? styles.active : ''}`}
          onClick={() => onTabChange('map')}
        >
          <MapIcon size={24} className={styles.icon} />
          <span className={styles.label}>Map</span>
        </div>

        {/* Emergency Button */}
        <div className={styles.centerLogoWrapper} onClick={() => onTabChange('emergency')} style={{cursor: 'pointer'}}>
          <div className={styles.emergencyCircle}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L1 21H23L12 2Z" fill="white" />
              <path d="M12 8V14" stroke="#a30000" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="12" cy="17" r="1.2" fill="#a30000" />
            </svg>
            <span className={styles.emergencyText}>EMERGENCY</span>
          </div>
        </div>

        {/* Updates */}
        <div 
          className={`${styles.navItem} ${activeTab === 'updates' ? styles.active : ''}`}
          onClick={() => onTabChange('updates')}
        >
          <Bell size={24} className={styles.icon} />
          <span className={styles.label}>Updates</span>
        </div>

        {/* Profile */}
        <div 
          className={`${styles.navItem} ${activeTab === 'profile' ? styles.active : ''}`}
          onClick={() => onTabChange('profile')}
        >
          <User size={24} className={styles.icon} />
          <span className={styles.label}>Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
