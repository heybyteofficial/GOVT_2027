import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Phone, MessageSquare, AlertOctagon, Heart, Radio, Navigation
} from 'lucide-react';
import styles from './EmergencySOS.module.css';

interface EmergencySOSProps {
  onBack: () => void;
}

const EmergencySOS: React.FC<EmergencySOSProps> = ({ onBack }) => {
  const [sosProgress, setSosProgress] = useState(0);
  const [sosHolding, setSosHolding] = useState(false);
  const [sosActivated, setSosActivated] = useState(false);

  const timerRef = useRef<any | null>(null);
  const progressIntervalRef = useRef<any | null>(null);

  // SVG circular properties
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (sosProgress / 100) * circumference;

  // SOS Hold Gestures
  const handleHoldStart = () => {
    if (sosActivated) return;
    setSosHolding(true);
    setSosProgress(0);

    // Dynamic increment for a perfect 3-second hold (30 steps of 100ms)
    progressIntervalRef.current = setInterval(() => {
      setSosProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!);
          return 100;
        }
        return prev + 3.34;
      });
    }, 100);

    // Fire beacon after exactly 3 seconds
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
      
      {/* ── COMPACT HUD HEADER (10% Height) ── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Emergency SOS</h1>
            <p className={styles.headerSubtitle}>OFFICIAL GOVERNMENT EMERGENCY PORTAL</p>
          </div>
        </div>
        
        <div className={styles.handshakeBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.handshakeText}>🟢 SECURE HANDSHAKE</span>
        </div>
      </header>

      {/* ── LIVE INTERACTIVE EMERGENCY GRID ── */}
      <main className={styles.container}>

        {/* ── THE "FULL REF" CONSENT BENTO GRID (25% Height) ── */}
        <section className={styles.bentoGrid}>
          
          <div className={styles.bentoCard}>
            <div className={styles.cardHeaderRow}>
              <Navigation size={12} className={styles.cardIcon} />
              <span>📍 LIVE LOCATION</span>
            </div>
            <div className={styles.cardValue}>GPS: 17.0005° N, 81.8040° E • Sector 3</div>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.cardHeaderRow}>
              <Heart size={12} className={styles.cardIcon} />
              <span>🩸 MEDICAL SNAPSHOT</span>
            </div>
            <div className={styles.cardValue}>Blood: O+ | Allergies: None | Age: 72</div>
          </div>

          <div className={styles.bentoCard}>
            <div className={styles.cardHeaderRow}>
              <Radio size={12} className={styles.cardIcon} />
              <span>📞 DISPATCH RADIUS</span>
            </div>
            <div className={styles.cardValue}>Scanning closest 500m volunteer node</div>
          </div>

        </section>


        {/* ── THE INTENT-LOCKED SOS TRIGGER ZONE (40% Height) ── */}
        <section className={styles.triggerZone}>
          
          <div>
            <h2 className={styles.triggerLabel}>
              {sosActivated ? "DISTRESS BEACON ACTIVATED" : "HOLD FOR 3 SECS TO BROADCAST DISTRESS BEACON"}
            </h2>
            <p className={styles.triggerSublabel}>
              {sosHolding 
                ? "HOLDING... TRANSMITTING BEACON COMPLIANCE HANDSHAKE" 
                : sosActivated 
                  ? "DISTRESS BROADCAST SUCCESSFULLY LOGGED AT ICCC" 
                  : "SAFEHOLD LOCK PREVENTS ACCIDENTAL ACCIDENTAL PRESSES"}
            </p>
          </div>

          {/* Mass Circular Target with perimeter progress ring */}
          <div className={styles.biometricOuter}>
            <svg className={styles.svgProgressRing} width="176" height="176">
              <circle className={styles.ringTrack} cx="88" cy="88" r={radius} />
              <circle 
                className={styles.ringFill} 
                cx="88" 
                cy="88" 
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
              <AlertOctagon size={48} className={styles.biometricIcon} />
              <span className={styles.biometricText}>
                {sosActivated ? "SOS ON" : sosHolding ? "HOLDING..." : "SOS BEACON"}
              </span>
            </button>
          </div>

        </section>


        {/* ── CONDITIONAL "RESPONDER RECEPTION" VIEW (25% Height) ── */}
        {sosActivated && (
          <section className={styles.responderCard}>
            
            <div className={styles.responderHeader}>
              <div>
                <h3 className={styles.responderTitle}>Dr. Amara • Verified First Responder</h3>
                <span className={styles.campusType} style={{ color: '#0d9488' }}>Team S-7 • Quick Action Medical</span>
              </div>
              <span className={styles.matchBadge}>
                ✓ COORD MATCHED
              </span>
            </div>

            <div className={styles.telemetryRow}>
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryText}>⏱️ DISTANCE:</span>
                <span className={styles.telemetryStrong}>120m away</span>
              </div>
              <div style={{ width: '1px', height: '14px', backgroundColor: '#e2e8f0' }} />
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryText}>⏳ ETA:</span>
                <span className={styles.telemetryStrong}>2 Mins</span>
              </div>
            </div>

            {/* Split Quick Actions Baseline */}
            <div className={styles.actionRow}>
              <button 
                className={styles.callButton}
                onClick={() => window.open('tel:108')}
              >
                <Phone size={14} /> Call Responder
              </button>

              <button 
                className={styles.chatButton}
                onClick={() => alert("ICCC Secure audio channel connected. Recording active.")}
              >
                <MessageSquare size={14} /> Secure Audio Chat
              </button>
            </div>

          </section>
        )}

      </main>

    </div>
  );
};

export default EmergencySOS;
