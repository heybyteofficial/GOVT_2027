import React, { useState } from 'react';
import { ArrowLeft, Compass, Users, Clock, CheckCircle, AlertTriangle, ShieldAlert, Key } from 'lucide-react';
import styles from './ParkingFinder.module.css';

interface ParkingFinderProps {
  onBack: () => void;
}

const ParkingFinder: React.FC<ParkingFinderProps> = ({ onBack }) => {
  const [passGenerated, setPassGenerated] = useState(false);

  return (
    <div className={styles.outerContainer}>
      
      {/* COMPACT TELEMETRY HEADER */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Smart Parking Finder</h1>
            <p className={styles.headerSubtitle}>APSRTC SMART TRANSIT LAYERS</p>
          </div>
        </div>
        
        <div className={styles.liveBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.liveText}>ICCC SENSOR SYNCED</span>
        </div>
      </header>

      {/* REALISTIC NATIVE MAP INTERFACE */}
      <div className={styles.mapContainer}>
        {/* Charcoal grid overlay representing modern digital GPS tracking */}
        <div className={styles.gridOverlay} />
        
        {/* POLYGON A: PUSHKARA SECTOR GATE (Congested Red Zone) */}
        <div className={styles.polygonA}>
          <div className={styles.polygonABoundary} />
          <div className={styles.calloutBubbleRed}>
            <AlertTriangle size={9} className={styles.iconWarning} />
            <span className={styles.calloutText}>98% FULL</span>
          </div>
        </div>

        {/* POLYGON B: ARTS COLLEGE GROUNDS (Optimal Green Zone) */}
        <div className={styles.polygonB}>
          <div className={styles.polygonBBoundary} />
          <div className={styles.calloutBubbleGreen}>
            <CheckCircle size={9} className={styles.iconCheck} />
            <span className={styles.calloutText}>450+ SLOTS OPEN</span>
          </div>
        </div>

        {/* PULSING BLUE USER ARROW PIN */}
        <div className={styles.userMarker}>
          <div className={styles.userPing} />
          <div className={styles.userArrow}>
            <Compass size={11} className={styles.compassRotate} />
          </div>
          <span className={styles.userLabel}>YOU</span>
        </div>

        {/* SVG Navigation Vector Path leading directly into Lot B */}
        <svg className={styles.svgOverlay} viewBox="0 0 500 280" preserveAspectRatio="none">
          {/* Solid glowing vector curve */}
          <path 
            d="M 120 220 Q 250 200, 310 135" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth="3.5"
            className={styles.vectorRoute}
          />
        </svg>

        {/* Telemetry banner overlay */}
        <div className={styles.alertBanner}>
          <ShieldAlert size={14} className={styles.iconAlert} />
          <p className={styles.alertText}>
            <strong>PARKING AUTO-ROUTING:</strong> High-risk queues at Pushkara. Dynamic GPS redirecting to <strong>Arts College Grounds (Lot B)</strong>.
          </p>
        </div>
      </div>

      {/* DATA INFOGRAPHIC BENTO STACK */}
      <div className={styles.bentoSection}>
        
        {/* CARD 1: THE SMART OPTIMIZED TERMINAL */}
        <div className={`${styles.optimalCard} ${passGenerated ? styles.passGeneratedGlow : ''}`}>
          <div className={styles.optimalContentCol}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.cardHeaderLeft}>
                <div className={styles.bulletGreen} />
                <h2 className={styles.cardTitle}>01. Arts College Grounds (Lot B)</h2>
              </div>
              <span className={styles.aiBadge}>RECOMMENDED BY AI</span>
            </div>

            {/* Capacity Infographic Bar */}
            <div className={styles.capacityWrapper}>
              <div className={styles.dataBarTrack}>
                <div className={styles.dataBarFill} style={{ width: '30%' }} />
                <span className={styles.dataBarText}>450 / 600 VACANT</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryItem}><Clock size={12} /> ETA: 6 Mins</span>
              <span className={styles.telemetryItemGreen}><Users size={12} /> Shuttle: Every 2 Mins</span>
              <span className={styles.telemetryItemSaffron}><Key size={12} /> RFID Gate: Active</span>
            </div>

            {/* Action Target */}
            <button 
              className={`${styles.actionButton} ${passGenerated ? styles.actionActive : ''}`}
              onClick={() => setPassGenerated(true)}
            >
              <span className={styles.buttonText}>
                {passGenerated ? (
                  <>
                    <CheckCircle size={13} className={styles.checkIcon} />
                    PASS SPAWNED (TAP TO DOWNLOAD)
                  </>
                ) : (
                  "TAP TO SPAWN DIGITAL PARKING PASS →"
                )}
              </span>
            </button>
          </div>
        </div>

        {/* CARD 2: THE CRITICAL CONGESTED NODE */}
        <div className={styles.congestedCard}>
          <div className={styles.optimalContentCol}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.cardHeaderLeft}>
                <div className={styles.bulletRed} />
                <h2 className={styles.congestedCardTitle}>02. Pushkara Sector Gate (Lot A)</h2>
              </div>
            </div>

            {/* Capacity Infographic Bar */}
            <div className={styles.capacityWrapper}>
              <div className={styles.dataBarTrack}>
                <div className={styles.dataBarFillRed} style={{ width: '98%' }} />
                <span className={styles.dataBarTextRed}>12 / 500 VACANT</span>
              </div>
            </div>

            {/* Quick Specs */}
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryItemRed}><Clock size={12} /> ETA: 18 Mins Traffic</span>
              <span className={styles.telemetryItemRed}><Users size={12} /> Wait: 35 Mins</span>
              <span className={styles.telemetryItemRed}><ShieldAlert size={12} /> Barrier: Strictly Closed</span>
            </div>

            {/* Action Target (Disabled band) */}
            <div className={styles.disabledBand}>
              ROUTING SUSPENDED — LOT OVERLOADED
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ParkingFinder;
