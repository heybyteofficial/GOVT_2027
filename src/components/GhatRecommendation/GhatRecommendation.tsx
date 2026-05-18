import React from 'react';
import { ArrowLeft, Brain, Compass, ShieldAlert, Cpu, Navigation } from 'lucide-react';
import styles from './GhatRecommendation.module.css';

interface GhatRecommendationProps {
  onBack: () => void;
}

const GhatRecommendation: React.FC<GhatRecommendationProps> = ({ onBack }) => {
  return (
    <div className={styles.pageContainer}>
      
      {/* Back Button */}
      <button className={styles.backButton} onClick={onBack}>
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </button>

      {/* Main Header */}
      <div className={styles.header}>
        <div className={styles.badgeWrapper}>
          <Brain size={16} className={styles.brainIcon} />
          <span className={styles.aiBadge}>AI ENGINE ACTIVE</span>
        </div>
        <h1 className={styles.title}>AI Ghat Recommendation</h1>
        <p className={styles.subtitle}>
          "We don't just show pilgrims where the crowds are — we tell them exactly where to go."
        </p>
      </div>

      {/* Interactive AI Recommendation Alert (Matches Ref Image) */}
      <div className={styles.alertCard}>
        <div className={styles.alertHeader}>
          <div className={styles.alertHeaderLeft}>
            <ShieldAlert size={20} color="#dc2626" />
            <h3 className={styles.alertTitle}>AI Redirection Alert</h3>
          </div>
          <span className={styles.liveIndicator}>CRITICAL CROWD</span>
        </div>

        <div className={styles.alertContent}>
          <div className={styles.alertLineRed}>
            <span className={styles.alertIcon}>🚨</span>
            <p className={styles.alertText}>
              <strong>Pushkara Ghat</strong> is <span className={styles.redText}>92% crowded</span> right now.
            </p>
          </div>
          
          <div className={styles.alertLineGreen}>
            <span className={styles.alertIcon}>✅</span>
            <p className={styles.alertText}>
              <strong>Saraswati Ghat</strong> is safer — <span className={styles.greenText}>only 12 mins away</span> and <span className={styles.greenText}>18% crowd</span>.
            </p>
          </div>
        </div>

        <div className={styles.alertFooter}>
          <p className={styles.footerSub}>Tap below to navigate. Your muhurtham window is still valid there.</p>
          <button className={styles.navigateBtn}>
            <Navigation size={16} />
            Navigate to Saraswati Ghat
          </button>
        </div>
      </div>

      {/* Visual Redirection Mockup Card */}
      <div className={styles.mapCard}>
        <div className={styles.mapFrame}>
          <img 
            src="/ghat-redirection.png" 
            alt="AI Real-Time Redirection Map" 
            className={styles.mapImage}
          />
          <div className={styles.mapOverlay}>
            <div className={styles.pillGroup}>
              <span className={styles.mapPillRed}>Sector 4: High Capacity</span>
              <span className={styles.mapPillGreen}>Sector A: Optimal Flow</span>
            </div>
            <div className={styles.targetIndicator}>
              <Compass size={18} color="white" />
              <span>Rajahmundry AI Grid</span>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT IT DOES Grid */}
      <div className={styles.detailsSection}>
        <h4 className={styles.sectionHeading}>WHAT IT DOES</h4>
        <div className={styles.infoCard}>
          <div className={styles.infoIconWrapper}>
            <Cpu size={24} color="#a855f7" />
          </div>
          <div className={styles.infoText}>
            <p className={styles.infoPara}>
              The system continuously monitors all 12 ghats in real time using <strong>CCTV crowd-estimation feeds</strong>, GPS tracking data, and historical crowd movement patterns.
            </p>
            <p className={styles.infoPara}>
              When a ghat crosses <strong>70% capacity</strong>, it doesn't just raise an alarm — it automatically identifies the next best ghat, calculates walking/travel times, verifies it matches the pilgrim's <strong>muhurtham window</strong>, and pushes a personalized redirect suggestion to every pilgrim in that sector.
            </p>
          </div>
        </div>
      </div>

      {/* WHY GOVERNMENT CAN'T MATCH IT */}
      <div className={styles.edgeSection}>
        <h4 className={styles.edgeHeading}>THE SYSTEM EDGE</h4>
        <div className={styles.edgeCard}>
          <h5 className={styles.edgeTitle}>Predictive Redirection vs. Reactive Monitoring</h5>
          <p className={styles.edgePara}>
            Standard government ICCC systems are built for <strong>monitoring and reporting</strong>, not behavioral redirection. They display crowd data to officials on massive screens.
          </p>
          <p className={styles.edgePara}>
            This system acts on that data <strong>automatically and instantly</strong>. It moves pilgrims dynamically *before* a dangerous situation forms, entirely removing human intervention bottleneck.
          </p>
        </div>
      </div>

    </div>
  );
};

export default GhatRecommendation;
