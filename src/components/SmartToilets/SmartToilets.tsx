import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, Clock, ShieldAlert, Sparkles, 
  AlertCircle, ShieldCheck, Accessibility, MapPin, X
} from 'lucide-react';
import styles from './SmartToilets.module.css';

interface SmartToiletsProps {
  onBack: () => void;
}

const SmartToilets: React.FC<SmartToiletsProps> = ({ onBack }) => {
  const [reportLogged, setReportLogged] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleReportAction = () => {
    setReportLogged(true);
    setShowModal(true);
  };

  return (
    <div className={styles.outerContainer}>
      
      {/* ── HIGH-STATUS ENTERPRISE LIGHT HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Smart Toilet Finder</h1>
            <p className={styles.headerSubtitle}>FEATURE 13 • PILGRIM DIGITAL TWIN FEED</p>
          </div>
        </div>
        
        <div className={styles.sensorBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.sensorText}>ICCC SENSOR SYNCED</span>
        </div>
      </header>

      {/* ── LIVE INTERACTIVE METRICS BODY ── */}
      <main className={styles.container}>

        {/* TOP LIVE SYSTEM STATUS OVERLAY BANNER */}
        <div className={styles.systemBanner}>
          <ShieldCheck size={18} className={styles.bannerIcon} />
          <p className={styles.bannerText}>
            <span className={styles.bannerStrong}>SANITY STANDARDS VALID:</span> Every toilet block in this zone is dynamically audited via pilgrim feedback loops and automated supervisor team task routing.
          </p>
        </div>

        {/* ── BLOCK 01: THE AI-RECOMMENDED HIGH OPTIMAL ZONE ── */}
        <section className={styles.optimalCard}>
          
          {/* Card Identifier Row */}
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderLeft}>
              <p className={styles.blockId}>LOGISTICS BLOCK 12</p>
              <h2 className={styles.blockName}>Block 12 • Saraswati Sector Park</h2>
            </div>
            <span className={styles.scoreBadge}>
              ★ 8.4 SCORE
            </span>
          </div>

          {/* Segmented Visual Cleanliness Matrix Bars */}
          <div className={styles.matrixGrid}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`${styles.matrixBlock} ${styles.blockGreen}`} />
            ))}
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.matrixBlock} />
            ))}
          </div>
          
          <p className={styles.stateLabel}>
            <Sparkles size={14} /> STATE VALUE: EXCELLENT (CLEANED 14 MINS AGO)
          </p>

          <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '4px 0' }} />

          {/* Telemetry Core Data Layer */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Clock size={16} className={styles.telemetryIcon} /> Queue Metrics
              </span>
              <span className={styles.telemetryValueGreen}>NO QUEUE • 0 MIN WAIT</span>
            </div>
            
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <MapPin size={16} className={styles.telemetryIcon} /> Distance Threshold
              </span>
              <span className={styles.telemetryValue}>90m LEFT • SECTOR WALKWAY</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Accessibility size={16} className={styles.telemetryIcon} /> Built Inclusions
              </span>
              <div className={styles.inclusionRow}>
                <span className={styles.inclusionBadge}>Women Only Block</span>
                <span className={styles.inclusionBadge}>Senior Railings</span>
              </div>
            </div>
          </div>

          {/* Primary Feature Trigger */}
          <div className={styles.compassBand}>
            📍 COMPASS ROUTE GENERATED IN NEXT TAB
          </div>
        </section>


        {/* ── BLOCK 04: THE CRITICAL ATTENTION NEEDED ZONE ── */}
        <section className={styles.degradedCard}>
          
          {/* Card Identifier Row */}
          <div className={styles.cardHeader}>
            <div className={styles.cardHeaderLeft}>
              <p className={styles.blockId}>LOGISTICS BLOCK 04</p>
              <h2 className={styles.blockName} style={{ color: '#475569' }}>Block 04 • Main Ghat Gate Intersection</h2>
            </div>
            <span className={styles.scoreBadgeAmber}>
              ⚠️ 4.2 / 10 SCORE
            </span>
          </div>

          {/* Segmented Visual Cleanliness Matrix Bars */}
          <div className={styles.matrixGrid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`${styles.matrixBlock} ${styles.blockAmber}`} />
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.matrixBlock} />
            ))}
          </div>
          
          <p className={styles.stateLabelAmber}>
            <AlertCircle size={14} /> STATE VALUE: DEGRADED (AUTO-ASSIGNED TO TEAM S-7)
          </p>

          <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '4px 0' }} />

          {/* Telemetry Core Data Layer */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Clock size={16} className={styles.telemetryIcon} /> Queue Metrics
              </span>
              <span className={styles.telemetryValueAmber}>~35 MIN WAIT (HEAVY SURGE)</span>
            </div>
            
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <ShieldAlert size={16} className={styles.telemetryIcon} /> Target Resolution
              </span>
              <span className={styles.telemetryValue} style={{ color: '#475569' }}>REFILL TASK EN ROUTE • ETA 45 MINS</span>
            </div>
          </div>

          {/* Saffron Dynamic Operational Report Action Call */}
          <button 
            onClick={handleReportAction}
            className={`${styles.reportButton} ${reportLogged ? styles.reportButtonLogged : ''}`}
            disabled={reportLogged}
          >
            <AlertCircle size={16} />
            <span>{reportLogged ? "✓ INCIDENT LOGGED IN DASHBOARD" : "ONE-TAP CLEANING REQUEST"}</span>
          </button>
        </section>

      </main>

      {/* TICKET DETAILS MODAL */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button 
              className={styles.modalCloseButton} 
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <AlertCircle size={32} color="#e8760a" style={{ marginTop: '8px' }} />
            <h3 className={styles.modalTitle}>Cleaning Ticket Logged</h3>
            <p className={styles.modalSubtitle}>ICCC SUPERVISOR DISPATCH ACTIVE</p>

            <div className={styles.modalStatus}>
              <CheckCircle2 size={10} /> ROUTED TO TEAM S-7 (ZONE 3)
            </div>

            {/* Details Receipt Block */}
            <div className={styles.modalDetails}>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>TARGET LOCATION</span>
                <span className={styles.modalValue}>Block 04 Intersection</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>TICKET STATUS</span>
                <span className={styles.modalValue}>HIGH PRIORITY AUDIT</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>ETA TO SPOT</span>
                <span className={styles.modalValue}>&lt; 9 MINS (FAST REFILL)</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>ICCC RECEIPT ID</span>
                <span className={styles.modalValue}>#TKT-BL04-8930</span>
              </div>
            </div>

            <button 
              className={styles.modalCloseButton}
              style={{
                position: 'static',
                width: '100%',
                marginTop: '16px',
                borderRadius: '12px',
                background: '#e8760a',
                color: 'white',
                fontSize: '0.72rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                border: 'none',
                height: '42px'
              }}
              onClick={() => setShowModal(false)}
            >
              DONE • CLOSE RECEIPT
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SmartToilets;
