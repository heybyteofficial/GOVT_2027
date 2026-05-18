import React, { useState } from 'react';
import { Search, Mic, Car, Bike, Crosshair, Navigation, Zap } from 'lucide-react';
import styles from './PilgrimMap.module.css';

const StarOfLifeRed = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="4.2" y1="7.5" x2="19.8" y2="16.5" />
    <line x1="19.8" y1="7.5" x2="4.2" y2="16.5" />
  </svg>
);

const TurnRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 20v-5a4 4 0 0 1 4-4h7"></path>
    <polyline points="16 7 20 11 16 15"></polyline>
  </svg>
);

const PilgrimMap: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<'four' | 'two'>('four');

  return (
    <div className={styles.mapContainer}>
      
      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <Search size={18} color="#64748b" className={styles.searchIcon} />
        <input 
          type="text" 
          placeholder={vehicleType === 'four' ? "Search for car parking..." : "Search for bike parking..."}
          className={styles.searchInput}
        />
        <Mic size={18} color="#0f172a" className={styles.micIcon} />
      </div>

      {/* Filter Chips */}
      <div className={styles.filterChips}>
        <div 
          className={`${styles.chip} ${vehicleType === 'four' ? styles.chipActive : ''}`}
          onClick={() => setVehicleType('four')}
        >
          <Car size={16} />
          <span>Four-Wheelers</span>
        </div>
        <div 
          className={`${styles.chip} ${vehicleType === 'two' ? styles.chipActive : ''}`}
          onClick={() => setVehicleType('two')}
        >
          <Bike size={16} />
          <span>Two-Wheelers</span>
        </div>
      </div>

      {/* Map Widget */}
      <div 
        className={styles.mapWidget}
        style={{ backgroundImage: `url(${vehicleType === 'four' ? '/parking-map.png' : '/bike-map.png'})` }}
      >
        <div className={styles.mapOverlay}>
          <div className={styles.locationInfo}>
            <span className={styles.locLabel}>CURRENT LOCATION</span>
            <span className={styles.locValue}>Near Temple Gate 4</span>
          </div>
          <button className={styles.targetButton}>
            <Crosshair size={20} color="white" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>Available Parking</h3>
        <span className={styles.liveTag}>Real-time Data</span>
      </div>

      {/* Parking List */}
      <div className={styles.parkingList}>
        
        {vehicleType === 'four' ? (
          <>
            {/* Card 1 - Ghat Main Parking (Red) */}
            <div className={`${styles.parkingCard} ${styles.borderRed}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.parkingTitle}>Ghat Main Parking</h4>
                  <p className={styles.parkingSub}>250m • South Entry</p>
                </div>
                <div className={`${styles.badge} ${styles.badgeRed}`}>82% Full</div>
              </div>
              
              <div className={styles.progressRow}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFillRed} style={{ width: '82%' }}></div>
                </div>
                <span className={styles.spotsText}>18 Spots Left</span>
              </div>

              <div className={styles.cardActions}>
                <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
                  <TurnRightIcon />
                  Navigate
                </button>
              </div>
            </div>

            {/* Card 2 - Riverside Premium Lot (Orange) */}
            <div className={`${styles.parkingCard} ${styles.borderOrange}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.parkingTitle}>Riverside Premium Lot</h4>
                  <p className={styles.parkingSub}>800m • Near Food Plaza</p>
                </div>
                <div className={`${styles.badge} ${styles.badgeOrange}`}>45% Full</div>
              </div>
              
              <div className={styles.progressRow}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFillOrange} style={{ width: '45%' }}></div>
                </div>
                <span className={styles.spotsText}>55 Spots Left</span>
              </div>

              <div className={styles.cardActions}>
                <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
                  <TurnRightIcon />
                  Navigate
                </button>
                <button className={`${styles.primaryBtn} ${styles.btnOrange}`}>
                  <Zap size={16} />
                  Reserve Spot
                </button>
              </div>
            </div>

            {/* Card 3 - North Pilgrim Hub (Green) */}
            <div className={`${styles.parkingCard} ${styles.borderGreen}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.parkingTitle}>North Pilgrim Hub</h4>
                  <p className={styles.parkingSub}>1.2km • Shuttle Available</p>
                </div>
                <div className={`${styles.badge} ${styles.badgeGreen}`}>12% Full</div>
              </div>
              
              <div className={styles.progressRow}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFillGreen} style={{ width: '12%' }}></div>
                </div>
                <span className={styles.spotsText}>140 Spots Left</span>
              </div>

              <div className={styles.cardActions}>
                <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
                  <TurnRightIcon />
                  Navigate
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Card 1 - East Gate Bike Hub (Green) */}
            <div className={`${styles.parkingCard} ${styles.borderGreen}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.parkingTitle}>East Gate Bike Hub</h4>
                  <p className={styles.parkingSub}>150m • Main Entrance</p>
                </div>
                <div className={`${styles.badge} ${styles.badgeGreen}`}>15% Full</div>
              </div>
              
              <div className={styles.progressRow}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFillGreen} style={{ width: '15%' }}></div>
                </div>
                <span className={styles.spotsText}>350 Spots Left</span>
              </div>

              <div className={styles.cardActions}>
                <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
                  <TurnRightIcon />
                  Navigate
                </button>
              </div>
            </div>

            {/* Card 2 - Riverfront Two-Wheeler Lot (Orange) */}
            <div className={`${styles.parkingCard} ${styles.borderOrange}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.parkingTitle}>Riverfront Bike Lot</h4>
                  <p className={styles.parkingSub}>600m • Near Ghats</p>
                </div>
                <div className={`${styles.badge} ${styles.badgeOrange}`}>60% Full</div>
              </div>
              
              <div className={styles.progressRow}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFillOrange} style={{ width: '60%' }}></div>
                </div>
                <span className={styles.spotsText}>120 Spots Left</span>
              </div>

              <div className={styles.cardActions}>
                <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
                  <TurnRightIcon />
                  Navigate
                </button>
                <button className={`${styles.primaryBtn} ${styles.btnOrange}`}>
                  <Zap size={16} />
                  Reserve Spot
                </button>
              </div>
            </div>

            {/* Card 3 - VIP Temple Entrance Bikes (Red) */}
            <div className={`${styles.parkingCard} ${styles.borderRed}`}>
              <div className={styles.cardHeader}>
                <div>
                  <h4 className={styles.parkingTitle}>VIP Temple Bikes</h4>
                  <p className={styles.parkingSub}>50m • Premium Access</p>
                </div>
                <div className={`${styles.badge} ${styles.badgeRed}`}>95% Full</div>
              </div>
              
              <div className={styles.progressRow}>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFillRed} style={{ width: '95%' }}></div>
                </div>
                <span className={styles.spotsText}>8 Spots Left</span>
              </div>

              <div className={styles.cardActions}>
                <button className={`${styles.primaryBtn} ${styles.btnNavy}`}>
                  <TurnRightIcon />
                  Navigate
                </button>
              </div>
            </div>
          </>
        )}

      </div>

      {/* Emergency Assistance Footer */}
      <div className={styles.emergencyCard}>
        <div className={styles.emergencyContent}>
          <StarOfLifeRed />
          <div className={styles.emergencyText}>
            <span className={styles.emergencyTitle}>Emergency Assistance</span>
            <span className={styles.emergencySub}>Instant SOS reporting available</span>
          </div>
        </div>
        <button className={styles.emergencyBtn}>GET HELP</button>
      </div>

    </div>
  );
};

export default PilgrimMap;
