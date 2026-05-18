import React from 'react';
import { Phone, Map, Navigation, MapPin, Clock, Info, CornerUpRight, Compass, Navigation2 } from 'lucide-react';
import styles from './Updates.module.css';

// SVG Icons
const StarOfLifeRed = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="3.34" y1="7" x2="20.66" y2="17" />
    <line x1="20.66" y1="7" x2="3.34" y2="17" />
  </svg>
);

const MedicalCampIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L2 12h3v8h14v-8h3L12 3z"/>
    <path d="M12 9v6"/>
    <path d="M9 12h6"/>
  </svg>
);

const AmbulanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
    <path d="M15 18H9"/>
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
    <circle cx="17" cy="18" r="2"/>
    <circle cx="7" cy="18" r="2"/>
    <path d="M12 6v6"/>
    <path d="M9 9h6"/>
  </svg>
);

const FirstAidIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14"/>
    <path d="M5 12h14"/>
  </svg>
);

const Updates: React.FC = () => {
  return (
    <div className={styles.updatesContainer}>
      
      {/* Emergency SOS Card */}
      <div className={styles.sosCard}>
        <div className={styles.sosIconWrapper}>
          <StarOfLifeRed />
        </div>
        <h2 className={styles.sosTitle}>EMERGENCY SOS</h2>
        <p className={styles.sosSub}>Press for immediate medical assistance & crowd support</p>
        <button className={styles.sosButton}>ACTIVATE EMERGENCY SIGNAL</button>
      </div>

      {/* Filter Chips */}
      <div className={styles.chipsContainer}>
        <div className={`${styles.chip} ${styles.chipActive}`}>
          <MedicalCampIcon />
          <span>Medical Camps</span>
        </div>
        <div className={styles.chip}>
          <FirstAidIcon />
          <span>First Aid</span>
        </div>
        <div className={styles.chip}>
          <AmbulanceIcon />
          <span>Ambulances</span>
        </div>
      </div>

      {/* Title */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Nearby Medical Support</h3>
        <span className={styles.liveBadge}>LIVE UPDATES</span>
      </div>

      {/* Cards List */}
      <div className={styles.cardsList}>
        
        {/* Card 1 */}
        <div className={styles.supportCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconWrapper} style={{ backgroundColor: '#fef3c7' }}>
              <MedicalCampIcon />
            </div>
            <div className={styles.cardTitleArea}>
              <h4 className={styles.cardTitle}>Govt. Medical Camp Alpha</h4>
              <p className={styles.cardSub}>Central Plaza, Sector 4</p>
            </div>
            <div className={styles.greenBadge}>
              3 DOCTORS AVAILABLE
            </div>
          </div>
          
          <div className={styles.cardDetails}>
            <div className={styles.detailItem}>
              <MapPin size={14} color="#64748b" />
              <span>450m away</span>
            </div>
            <div className={styles.detailItem} style={{ color: '#d97706' }}>
              <Clock size={14} color="#d97706" />
              <span style={{ fontWeight: 700 }}>Queue: 5 mins</span>
            </div>
          </div>

          <div className={styles.cardActions}>
            <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
              <Phone size={16} />
              Call Now
            </button>
            <button className={styles.secondaryBtn}>
              <CornerUpRight size={18} color="#334155" />
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.supportCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconWrapper} style={{ backgroundColor: '#eff6ff' }}>
              <AmbulanceIcon />
            </div>
            <div className={styles.cardTitleArea}>
              <h4 className={styles.cardTitle}>Ambulance Point 04</h4>
              <p className={styles.cardSub}>West Gate Entry</p>
            </div>
          </div>
          
          <div className={styles.cardDetails}>
            <div className={styles.detailItem}>
              <MapPin size={14} color="#64748b" />
              <span>1.2km away</span>
            </div>
            <div className={styles.detailItem} style={{ color: '#dc2626' }}>
              <span style={{ fontSize: '14px', fontWeight: 900, marginRight: '2px' }}>*</span>
              <span style={{ fontWeight: 700 }}>Priority High</span>
            </div>
          </div>

          <div className={styles.cardActions}>
            <button className={`${styles.primaryBtn} ${styles.btnRed}`}>
              <Phone size={16} />
              Dispatch Hub
            </button>
            <button className={styles.secondaryBtn}>
              <Map size={18} color="#334155" />
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.supportCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIconWrapper} style={{ backgroundColor: '#dcfce7' }}>
              <FirstAidIcon />
            </div>
            <div className={styles.cardTitleArea}>
              <h4 className={styles.cardTitle}>First Aid Post B7</h4>
              <p className={styles.cardSub}>Near Drinking Water Point</p>
            </div>
          </div>
          
          <div className={styles.cardDetails}>
            <div className={styles.detailItem}>
              <MapPin size={14} color="#64748b" />
              <span>200m away</span>
            </div>
            <div className={styles.detailItem} style={{ color: '#16a34a' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span style={{ fontWeight: 700 }}>No Wait</span>
            </div>
          </div>

          <div className={styles.cardActions}>
            <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
              <Phone size={16} />
              Contact
            </button>
            <button className={styles.secondaryBtn}>
              <Navigation2 size={18} color="#334155" />
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Map Banner */}
      <div className={styles.mapBanner}>
        <button className={styles.mapButton}>
          <Compass size={18} />
          Open Interactive Map
        </button>
      </div>

      {/* Pro Pilgrim Tip */}
      <div className={styles.tipCard}>
        <div className={styles.tipIcon}>
          <Info size={18} color="#3b82f6" />
        </div>
        <div className={styles.tipContent}>
          <h5 className={styles.tipTitle}>PRO PILGRIM TIP</h5>
          <p className={styles.tipText}>
            In case of heatstroke or dehydration, please visit the nearest First Aid Post. All services for pilgrims are free under the AP Pilgrim Grid scheme.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Updates;
