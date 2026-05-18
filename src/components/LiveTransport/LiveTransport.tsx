import React, { useState } from 'react';
import { ArrowLeft, Bus, Clock, Users, Flame, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';
import styles from './LiveTransport.module.css';

interface LiveTransportProps {
  onBack: () => void;
}

const LiveTransport: React.FC<LiveTransportProps> = ({ onBack }) => {
  const [ticketPurchased, setTicketPurchased] = useState(false);

  return (
    <div className={styles.outerContainer}>
      
      {/* FIXED HUD HEADER */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Live Transport</h1>
            <p className={styles.headerSubtitle}>APSRTC SMART TRANSIT LAYERS</p>
          </div>
        </div>
        
        <div className={styles.liveBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.liveText}>LIVE DEPOT FEED</span>
        </div>
      </header>

      {/* REAL-TIME TRANSIT PIPELINE (Vector Layout) */}
      <div className={styles.pipelineContainer}>
        {/* Techy HUD mapping background grid */}
        <div className={styles.gridOverlay} />
        <div className={styles.radarRingOuter} />
        <div className={styles.radarRingInner} />

        {/* Central Hub Node: Depot Node */}
        <div className={styles.depotNode}>
          <div className={styles.depotPing} />
          <div className={styles.depotCircle}>
            <Bus size={12} className={styles.iconDepot} />
          </div>
          <span className={styles.depotLabel}>DEPOT HUB</span>
        </div>

        {/* SVG Pipeline Paths */}
        <svg className={styles.svgOverlay} viewBox="0 0 500 360" preserveAspectRatio="none">
          {/* Route A (Congested Route) - Red */}
          <path 
            d="M 250 180 C 180 180, 120 220, 100 280" 
            fill="none" 
            stroke="#EF4444" 
            strokeWidth="3" 
            strokeDasharray="4 4"
            className={styles.dangerPath}
          />
          {/* Route B (AI Diverted Route) - Emerald */}
          <path 
            d="M 250 180 C 320 180, 380 140, 400 80" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth="3.5"
            className={styles.recommendedPath}
          />
        </svg>

        {/* Flowing Bus Indicator on Route B (AI Diverted Route) */}
        <div className={styles.flowingBus}>
          <div className={styles.flowingBusDot} />
          <Bus size={10} color="white" />
        </div>

        {/* Station Node A: Pushkara Station (Congested) */}
        <div className={styles.stationNodeA}>
          <div className={styles.nodeRedPulse} />
          <div className={styles.stationBadgeRed}>
            <AlertTriangle size={10} className={styles.iconWarning} />
            <div className={styles.badgeTextCol}>
              <p className={styles.stationName}>Pushkara Ghat Stn</p>
              <p className={styles.stationStatusRed}>HIGH CONGESTION</p>
            </div>
          </div>
        </div>

        {/* Station Node B: Saraswati Station (AI Diverted) */}
        <div className={styles.stationNodeB}>
          <div className={styles.nodeGreenPulse} />
          <div className={styles.stationBadgeGreen}>
            <CheckCircle size={10} className={styles.iconCheck} />
            <div className={styles.badgeTextCol}>
              <p className={styles.stationName}>Saraswati Ghat Stn</p>
              <p className={styles.stationStatusGreen}>DYNAMIC ROUTE ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Warning Indicator */}
        <div className={styles.alertOverlay}>
          <ShieldAlert size={14} className={styles.iconAlert} />
          <span className={styles.alertText}>
            <strong>APSRTC ALERT:</strong> Traffic bottlenecks on Route 07. Board Route 14-A to Saraswati.
          </span>
        </div>
      </div>

      {/* DATA INFOGRAPHIC BENTO GRID */}
      <div className={styles.bentoSection}>
        
        {/* CARD 1: THE AI OPTIMIZED SHUTTLE */}
        <div className={`${styles.optimalCard} ${ticketPurchased ? styles.purchasedGlow : ''}`}>
          <div className={styles.optimalContentCol}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.cardHeaderLeft}>
                <div className={styles.bulletGreen} />
                <h2 className={styles.cardTitle}>Bus Route 14-A • To Saraswati Ghat</h2>
              </div>
              <span className={styles.aiBadge}>AI CHOICE</span>
            </div>

            {/* Segmented Capacity Meter */}
            <div className={styles.capacityWrapper}>
              <div className={styles.segmentedMeter}>
                <div className={`${styles.meterSegment} ${styles.segmentFilled}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilled}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilled}`} />
                <div className={styles.meterSegment} />
                <div className={styles.meterSegment} />
                <div className={styles.meterSegment} />
                <div className={styles.meterSegment} />
                <div className={styles.meterSegment} />
                <div className={styles.meterSegment} />
                <div className={styles.meterSegment} />
              </div>
              <p className={styles.capacityText}>32 SEATS OPEN</p>
            </div>

            {/* Telemetry Row */}
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryItem}><Clock size={12} /> 3 Mins</span>
              <span className={styles.telemetryItemGreen}><Users size={12} /> 18% Safe</span>
              <span className={styles.telemetryItemSaffron}><Flame size={12} /> Muhurtham Valid</span>
            </div>

            {/* Action Target */}
            <button 
              className={`${styles.actionButton} ${ticketPurchased ? styles.actionActive : ''}`}
              onClick={() => setTicketPurchased(true)}
            >
              <span className={styles.buttonText}>
                {ticketPurchased ? (
                  <>
                    <CheckCircle size={13} className={styles.checkIcon} />
                    BOARDING PASS ISSUED (TAP TO VIEW)
                  </>
                ) : (
                  "TAP FOR BOARDING PASS →"
                )}
              </span>
            </button>
          </div>
        </div>

        {/* CARD 2: THE CONGESTED CONVOY */}
        <div className={styles.congestedCard}>
          <div className={styles.optimalContentCol}>
            <div className={styles.cardHeaderRow}>
              <div className={styles.cardHeaderLeft}>
                <div className={styles.bulletRed} />
                <h2 className={styles.congestedCardTitle}>Bus Route 07 • To Pushkara Ghat</h2>
              </div>
            </div>

            {/* Segmented Capacity Meter */}
            <div className={styles.capacityWrapper}>
              <div className={styles.segmentedMeter}>
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
                <div className={`${styles.meterSegment} ${styles.segmentFilledRed}`} />
              </div>
              <p className={styles.capacityTextRed}>98% SEATS PACKED</p>
            </div>

            {/* Telemetry Row */}
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryItemRed}><Clock size={12} /> Delay: 22 Mins</span>
              <span className={styles.telemetryItemRed}><Users size={12} /> Dest: 92% Overloaded</span>
            </div>

            {/* Action Target (Disabled band) */}
            <div className={styles.disabledBand}>
              BOARDING DEACTIVATED FOR SAFETY
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LiveTransport;
