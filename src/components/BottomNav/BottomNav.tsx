import React from 'react';
import { Home, Map as MapIcon, Bell, User } from 'lucide-react';
import styles from './BottomNav.module.css';

const BottomNav: React.FC = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>
        {/* Home */}
        <div className={`${styles.navItem} ${styles.active}`}>
          <Home size={24} className={styles.icon} />
          <span className={styles.label}>Home</span>
        </div>

        {/* Map */}
        <div className={styles.navItem}>
          <MapIcon size={24} className={styles.icon} />
          <span className={styles.label}>Map</span>
        </div>

        {/* Center Logo */}
        <div className={styles.centerLogoWrapper}>
          <div className={styles.logoCircle}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/Emblem_of_Andhra_Pradesh.svg" 
              alt="AP Emblem" 
              className={styles.centerLogo}
            />
          </div>
        </div>

        {/* Updates */}
        <div className={styles.navItem}>
          <Bell size={24} className={styles.icon} />
          <span className={styles.label}>Updates</span>
        </div>

        {/* Profile */}
        <div className={styles.navItem}>
          <User size={24} className={styles.icon} />
          <span className={styles.label}>Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
