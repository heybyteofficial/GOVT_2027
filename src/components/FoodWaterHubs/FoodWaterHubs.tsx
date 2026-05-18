import React, { useState } from 'react';
import { ArrowLeft, Check, Sparkles, Clock, UtensilsCrossed, Droplet, QrCode, X } from 'lucide-react';
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
    }, 900);
  };

  return (
    <div className={styles.outerContainer}>
      
      {/* FIXED HUD HEADER (15% Height approx) */}
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

      {/* DYNAMIC LIVE AVAILABILITY BENTO STACK */}
      <div className={styles.bentoContainer}>
        
        {/* CARD 1: THE AI-OPTIMIZED MEGA HUB */}
        <div className={styles.megaHubCard}>
          <div className={styles.cardHeaderRow}>
            <div className={styles.cardHeaderLeft}>
              <span className={styles.hubId}>LOGISTICS NODE 12</span>
              <h2 className={styles.hubName}>Hub 12 • Saraswati Sector Park</h2>
            </div>
            <span className={styles.aiBadge}>AI RECOMMENDED OPTIMAL STATE</span>
          </div>

          {/* Segmented Meter - 85% filled */}
          <div className={styles.meterSection}>
            <div className={styles.segmentedMeter}>
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilled}`} />
              <div className={styles.meterBlock} />
            </div>
            <span className={styles.supplyLabel}>
              SUPPLY LEVEL: ABUNDANT (5,000+ MEALS READY)
            </span>
          </div>

          {/* Metric Telemetry Row */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Clock size={12} /> Queue Wait
              </span>
              <span className={styles.telemetryValueGreen}>&lt; 2 MINS</span>
            </div>
            
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <UtensilsCrossed size={12} /> Menu Distribution
              </span>
              <span className={styles.telemetryValue}>FREE ANNADANAM / SATVIK</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Droplet size={12} /> Water Stations
              </span>
              <span className={styles.telemetryValue}>12 ACTIVE TAPS</span>
            </div>
          </div>

          {/* Action Trigger Bar */}
          <button 
            className={styles.actionButton}
            onClick={handleSpawnToken}
            disabled={generating}
          >
            <span className={styles.buttonText}>
              {generating ? (
                "GENERATING QR CODE..."
              ) : (
                <>
                  <QrCode size={14} />
                  TAP TO SPAWN MEAL QR TOKEN →
                </>
              )}
            </span>
          </button>
        </div>

        {/* CARD 2: THE REPLENISHING STALL (Opacity dropped to 70%) */}
        <div className={styles.replenishingCard}>
          <div className={styles.cardHeaderRow}>
            <div className={styles.cardHeaderLeft}>
              <span className={styles.hubId}>LOGISTICS NODE 04</span>
              <h2 className={styles.hubName}>Stall 04 • Main Ghat Gate Intersection</h2>
            </div>
          </div>

          {/* Segmented Meter - 15% filled */}
          <div className={styles.meterSection}>
            <div className={styles.segmentedMeter}>
              <div className={`${styles.meterBlock} ${styles.blockFilledCritical}`} />
              <div className={`${styles.meterBlock} ${styles.blockFilledCritical}`} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
              <div className={styles.meterBlock} />
            </div>
            <span className={styles.supplyLabelAmber}>
              SUPPLY LEVEL: CRITICAL (REPLENISHING)
            </span>
          </div>

          {/* Metric Telemetry Row */}
          <div className={styles.telemetryGrid}>
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Clock size={12} /> Queue Wait
              </span>
              <span className={styles.telemetryValueAmber}>~35 MINS (HEAVY SURGE)</span>
            </div>
            
            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Sparkles size={12} /> Next Supply Truck
              </span>
              <span className={styles.telemetryValue}>ETA 14 MINS</span>
            </div>

            <div className={styles.telemetryRow}>
              <span className={styles.telemetryLabel}>
                <Droplet size={12} /> Water Stations
              </span>
              <span className={styles.telemetryValue}>2 ACTIVE TAPS</span>
            </div>
          </div>

          {/* Action Disabled Target */}
          <div className={styles.disabledBand}>
            DIVERSION RECOMMENDED — PROCEED TO HUB 12
          </div>
        </div>

      </div>

      {/* TICKET QR SPAWNER MODAL DIALOG */}
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
              <Check size={10} /> SIGNED BY ICCC LOGISTICS
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
