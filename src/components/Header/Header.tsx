import React, { useState } from 'react';
import { Menu, Bell, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: 'telugu', label: 'తెలుగు' });

  const languages = [
    { code: 'telugu', label: 'తెలుగు' },
    { code: 'english', label: 'English' },
    { code: 'hindi', label: 'हिंदी' }
  ];

  const handleLanguageChange = (lang: { code: string; label: string }) => {
    setSelectedLang(lang);
    setShowDropdown(false);
  };

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

          <div className={styles.languageWrapper}>
            <button 
              className={styles.languageSelector}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className={styles.teluguText}>{selectedLang.label}</span>
              <ChevronDown 
                size={16} 
                strokeWidth={2.5} 
                className={showDropdown ? styles.rotateChevron : ''} 
              />
            </button>

            {showDropdown && (
              <div className={styles.dropdownMenu}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`${styles.dropdownItem} ${selectedLang.code === lang.code ? styles.activeItem : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
