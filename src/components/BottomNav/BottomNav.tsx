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

        {/* Center Logo */}
        <div className={styles.centerLogoWrapper} onClick={() => onTabChange('home')} style={{cursor: 'pointer'}}>
          <div className={styles.logoCircle}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/Emblem_of_Andhra_Pradesh.svg" 
              alt="AP Emblem" 
              className={styles.centerLogo}
            />
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
