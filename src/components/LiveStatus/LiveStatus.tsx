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
        <h2 className={styles.sectionTitle}>Upcoming Services</h2>
        <div className={styles.grid}>
          <StatusCard
            icon={Users}
            label="Volunteer Registration"
            status="Open"
            subtext="Register >"
            color="#10b981"
            iconColor="#3b82f6"
          />
          <StatusCard
            icon={Users}
            label="Priests' Registration"
            status="Open"
            subtext="Register >"
            color="#10b981"
            iconColor="#3b82f6"
          />
          <StatusCard
            icon={Car}
            label="Registration of Hotels"
            status="Open"
            subtext="Register >"
            color="#10b981"
            iconColor="#10b981"
          />
          <StatusCard
            icon={CloudSun}
            label="Ritual Prices"
            status="View"
            subtext="Details >"
            color="#3b82f6"
            iconColor="#f59e0b"
          />
          <StatusCard
            icon={Waves}
            label="Cultural Activities"
            status="See Locations"
            subtext="View Map >"
            color="#3b82f6"
            iconColor="#3b82f6"
          />
          <StatusCard
            icon={Users}
            label="More Upcoming Services"
            status="See All"
            subtext="Explore >"
            color="#6b7280"
            iconColor="#6b7280"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveStatus;
