import React from 'react';
import { Menu, Bell, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {/* Left Section: Menu + Logo + Brand */}
        <div className={styles.leftSection}>
          <button className={styles.iconButton} aria-label="Menu">
            <Menu size={24} strokeWidth={2} />
          </button>
          
          <div className={styles.brandContainer}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/37/Emblem_of_Andhra_Pradesh.svg" 
              alt="Government of Andhra Pradesh Logo" 
              className={styles.logo}
            />
            <div className={styles.textContainer}>
              <h1 className={styles.title}>AP Pilgrim Grid</h1>
              <p className={styles.subtitle}>Government of Andhra Pradesh</p>
            </div>
          </div>
        </div>

        {/* Right Section: Notifications + Language */}
        <div className={styles.rightSection}>
          <div className={styles.notificationWrapper}>
            <button className={styles.iconButton} aria-label="Notifications">
              <Bell size={24} strokeWidth={2} />
            </button>
            <span className={styles.badge}>12</span>
          </div>

          <button className={styles.languageSelector}>
            <span className={styles.teluguText}>తెలుగు</span>
            <ChevronDown size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
