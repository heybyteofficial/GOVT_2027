import React from 'react';
import { Settings, ChevronRight, LogOut, Headphones, FileText } from 'lucide-react';
import styles from './Profile.module.css';

// Exact SVG Recreations for Pin-to-Pin Fidelity
const VerifiedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#22c55e" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#22c55e" />
    <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TempleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L14 7H10L12 3Z" fill="#b45309"/>
    <rect x="8" y="7" width="8" height="4" fill="#b45309"/>
    <rect x="6" y="11" width="12" height="6" fill="#b45309"/>
    <rect x="4" y="17" width="16" height="4" fill="#b45309"/>
  </svg>
);

const TrekIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="4" r="2" fill="#b45309"/>
    <path d="M12 7 V14" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 9 L16 13" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 9 L8 13" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 14 L9 21" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 14 L15 21" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="6" x2="18" y2="22" stroke="#b45309" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EmergencyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
    <circle cx="8" cy="12" r="2" fill="#ef4444"/>
    <line x1="12" y1="10" x2="18" y2="10" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="14" x2="16" y2="14" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Profile Card */}
      <div className={styles.profileCard}>
        <div className={styles.avatarWrapper}>
          <img src="/profile-avatar.png" alt="Venkatesh Prasad" className={styles.avatar} />
          <div className={styles.verifiedBadge}>
            <VerifiedIcon />
          </div>
        </div>
        
        <h2 className={styles.userName}>Venkatesh Prasad</h2>
        <div className={styles.userTags}>
          <span className={styles.verifiedTag}>Verified Citizen</span>
          <span className={styles.idTag}>• ID: AP-7729-102</span>
        </div>
        
        <div className={styles.statsDivider}></div>
        
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>12</span>
            <span className={styles.statLabel}>Holy Sites</span>
          </div>
          <div className={styles.statDividerVertical}></div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>03</span>
            <span className={styles.statLabel}>Active</span>
          </div>
          <div className={styles.statDividerVertical}></div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.9</span>
            <span className={styles.statLabel}>Rating</span>
          </div>
        </div>
      </div>

      {/* Pilgrimage Journey */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Pilgrimage Journey</h3>
        <button className={styles.viewAllBtn}>View All</button>
      </div>
      
      <div className={styles.activeJourney}>
        <div className={styles.progressBadge}>In Progress</div>
        <h4 className={styles.journeyTitle}>Pushkar Ghat Ritual</h4>
        <p className={styles.journeySub}>Rajahmundry • Since 4:30 AM</p>
      </div>
      
      <div className={styles.pastJourneys}>
        <div className={styles.journeyCard}>
          <div className={styles.journeyIconWrapper}>
             <TempleIcon />
          </div>
          <div className={styles.journeyInfo}>
            <span className={styles.journeyName}>Kashi Vishwanath</span>
            <span className={styles.journeyDate}>Oct 2023</span>
          </div>
        </div>
        <div className={styles.journeyCard}>
          <div className={styles.journeyIconWrapper}>
            <TrekIcon />
          </div>
          <div className={styles.journeyInfo}>
            <span className={styles.journeyName}>Tirumala Trek</span>
            <span className={styles.journeyDate}>Aug 2023</span>
          </div>
        </div>
      </div>

      {/* Settings & Support */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Settings & Support</h3>
      </div>
      
      <div className={styles.settingsList}>
        <div className={styles.settingItem}>
          <div className={styles.settingIconWrapper} style={{ backgroundColor: '#f1f5f9' }}>
            <FileText size={20} color="#334155" />
          </div>
          <span className={styles.settingLabel}>My Bookings</span>
          <ChevronRight size={20} color="#cbd5e1" className={styles.chevron} />
        </div>
        <div className={styles.settingDivider}></div>
        
        <div className={styles.settingItem}>
          <div className={styles.settingIconWrapper} style={{ backgroundColor: 'transparent' }}>
            <EmergencyIcon />
          </div>
          <span className={styles.settingLabel}>Emergency Contacts</span>
          <ChevronRight size={20} color="#cbd5e1" className={styles.chevron} />
        </div>
        <div className={styles.settingDivider}></div>
        
        <div className={styles.settingItem}>
          <div className={styles.settingIconWrapper} style={{ backgroundColor: '#fffbeb' }}>
            <Headphones size={20} color="#d97706" />
          </div>
          <span className={styles.settingLabel}>Help Desk</span>
          <ChevronRight size={20} color="#cbd5e1" className={styles.chevron} />
        </div>
        <div className={styles.settingDivider}></div>
        
        <div className={styles.settingItem}>
          <div className={styles.settingIconWrapper} style={{ backgroundColor: '#f1f5f9' }}>
            <Settings size={20} color="#334155" />
          </div>
          <span className={styles.settingLabel}>Account Settings</span>
          <ChevronRight size={20} color="#cbd5e1" className={styles.chevron} />
        </div>
      </div>

      {/* Logout */}
      <button className={styles.logoutBtn}>
        <LogOut size={20} />
        Logout Account
      </button>
    </div>
  );
};

export default Profile;
