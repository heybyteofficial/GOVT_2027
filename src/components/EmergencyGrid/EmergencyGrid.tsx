import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Bath, Bed, Ambulance, Search, ShieldCheck, 
  ChevronRight, Phone, AlertTriangle, CheckCircle2, UserCheck, X
} from 'lucide-react';
import styles from './EmergencyGrid.module.css';

interface EmergencyGridProps {
  onBack: () => void;
}

const EmergencyGrid: React.FC<EmergencyGridProps> = ({ onBack }) => {
  const [sosHolding, setSosHolding] = useState(false);
  const [sosProgress, setSosProgress] = useState(0);
  const [sosDispatched, setSosDispatched] = useState(false);
  const [scanModal, setScanModal] = useState(false);
  
  const timerRef = useRef<any | null>(null);
  const progressIntervalRef = useRef<any | null>(null);

  // SOS Hold Down Logic
  const handleHoldStart = () => {
    setSosHolding(true);
    setSosProgress(0);

    // Increment progress
    progressIntervalRef.current = setInterval(() => {
      setSosProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressIntervalRef.current!);
          return 100;
        }
        return prev + 8;
      });
    }, 100);

    // Trigger SOS after 1.2 seconds of holding
    timerRef.current = setTimeout(() => {
      setSosDispatched(true);
      setSosHolding(false);
      setSosProgress(0);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }, 1250);
  };

  const handleHoldEnd = () => {
    setSosHolding(false);
    setSosProgress(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  return (
    <div className={styles.outerContainer}>
      
      {/* ── MARKET-STANDARD LIGHT HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerLeft}>
            <button className={styles.backButton} onClick={onBack} aria-label="Back">
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className={styles.headerTitle}>Emergency & Utility Grid</h1>
              <p className={styles.headerSubtitle}>SECURE PILGRIM NETWORK • SECTOR 3</p>
            </div>
          </div>

          <div className={styles.icccBadge}>
            <span className={styles.pulseGreen} />
            <span className={styles.icccText}>ICCC LINK ACTIVE</span>
          </div>
        </div>

        {/* Pilgrim Digital Twin Context Layer */}
        <div className={styles.twinPanel}>
          <div className={styles.twinLeft}>
            <UserCheck size={16} className={styles.twinIcon} />
            <span className={styles.twinText}>
              Active Twin: <span className={styles.twinSpan}>Senior & Family Safety Mode</span>
            </span>
          </div>
          <span className={styles.twinBadge}>AUTO-ADAPTED</span>
        </div>
      </header>

      {/* ── VISUAL INFOGRAPHIC SERVICE LAYER ── */}
      <main className={styles.gridContainer}>

        {/* 1. TOILETS (Pillar 5: Real-Time Cleanliness Index) */}
        <section className={styles.bentoCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitleArea}>
              <div className={`${styles.iconWrapper} ${styles.iconToilets}`}>
                <Bath size={20} />
              </div>
              <div>
                <span className={styles.featId}>FEATURE 13</span>
                <h2 className={styles.cardTitle}>Real-Time Cleanliness Toilets</h2>
              </div>
            </div>
            <span className={styles.ratingBadge}>★ 8.4 SCORE</span>
          </div>

          {/* Visual Segmented Cleanliness Meter */}
          <div className={styles.toiletMeter}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`${styles.toiletSegment} ${styles.segmentFilled}`} />
            ))}
            {[...Array(2)].map((_, i) => (
              <div key={i} className={styles.toiletSegment} />
            ))}
          </div>

          <div className={styles.cardFooterText}>
            <span className={styles.footerLeft}>📍 Nearest: Node 04 Block (80m)</span>
            <span className={styles.footerRight}>CLEANED 14M AGO</span>
          </div>
        </section>


        {/* 2. ACCOMMODATION (Pillar 2: Tailored Stay Hubs) */}
        <section className={styles.bentoCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitleArea}>
              <div className={`${styles.iconWrapper} ${styles.iconAccommodation}`}>
                <Bed size={20} />
              </div>
              <div>
                <span className={styles.featId}>PILLARS 2 & 4</span>
                <h2 className={styles.cardTitle}>Transit Camps & Accommodation</h2>
              </div>
            </div>
            <span className={styles.occupancyBadge}>78% OCCUPIED</span>
          </div>

          {/* Graphic Density Loading Line */}
          <div className={styles.accommodationTrack}>
            <div className={styles.accommodationBar} style={{ width: '78%' }} />
          </div>

          <div className={styles.cardFooterText}>
            <span className={styles.footerLeft}>🏢 Hall 3 • Arts College Satellites</span>
            <span className={styles.footerRightAmber}>42 MATS VACANT</span>
          </div>
          
          <button className={styles.scanButton} onClick={() => setScanModal(true)}>
            <span>Scan Ground Entry Token QR</span>
            <ChevronRight size={14} style={{ opacity: 0.5 }} />
          </button>
        </section>


        {/* 3. AMBULANCE & MEDICAL HELP (Pillar 1 & 3: High-Trust Active Dispatch) */}
        <section className={`${styles.bentoCard} ${styles.emergencyCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitleArea}>
              <div className={`${styles.iconWrapper} ${styles.iconAmbulance} ${styles.pulseRed}`}>
                <Ambulance size={20} />
              </div>
              <div>
                <span className={styles.featId} style={{ color: '#f87171' }}>PILLAR 3: GEO-DISPATCH</span>
                <h2 className={styles.cardTitle} style={{ color: '#7f1d1d' }}>Ambulance & Emergency Medical</h2>
              </div>
            </div>
            <span className={styles.emergencyBadge}>ETA &lt; 4 MINS</span>
          </div>

          <div className={styles.handshakeBox}>
            <div className={styles.handshakeText}>
              <AlertTriangle size={14} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
              <span>
                <strong>BEACON SECURITY Handshake:</strong> Activating coordinates auto-transmits medical history and links with immediate volunteer intercept.
              </span>
            </div>
          </div>

          {/* Intent-Lock Action Infrastructure Split */}
          <div className={styles.emergencyGrid}>
            <button 
              onMouseDown={handleHoldStart}
              onMouseUp={handleHoldEnd}
              onMouseLeave={handleHoldEnd}
              onTouchStart={handleHoldStart}
              onTouchEnd={handleHoldEnd}
              className={`${styles.sosButton} ${sosHolding ? styles.sosButtonActive : ''}`}
            >
              {sosHolding && (
                <div 
                  className={styles.sosProgressFill} 
                  style={{ width: `${sosProgress}%` }}
                />
              )}
              <span className={styles.sosText}>
                {sosHolding ? "HOLDING SOS..." : "HOLD TO SOS"}
              </span>
            </button>

            <button 
              className={styles.callButton}
              onClick={() => window.open('tel:108')}
            >
              <Phone size={14} style={{ color: '#94a3b8' }} /> CALL 108
            </button>
          </div>
        </section>


        {/* 4. LOST & FOUND (Pillar 4: Automated Missing Child Broadcast) */}
        <section className={styles.bentoCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitleArea}>
              <div className={`${styles.iconWrapper} ${styles.iconLostFound}`}>
                <Search size={20} />
              </div>
              <div>
                <span className={styles.featId}>FEATURE 15</span>
                <h2 className={styles.cardTitle}>Lost Belongings & Missing Child</h2>
              </div>
            </div>
            <span className={styles.purpleBadge}>60S INCIDENT SYNC</span>
          </div>

          {/* Live System Operational Monitoring Metrics */}
          <div className={styles.possessionsBox}>
            <div className={styles.possessionsRow}>
              <span className={styles.possessionsLabel}>👶 Missing Child Alerts (Zone 3):</span>
              <span className={styles.possessionsValue}>
                <CheckCircle2 size={13} style={{ color: '#10b981' }} /> 0 ACTIVE
              </span>
            </div>
            <div style={{ height: '1px', backgroundColor: '#e2e8f0' }} />
            <div className={styles.possessionsRow}>
              <span className={styles.possessionsLabel}>Registered Possessions (Desk 3):</span>
              <span className={styles.possessionsValue} style={{ color: '#1e293b' }}>
                14 items unclaimed
              </span>
            </div>
          </div>

          <button 
            className={styles.reportButton}
            onClick={() => alert("ICCC report ticket dispatched. Secure desk logged.")}
          >
            <span>Report Missing File or Relative</span>
          </button>
        </section>

      </main>

      {/* SOS DISPATCH SUCCESS MODAL */}
      {sosDispatched && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button 
              className={styles.modalCloseButton} 
              onClick={() => setSosDispatched(false)}
            >
              <X size={16} />
            </button>

            <AlertTriangle size={32} color="#dc2626" className={styles.pulseRed} style={{ marginTop: '8px' }} />
            <h3 className={styles.modalTitle}>SOS Emergency Dispatched</h3>
            <p className={styles.modalSubtitle}>GEO-DISPATCH TRIGGER ACTIVATED</p>

            <div className={styles.modalStatus}>
              <ShieldCheck size={12} /> ICCC RESPONDING IMMEDIATELY
            </div>

            <div className={styles.modalDetails}>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>GPS TARGET</span>
                <span className={styles.modalValue}>Sector 3 (Node 04)</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>ESTIMATED INTERCEPT</span>
                <span className={styles.modalValue}>&lt; 3 MINS ETA</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>RESPONDING UNIT</span>
                <span className={styles.modalValue}>ICCC Quick Action Volunteer Team</span>
              </div>
              <div className={styles.modalRow}>
                <span className={styles.modalLabel}>SAFETY INSTRUCTION</span>
                <span className={styles.modalValue}>Stay calm. Stay in a well-lit node.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCANNING MODAL OVERLAY */}
      {scanModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard} style={{ borderColor: '#0d9488' }}>
            <button 
              className={styles.modalCloseButton} 
              onClick={() => setScanModal(false)}
            >
              <X size={16} />
            </button>

            <Bed size={32} color="#0d9488" style={{ marginTop: '8px' }} />
            <h3 className={styles.modalTitle} style={{ color: '#0d1b3e' }}>Accommodation Token Scanner</h3>
            <p className={styles.modalSubtitle} style={{ color: '#0d9488' }}>GROUND ENTRY AUTHORIZATION</p>

            {/* Simulating Camera Scanner */}
            <div 
              style={{
                width: '180px',
                height: '180px',
                border: '3px dashed #0d9488',
                borderRadius: '16px',
                margin: '20px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: '#f8fafc',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '2px',
                  background: '#0d9488',
                  boxShadow: '0 0 8px #0d9488',
                  animation: 'scannerMove 2s infinite ease-in-out'
                }}
              />
              <span style={{ fontSize: '0.62rem', color: '#94a3b8', fontWeight: 800 }}>CAMERA VIEWACTIVE</span>
            </div>

            <style>
              {`
                @keyframes scannerMove {
                  0% { top: 0%; }
                  50% { top: 100%; }
                  100% { top: 0%; }
                }
              `}
            </style>

            <button 
              className={styles.modalActionButton}
              style={{ background: '#0d9488' }}
              onClick={() => {
                alert("Accommodation token authorized! Seat #42 reserved at Arts College.");
                setScanModal(false);
              }}
            >
              SIMULATE SUCCESS SCAN
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default EmergencyGrid;
