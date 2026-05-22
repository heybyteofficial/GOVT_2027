import React from 'react';
import { MapPin, ChevronDown, Sun, Waves, Megaphone, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Left Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>Welcome Pilgrim</h1>
          <p className={styles.subtitle}>
            Plan your holy journey<br />
            Stay safe, stay blessed
          </p>
          
          <div className={styles.locationPill}>
            <MapPin size={18} className={styles.pinIcon} />
            <span className={styles.locationText}>Rajahmundry, Andhra Pradesh</span>
            <ChevronDown size={18} className={styles.chevronIcon} />
          </div>
        </div>

        {/* Combined Right Floating Card */}
        <div className={styles.floatingContainer}>
          <div className={styles.combinedCard}>
            <div className={styles.cardSection}>
              <Sun className={styles.weatherIcon} size={32} />
              <div className={styles.infoGroup}>
                <span className={styles.mainValue}>28°C</span>
                <span className={styles.subValue}>Sunny</span>
              </div>
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={styles.cardSection}>
              <Waves className={styles.riverIcon} size={32} />
              <div className={styles.infoGroup}>
                <span className={styles.subLabel}>Godavari River</span>
                <span className={styles.mainValue}>Normal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Action Banner */}
        <div className={styles.crowdBanner}>
          <div className={styles.bannerContent}>
            <div className={styles.megaphoneCircle}>
              <Megaphone size={20} className={styles.megaphoneIcon} />
            </div>
            <div className={styles.bannerText}>
              <p>Pushkar Ghat is</p>
              <p className={styles.crowdStatus}>Medium Crowded</p>
            </div>
            <ArrowRight size={20} className={styles.arrowIcon} />
          </div>
        </div>

        {/* Leader avatars (top-right) */}
        <div className={styles.leadersWrapper}>
          {[
            '/assets/leaders_backup_20260521_180023/leader1.jpg',
            '/assets/leaders_backup_20260521_180023/leader2.webp',
            '/assets/leaders_backup_20260521_180023/leader3.jpg',
            '/assets/leaders_backup_20260521_180023/Screenshot%202026-05-22%20161502.png',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`leader-${i + 1}`}
              className={styles.leaderAvatar}
              onError={(e:any) => { e.currentTarget.style.display = 'none'; }}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Background Image */}
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
};

export default Hero;
