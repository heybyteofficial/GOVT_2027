import React from 'react';
import { Users, Car, CloudSun, Waves, ParkingCircle } from 'lucide-react';
import styles from './ComingSoonGrid.module.css';

const UpdateCard = ({ icon: Icon, label, status, subtext, color, iconColor }: any) => (
  <div className={styles.card}>
    <div className={styles.iconWrapper}>
      <Icon size={28} className={styles.svgIcon} style={{ color: iconColor }} />
    </div>
    <span className={styles.label}>{label}</span>
    <span className={styles.status} style={{ color }}>{status}</span>
    <span className={styles.subtext}>{subtext}</span>
  </div>
);

const liveUpdates = [
  { id: 1, icon: Users, label: 'Ghat Crowd', status: 'Medium', subtext: 'View All >', color: '#f59e0b', iconColor: '#3b82f6' },
  { id: 2, icon: Car, label: 'Traffic', status: 'Smooth', subtext: 'View Map >', color: '#10b981', iconColor: '#10b981' },
  { id: 3, icon: CloudSun, label: 'Weather', status: '28°C', subtext: 'Clear', color: '#3b82f6', iconColor: '#f59e0b' },
  { id: 4, icon: Waves, label: 'River Level', status: 'Normal', subtext: 'Status >', color: '#3b82f6', iconColor: '#3b82f6' },
  { id: 5, icon: ParkingCircle, label: 'Parking', status: '72%', subtext: 'Available', color: '#10b981', iconColor: '#3b82f6' },
];

const ComingSoonGrid: React.FC = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Live Updates</h2>
          <span className={styles.viewAll}>Real Time</span>
        </div>

        <div className={styles.grid}>
          {liveUpdates.map((service) => (
            <UpdateCard
              key={service.id}
              icon={service.icon}
              label={service.label}
              status={service.status}
              subtext={service.subtext}
              color={service.color}
              iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonGrid;
