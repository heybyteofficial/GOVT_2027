import React from 'react';
import styles from './QuickServices.module.css';

// Exact SVG Recreations for Pin-to-Pin Fidelity
const Icons = {
  Ghat: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <path d="M12 2L15 5H9L12 2Z" fill="#9333ea"/>
      <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V21H5V12Z" fill="#9333ea"/>
      <rect x="10" y="14" width="4" height="7" fill="white" opacity="0.3"/>
    </svg>
  ),
  Transport: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect x="4" y="6" width="16" height="12" rx="2" fill="#10b981"/>
      <rect x="6" y="8" width="12" height="5" rx="1" fill="white" opacity="0.4"/>
      <circle cx="7" cy="15" r="1.5" fill="white"/>
      <circle cx="17" cy="15" r="1.5" fill="white"/>
      <rect x="6" y="18" width="3" height="2" fill="#10b981"/>
      <rect x="15" y="18" width="3" height="2" fill="#10b981"/>
    </svg>
  ),
  Parking: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="12" r="11" fill="#3b82f6"/>
      <path d="M9 7H13.5C15.433 7 17 8.567 17 10.5C17 12.433 15.433 14 13.5 14H11V18H9V7ZM11 12H13.5C14.3284 12 15 11.3284 15 10.5C15 9.67157 14.3284 9 13.5 9H11V12Z" fill="white"/>
    </svg>
  ),
  SOS: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="12" r="11" fill="#ef4444"/>
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="7" fontWeight="900" fontFamily="sans-serif">SOS</text>
    </svg>
  ),
  Food: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="12" r="11" fill="#f59e0b"/>
      <path d="M9 7V11M7.5 7V10C7.5 10.8284 8.17157 11.5 9 11.5V17H10V11.5C10.8284 11.5 11.5 10.8284 11.5 10V7M15 7V17H16V7M14 7H15C16.1046 7 17 7.89543 17 9V12C17 13.1046 16.1046 14 15 14H14V7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Medical: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect x="4" y="8" width="16" height="12" rx="3" fill="#2563eb"/>
      <path d="M9 8V6C9 4.89543 9.89543 4 11 4H13C14.1046 4 15 4.89543 15 6V8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 11V17M9 14H15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  TempleQueue: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <path d="M12 3L14 6H10L12 3Z" fill="#be185d"/>
      <rect x="8" y="6" width="8" height="4" fill="#be185d"/>
      <rect x="6" y="10" width="12" height="5" fill="#be185d"/>
      <rect x="4" y="15" width="16" height="6" fill="#be185d"/>
    </svg>
  ),
  Toilets: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <path d="M7 6V14C7 16.2091 8.79086 18 11 18H13V6H7Z" fill="#3b82f6"/>
      <rect x="14" y="4" width="3" height="16" rx="1" fill="#3b82f6"/>
      <path d="M7 10H5V13H7V10Z" fill="#3b82f6"/>
    </svg>
  ),
  Accommodation: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect x="4" y="12" width="16" height="4" rx="1" fill="#10b981"/>
      <rect x="4" y="10" width="4" height="2" rx="1" fill="#10b981"/>
      <circle cx="7" cy="8" r="2" fill="#10b981"/>
      <rect x="4" y="16" width="2" height="4" fill="#10b981"/>
      <rect x="18" y="16" width="2" height="4" fill="#10b981"/>
    </svg>
  ),
  LostFound: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="12" r="11" fill="#ea580c"/>
      <circle cx="11" cy="10" r="3" fill="white"/>
      <path d="M7 16C7 13.7909 8.79086 12 11 12H11C13.2091 12 15 13.7909 15 16V17H7V16Z" fill="white"/>
      <circle cx="16" cy="16" r="3" stroke="white" strokeWidth="1.5" fill="#ea580c"/>
      <line x1="18.5" y1="18.5" x2="20.5" y2="20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

const services = [
  { id: 1, label: 'Find Nearby Ghat', icon: Icons.Ghat },
  { id: 2, label: 'Live Transport', icon: Icons.Transport },
  { id: 3, label: 'Parking Finder', icon: Icons.Parking },
  { id: 4, label: 'Emergency SOS', icon: Icons.SOS },
  { id: 5, label: 'Food & Water', icon: Icons.Food },
  { id: 6, label: 'Medical Help', icon: Icons.Medical },
  { id: 7, label: 'Temple Queue', icon: Icons.TempleQueue },
  { id: 8, label: 'Toilets', icon: Icons.Toilets },
  { id: 9, label: 'Accommodation', icon: Icons.Accommodation },
  { id: 10, label: 'Lost & Found', icon: Icons.LostFound },
];

const QuickServices: React.FC = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Quick Services</h2>
          <button className={styles.viewAll}>View All &gt;</button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <service.icon />
              </div>
              <span className={styles.label}>{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
