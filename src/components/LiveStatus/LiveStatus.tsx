import React from 'react';
import { Users, Car, CloudSun, Waves } from 'lucide-react';
import styles from './LiveStatus.module.css';

// Custom Parking Icon (P in a Blue Circle)
const ParkingIcon = () => (
  <div className={styles.parkingIconWrapper}>
    <span className={styles.parkingP}>P</span>
  </div>
);

const StatusCard = ({ icon: Icon, label, status, subtext, color, iconColor, isParking }: any) => (
  <div className={styles.card}>
    <div className={styles.topSection}>
      <div className={styles.iconContainer}>
        {isParking ? <ParkingIcon /> : <Icon size={32} className={styles.cardIcon} style={{ color: iconColor }} />}
      </div>
      <div className={styles.labelGroup}>
        <p className={styles.label}>{label}</p>
        <p className={styles.status} style={{ color: color }}>{status}</p>
      </div>
    </div>
    <div className={styles.footerSection}>
      <span className={styles.footerText}>{subtext}</span>
    </div>
  </div>
);

const LiveStatus: React.FC = () => {
  return (
    <section className={styles.statusContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.sectionTitle}>Live Status</h2>
        <div className={styles.grid}>
          <StatusCard 
            icon={Users} 
            label="Ghat Crowd" 
            status="Medium" 
            subtext="View All >" 
            color="#f59e0b" 
            iconColor="#3b82f6"
          />
          <StatusCard 
            icon={Car} 
            label="Traffic" 
            status="Smooth" 
            subtext="View Map >" 
            color="#10b981" 
            iconColor="#10b981"
          />
          <StatusCard 
            icon={CloudSun} 
            label="Weather" 
            status="28°C" 
            subtext="Clear" 
            color="#3b82f6" 
            iconColor="#f59e0b"
          />
          <StatusCard 
            icon={Waves} 
            label="River Level" 
            status="Normal" 
            subtext="Status >" 
            color="#3b82f6" 
            iconColor="#3b82f6"
          />
          <StatusCard 
            isParking={true}
            label="Parking" 
            status="72%" 
            subtext="Available" 
            color="#10b981" 
          />
        </div>
      </div>
    </section>
  );
};

export default LiveStatus;
