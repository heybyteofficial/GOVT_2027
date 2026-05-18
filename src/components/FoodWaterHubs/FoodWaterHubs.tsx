import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock, UtensilsCrossed, Droplet, QrCode, AlertTriangle, Truck, X } from 'lucide-react';
import styles from './FoodWaterHubs.module.css';

interface FoodWaterHubsProps {
  onBack: () => void;
}

const FoodWaterHubs: React.FC<FoodWaterHubsProps> = ({ onBack }) => {
  const [tokenSpawned, setTokenSpawned] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleSpawnToken = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setTokenSpawned(true);
    }, 850);
  };

  return (
    <div className={styles.outerContainer}>
      
      {/* ── HIGH-STATUS LIGHT HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Food & Water Hubs</h1>
            <p className={styles.headerSubtitle}>SECTOR 3 • LIVE ICCC LOGISTICS FEED</p>
          </div>
        </div>
        
        <div className={styles.purityBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.purityText}>100% RO PURITY SIGNED</span>
        </div>
      </header>

      {/* ── SCROLLABLE CONTROLLER BODY ── */}
      <main className={styles.bentoContainer}>

        {/* ── NODE 12: THE AI-OPTIMIZED OPTIMAL STATE ── */}
        <section className={styles.megaHubCard}>
          
          {/* Node Headers */}
          <div className={styles.cardHeaderRow}>
            <div className={styles.cardHeaderLeft}>
              <p className={styles.hubId}>LOGISTICS NODE 12</p>
              <h2 className={styles.hubName}>Hub 12 • Saraswati Sector Park</h2>
            </div>
            <span className={styles.aiBadge}>
              AI RECOMMENDED OPTIMAL STATE
            </span>
          </div>

          {/* Segmented Visual Progress Bar */}
          <div className={styles.segmentedMeter}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`${styles.meterBlock} ${styles.blockFilled}`} />
            ))}
            <div className={styles.meterBlock} />
          </div>
          
          <p className={styles.supplyLabel}>
            <CheckCircle2 size={14} /> SUPPLY LEVEL: ABUNDANT (5,000+ MEALS READY)
          </p>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '4px 0' }} />

          {/* Telemetry Metrics Layer */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Clock size={16} className={styles.telemetryIcon} /> Queue Wait
              </span>
              <span className={styles.telemetryValueGreen}>&lt; 2 MINS</span>
            </div>
            
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <UtensilsCrossed size={16} className={styles.telemetryIcon} /> Menu Distribution
              </span>
              <span className={styles.telemetryValue}>FREE ANNADANAM / SATVIK</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Droplet size={16} className={styles.telemetryIcon} /> Water Stations
              </span>
              <span className={styles.telemetryValue}>12 ACTIVE TAPS</span>
            </div>
          </div>

          {/* Saffron Action Target */}
          <button 
            className={styles.actionButton}
            onClick={handleSpawnToken}
            disabled={generating}
          >
            <QrCode size={16} />
            <span>{generating ? "Spawning Token..." : "Tap to Spawn Meal QR Token →"}</span>
          </button>
        </section>


        {/* ── NODE 04: THE CRITICAL ZONE (OPACITY LOWERED) ── */}
        <section className={styles.replenishingCard}>
          
          {/* Node Headers */}
          <div className={styles.cardHeaderRow}>
            <div className={styles.cardHeaderLeft}>
              <p className={styles.hubId}>LOGISTICS NODE 04</p>
              <h2 className={styles.hubName} style={{ color: '#475569' }}>Stall 04 • Main Ghat Gate Intersection</h2>
            </div>
          </div>

          {/* Segmented Visual Progress Bar */}
          <div className={styles.segmentedMeter}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className={`${styles.meterBlock} ${styles.blockFilledCritical}`} />
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.meterBlock} />
            ))}
          </div>
          
          <p className={styles.supplyLabelAmber}>
            <AlertTriangle size={14} /> SUPPLY LEVEL: CRITICAL (REPLENISHING)
          </p>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#f1f5f9', margin: '4px 0' }} />

          {/* Telemetry Metrics Layer */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Clock size={16} className={styles.telemetryIcon} /> Queue Wait
              </span>
              <span className={styles.telemetryValueAmber}>~35 MINS (HEAVY SURGE)</span>
            </div>
            
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Truck size={16} className={styles.telemetryIcon} /> Next Supply Truck
              </span>
              <span className={styles.telemetryValue} style={{ color: '#64748b' }}>ETA 14 MINS</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Droplet size={16} className={styles.telemetryIcon} /> Water Stations
              </span>
              <span className={styles.telemetryValue} style={{ color: '#64748b' }}>2 ACTIVE TAPS</span>
            </div>
          </div>

          {/* Disabled Placeholding Banner */}
          <div className={styles.disabledBand}>
            Diversion Recommended — Proceed to Hub 12
          </div>
        </section>

      </main>

      {/* DYNAMIC QR CODE SPAWNER MODAL */}
      {tokenSpawned && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button 
              className={styles.modalCloseButton} 
              onClick={() => setTokenSpawned(false)}
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <UtensilsCrossed size={28} color="#0d9488" style={{ marginTop: '8px' }} />
            <h3 className={styles.modalTitle}>Meal Token Generated</h3>
            <p className={styles.modalSubtitle}>AP PILGRIM DIET LAYER VOUCHER</p>

            {/* QR Scanner Display */}
            <div className={styles.qrWrapper}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PUSHKARALU-MEAL-TOKEN-HUB12-3084" 
                alt="Meal QR Token" 
                className={styles.qrImage}
              />
            </div>

            <div className={styles.ticketStatus}>
              <CheckCircle2 size={10} /> SIGNED BY ICCC LOGISTICS
            </div>

            {/* Details Receipt Block */}
            <div className={styles.ticketDetails}>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>HUB LOCATION</span>
                <span className={styles.ticketValue}>Saraswati Park (Hub 12)</span>
              </div>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>TOKEN VALUE</span>
                <span className={styles.ticketValue}>1x SATVIK MEAL + RO WATER</span>
              </div>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>QUEUE PRIORITY</span>
                <span className={styles.ticketValue}>EXPRESS (&lt; 2 MIN WAIT)</span>
              </div>
              <div className={styles.ticketRow}>
                <span className={styles.ticketLabel}>VALID UNTIL</span>
                <span className={styles.ticketValue}>23:59 SEC-3 ONLY</span>
              </div>
            </div>

            <button 
              className={styles.modalActionButton}
              onClick={() => setTokenSpawned(false)}
            >
              DONE • READY TO BOARD STALL
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FoodWaterHubs;
