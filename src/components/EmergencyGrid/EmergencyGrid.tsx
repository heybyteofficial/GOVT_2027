import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, AlertOctagon
} from 'lucide-react';
import styles from './EmergencyGrid.module.css';

interface EmergencyGridProps {
  onBack: () => void;
}

const EmergencyGrid: React.FC<EmergencyGridProps> = ({ onBack }) => {
  const [sosProgress, setSosProgress] = useState(0);
  const [sosHolding, setSosHolding] = useState(false);
  const [sosActivated, setSosActivated] = useState(false);

  const timerRef = useRef<any | null>(null);
  const progressIntervalRef = useRef<any | null>(null);

  // SVG circular properties
  const radius = 86;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (sosProgress / 100) * circumference;

  // SOS Hold Down Logic
  const handleHoldStart = () => {
    if (sosActivated) return;
    setSosHolding(true);
    setSosProgress(0);

    // Increment progress (3-second hold, 30 steps of 100ms)
    progressIntervalRef.current = setInterval(() => {
      setSosProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!);
          return 100;
        }
        return prev + 3.34;
      });
    }, 100);

    // Dispatch beacon after exactly 3.0 seconds
    timerRef.current = setTimeout(() => {
      setSosActivated(true);
      setSosHolding(false);
      setSosProgress(100);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }, 3000);
  };

  const handleHoldEnd = () => {
    if (sosActivated) return;
    setSosHolding(false);
    setSosProgress(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  return (
    <div className={styles.outerContainer}>
      
      {/* ── COMPACT HUD HEADER (15% Height) ── */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerLeft}>
            <button className={styles.backButton} onClick={onBack} aria-label="Back">
              <ArrowLeft size={18} />
            </button>
            <h1 className={styles.headerTitle}>Emergency SOS</h1>
          </div>
          
          <div className={styles.icccBadge}>
            <span className={styles.pulseGreen} />
            <span className={styles.icccText}>🟢 ICCC LINK ACTIVE</span>
          </div>
        </div>

        {/* Clean text ribbon below */}
        <div className={styles.ribbonBar}>
          Target Field Response Window: &lt; 4 Mins
        </div>
      </header>

      {/* ── SINGLE-BUTTON INTENT-LOCKED SOS ZONE (60% Height) ── */}
      <main className={styles.container}>
        
        <section className={styles.triggerZone}>
          
          <div>
            <h2 className={styles.triggerLabel}>
              {sosActivated ? "SOS DISTRESS ACTIVE" : "HOLD FOR 3 SECS TO BROADCAST DISTRESS BEACON"}
            </h2>
            <p className={styles.triggerSublabel}>
              {sosHolding 
                ? "HOLDING... TRANSMITTING BEACON COMPLIANCE HANDSHAKE" 
                : sosActivated 
                  ? "DISTRESS BROADCAST SUCCESSFULLY LOGGED AT ICCC" 
                  : "SAFEHOLD LOCK PREVENTS ACCIDENTAL DISTRESS TRIGGERS"}
            </p>
          </div>

          {/* Centered Circular Target */}
          <div className={styles.biometricOuter}>
            <svg className={styles.svgProgressRing} width="190" height="190">
              <circle className={styles.ringTrack} cx="95" cy="95" r={radius} />
              <circle 
                className={styles.ringFill} 
                cx="95" 
                cy="95" 
                r={radius} 
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>

            <button
              onMouseDown={handleHoldStart}
              onMouseUp={handleHoldEnd}
              onMouseLeave={handleHoldEnd}
              onTouchStart={handleHoldStart}
              onTouchEnd={handleHoldEnd}
              className={`${styles.biometricInner} ${sosHolding ? styles.biometricInnerActive : ''}`}
              style={sosActivated ? { background: '#10b981', boxShadow: '0 12px 30px rgba(16, 185, 129, 0.35)' } : undefined}
            >
              <AlertOctagon size={52} className={styles.biometricIcon} />
              <span className={styles.biometricText}>
                {sosActivated ? "SOS ON" : sosHolding ? "HOLDING..." : "SOS BEACON"}
              </span>
            </button>
          </div>

        </section>

        {/* ── CONDITIONAL "SUPPORT DISPATCH" VIEW (25% Height) ── */}
        {sosActivated && (
          <section className={styles.responderCard}>
            
            <div className={styles.responderHeader}>
              <div>
                <h3 className={styles.responderTitle}>👨⚕️ Verified Support Assistant Dispatched</h3>
                <p className={styles.triggerSublabel} style={{ margin: '2px 0 0 0', color: '#0d9488' }}>Team S-7 • Quick Action Volunteer Unit</p>
              </div>
              <span className={styles.matchBadge}>
                ✓ BROADCAST RECEIVED
              </span>
            </div>

            <div className={styles.telemetryRow}>
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryText}>⏱️ ARRIVING IN:</span>
                <span className={styles.telemetryStrong}>2 MINS</span>
              </div>
              <div style={{ width: '1px', height: '14px', backgroundColor: '#e2e8f0' }} />
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryText}>📍 DISTANCE:</span>
                <span className={styles.telemetryStrong}>120m</span>
              </div>
            </div>

          </section>
        )}

      </main>

    </div>
  );
};

export default EmergencyGrid;
