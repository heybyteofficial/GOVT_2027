import React, { useState } from 'react';
import { 
  ArrowLeft, ShieldCheck, CheckCircle2, X
} from 'lucide-react';
import styles from './TransitCamps.module.css';

interface TransitCampsProps {
  onBack: () => void;
}

const TransitCamps: React.FC<TransitCampsProps> = ({ onBack }) => {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const handleBookingAction = () => {
    setBookingLoading(true);
    setTimeout(() => {
      setBookingLoading(false);
      setBookingConfirmed(true);
    }, 800);
  };

  return (
    <div className={styles.outerContainer}>
      
      {/* ── FIXED HUD HEADER (12% Height) ── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Transit Camps</h1>
            <p className={styles.headerSubtitle}>PILLARS 02 & 04 • LIVE ICCC LOGISTICS ALLOCATION FEED</p>
          </div>
        </div>
        
        <div className={styles.icccBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.icccText}>🟢 LINK ACTIVE</span>
        </div>
      </header>

      {/* ── PROFILE-ADAPTIVE OVERLAY PANEL (10% Height) ── */}
      <div className={styles.twinPanel}>
        <ShieldCheck size={18} className={styles.twinIcon} />
        <p className={styles.twinText}>
          <span className={styles.twinStrong}>DIGITAL TWIN MATCH:</span> Senior & Family Safety Mode. Low-density spaces with zero steep gradients prioritized.
        </p>
      </div>

      {/* ── ACTIVE INVENTORY BENTO LAYER (78% Height) ── */}
      <main className={styles.bentoContainer}>

        {/* ── COMPONENT 1: THE AI-OPTIMIZED ALLOCATION ── */}
        <section className={styles.optimalCard}>
          
          {/* Top Row Metadata */}
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderLeft}>
              <p className={styles.campusType}>Satellite Campus</p>
              <h2 className={styles.campusName}>Hall 3 • Arts College Grounds</h2>
            </div>
            <span className={styles.aiBadge}>
              ★ AI RECOMMENDED
            </span>
          </div>

          {/* Segmented Progress Meter - 35% filled */}
          <div className={styles.segmentedProgress}>
            <div className={`${styles.progressBlock} ${styles.progressBlockFilled}`} />
            <div className={`${styles.progressBlock} ${styles.progressBlockFilled}`} />
            <div className={`${styles.progressBlock} ${styles.progressBlockFilled}`} />
            <div className={styles.progressBlock} />
            <div className={styles.progressBlock} />
            <div className={styles.progressBlock} />
            <div className={styles.progressBlock} />
            <div className={styles.progressBlock} />
            <div className={styles.progressBlock} />
            <div className={styles.progressBlock} />
          </div>

          {/* Telemetry Metric Strings (Heavily maximized weights, left-aligned) */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryIcon}>👥</span>
              <span className={styles.telemetryLabel}>CAPACITY:</span>
              <span className={styles.highlightTextGreen}>Safe Space Available (42 Mats Vacant)</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryIcon}>⏱️</span>
              <span className={styles.telemetryLabel}>TRANSIT:</span>
              <span>APSRTC Shuttle Loops every <strong style={{ color: '#0d1b3e', fontWeight: 900 }}>4 Mins</strong></span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryIcon}>📍</span>
              <span className={styles.telemetryLabel}>PROXIMITY:</span>
              <span><strong style={{ color: '#0d1b3e', fontWeight: 900 }}>1.2 KM</strong> to Saraswati Ghat</span>
            </div>
          </div>

          {/* Facility Tags capsules */}
          <div className={styles.facilityRow}>
            <span className={styles.facilityCapsule}>✓ Free Purified RO Water</span>
            <span className={styles.facilityCapsule}>✓ Medical Base B Active</span>
          </div>

          {/* Saffron Action Target Baseline */}
          <button 
            className={styles.actionButton}
            onClick={handleBookingAction}
            disabled={bookingLoading}
          >
            {bookingLoading ? "Securing Allocation..." : "TAP TO SECURE FAMILY BOOKING ALLOCATION"}
          </button>
        </section>


        {/* ── COMPONENT 2: THE CONGESTED SURGE ALERT ── */}
        <section className={styles.congestedCard}>
          
          {/* Top Row Metadata */}
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderLeft}>
              <p className={styles.campusType}>Primary Gate Concourse</p>
              <h2 className={styles.campusName} style={{ color: '#475569' }}>Hall 1 • Central Ghat Hub</h2>
            </div>
            <span className={styles.occupancyBadge}>
              ⚠️ 78% OCCUPIED
            </span>
          </div>

          {/* Solid progress line - 78% filled */}
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} style={{ width: '78%' }} />
          </div>

          {/* Telemetry Metric Strings (Muted mappings, left-aligned) */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryIcon}>⏳</span>
              <span className={styles.telemetryLabel}>PROCESSING TIME:</span>
              <span className={styles.highlightTextAmber}>~25 Min Entry Queue Wait</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryIcon}>⚠️</span>
              <span className={styles.telemetryLabel}>HAZARD PROXIMITY:</span>
              <span className={styles.highlightTextRed}>40m to Overloaded Pushkara Ghat</span>
            </div>
          </div>

          {/* Action Target locked baseline */}
          <div className={styles.lockedBand}>
            🛑 DIVERSION ALERT — SURGE ZONE • PROCEED TO ARTS COLLEGE CAMP
          </div>
        </section>

      </main>

      {/* SECURED ALLOCATION RECEIPT MODAL OVERLAY */}
      {bookingConfirmed && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button 
              className={styles.modalCloseButton} 
              onClick={() => setBookingConfirmed(false)}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <ShieldCheck size={32} color="#0d9488" style={{ marginTop: '8px' }} />
            <h3 className={styles.modalTitle}>Stay Allocation Secured</h3>
            <p className={styles.modalSubtitle}>AP PILGRIM ACCOMMODATION BOARDING PERMIT</p>

            {/* QR Scanner Display */}
            <div className={styles.qrWrapper}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PUSHKARALU-CAMP-ARTS-HALL3-42" 
                alt="Camp Reservation QR Token" 
                className={styles.qrImage}
              />
            </div>

            <div className={styles.ticketStatus}>
              <CheckCircle2 size={10} /> LINKED TO DEVIATION COMPLIANCE MONITORING
            </div>

            {/* Details Receipt Block */}
            <div className={styles.ticketDetails}>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>CAMP ALLOCATION</span>
                <span className={styles.ticketValue}>Arts College (Hall 3, Mat #42)</span>
              </div>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>SAFETY CLUSTER</span>
                <span className={styles.ticketValue}>SENIOR / LOW DENSITY ZONE</span>
              </div>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>SHUTTLE LOOP TARGET</span>
                <span className={styles.ticketValue}>ROUTE 14-A (SHUTTLE EVERY 4M)</span>
              </div>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>ICCC RECEIPT ID</span>
                <span className={styles.ticketValue}>#ICCC-CAMP-309482</span>
              </div>
            </div>

            <button 
              className={styles.modalActionButton}
              onClick={() => setBookingConfirmed(false)}
            >
              DONE • READY TO BOARD SHUTTLE
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default TransitCamps;
