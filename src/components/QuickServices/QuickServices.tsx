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
  Ambulance: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect x="3" y="10" width="14" height="8" rx="1.5" fill="#ef4444"/>
      <path d="M17 12 L21 12 L21 18 L17 18 Z" fill="#ef4444" opacity="0.8"/>
      <path d="M10 12 V16 M8 14 H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="6" cy="18" r="2" fill="#1e293b"/>
      <circle cx="16" cy="18" r="2" fill="#1e293b"/>
    </svg>
  ),
  MedicalHelp: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="12" r="11" fill="#10b981"/>
      <path d="M12 7 V17 M7 12 H17" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  ),
  LostFound: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect x="4" y="9" width="13" height="10" rx="2" fill="#ea580c"/>
      <circle cx="15" cy="9" r="3.5" fill="none" stroke="#ea580c" strokeWidth="2"/>
      <line x1="17.5" y1="11.5" x2="20.5" y2="14.5" stroke="#ea580c" strokeWidth="2.5"/>
      <path d="M8 14 H13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  MissingChild: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="12" r="11" fill="#ec4899"/>
      <circle cx="10" cy="9" r="2" fill="white"/>
      <path d="M7 15 C7 13.5 8.5 13 10 13 C11.5 13 13 13.5 13 15" fill="white"/>
      <circle cx="15" cy="15" r="3" stroke="white" strokeWidth="1.5" fill="#ec4899"/>
      <line x1="17.5" y1="17.5" x2="20.5" y2="20.5" stroke="white" strokeWidth="1.5"/>
    </svg>
  ),
  Hospitals: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect x="6" y="6" width="12" height="14" rx="2" fill="#2563eb"/>
      <rect x="10" y="6" width="4" height="14" fill="white" opacity="0.3"/>
      <path d="M12 10 V14 M10 12 H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Police: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <path d="M12 2 C12 2 19 3 19 10 C19 16 12 21 12 21 C12 21 5 16 5 10 C5 3 12 2 12 2 Z" fill="#1e3a8a"/>
      <polygon points="12,6 13.5,9.5 17,10 14.5,12.5 15,16 12,14.5 9,16 9.5,12.5 7,10 10.5,9.5" fill="#fbbf24"/>
    </svg>
  ),
};

const services = [
  { id: 1, label: 'Find Nearby Ghat', icon: Icons.Ghat },
  { id: 2, label: 'Live Transport', icon: Icons.Transport },
  { id: 3, label: 'Parking Finder', icon: Icons.Parking },
  { id: 5, label: 'Food & Water', icon: Icons.Food },
  { id: 7, label: 'Temple Queue', icon: Icons.TempleQueue },
  { id: 8, label: 'Toilets', icon: Icons.Toilets },
  { id: 9, label: 'Accommodation', icon: Icons.Accommodation },
];

interface QuickServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const QuickServices: React.FC<QuickServicesProps> = ({ onSelectService }) => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Quick Services</h2>
          <button className={styles.viewAll}>View All &gt;</button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div 
              key={service.id} 
              className={styles.card}
              onClick={() => {
                if (service.id === 1 && onSelectService) {
                  onSelectService('ghat-recommendation');
                } else if (service.id === 2 && onSelectService) {
                  onSelectService('live-transport');
                } else if (service.id === 3 && onSelectService) {
                  onSelectService('parking-finder');
                } else if (service.id === 5 && onSelectService) {
                  onSelectService('food-water');
                } else if (service.id === 8 && onSelectService) {
                  onSelectService('toilets');
                } else if (service.id === 9 && onSelectService) {
                  onSelectService('transit-camps');
                }
              }}
              style={(service.id === 1 || service.id === 2 || service.id === 3 || service.id === 5 || service.id === 8 || service.id === 9) ? { cursor: 'pointer' } : undefined}
            >
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
