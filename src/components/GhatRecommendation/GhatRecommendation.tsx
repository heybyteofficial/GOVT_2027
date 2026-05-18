import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Compass, Users, Clock, Flame, Navigation, AlertTriangle, CheckCircle, Bus, ShieldAlert } from 'lucide-react';
import styles from './GhatRecommendation.module.css';

interface GhatRecommendationProps {
  onBack: () => void;
}

const GhatRecommendation: React.FC<GhatRecommendationProps> = ({ onBack }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [routeActive, setRouteActive] = useState(false);
  const timerRef = useRef<any>(null);

  // Simulated Press & Hold progress timer for premium haptic interaction
  useEffect(() => {
    if (isHolding && holdProgress < 100) {
      timerRef.current = setInterval(() => {
        setHoldProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timerRef.current);
            setRouteActive(true);
            return 100;
          }
          return prev + 4;
        });
      }, 50);
    } else if (!isHolding) {
      if (timerRef.current) clearInterval(timerRef.current);
      setHoldProgress(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHolding, holdProgress]);

  return (
    <div className={styles.outerContainer}>
      
      {/* FIXED COMPACT HEADER */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={onBack} aria-label="Back">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>Nearby Bathing Ghats</h1>
            <p className={styles.headerSubtitle}>RADIUS: 2.0KM • REGION 3</p>
          </div>
        </div>
        
        <div className={styles.liveBadge}>
          <span className={styles.pulseGreen} />
          <span className={styles.liveText}>LIVE ICCC FEED</span>
        </div>
      </header>

      {/* VISUAL MAP SYSTEM - High Fidelity Photo Base */}
      <div className={styles.mapContainer}>
        {/* Techy HUD overlays on top of the original map background photo */}
        <div className={styles.radarGrid} />
        <div className={styles.radarRingOuter} />
        <div className={styles.radarRingInner} />

        {/* MAP MARKER: USER POSITION */}
        <div className={styles.userMarker}>
          <div className={styles.userMarkerPing} />
          <div className={styles.userMarkerDot}>
            <Compass size={12} className={styles.spinSlow} />
          </div>
          <span className={styles.userLabel}>YOU</span>
        </div>

        {/* SVG PATH DRAWING (Responsive Viewbox mapping coordinates on 500x380 viewport) */}
        <svg className={styles.svgOverlay} viewBox="0 0 500 380" preserveAspectRatio="none">
          {/* Path to Dangerous Ghat (Red) */}
          <path 
            d="M 175 285 Q 110 240 75 171" 
            fill="none" 
            stroke="#EF4444" 
            strokeWidth="2.5" 
            strokeDasharray="4 4"
            className={styles.dangerPath}
          />
          {/* Path to Safe Recommended Ghat (Green) */}
          <path 
            d="M 175 285 Q 260 210 300 57" 
            fill="none" 
            stroke="#0D9488" 
            strokeWidth={routeActive ? "4.5" : "2.5"} 
            strokeDasharray={routeActive ? "0" : "6 4"}
            className={`${styles.recommendedPath} ${routeActive ? styles.pathActive : ''}`}
          />
        </svg>

        {/* MAP MARKER A: DANGER OVERLOAD GHAT */}
        <div className={styles.dangerMarker}>
          <div className={styles.markerPulseRed} />
          <div className={styles.dangerCardCompact}>
            <AlertTriangle size={10} className={styles.iconRed} />
            <div className={styles.markerText}>
              <p className={styles.markerName}>Pushkara (350m)</p>
              <p className={styles.markerMetaRed}>92% OVERLOAD</p>
            </div>
          </div>
        </div>

        {/* MAP MARKER B: AI OPTIMIZED GHAT */}
        <div className={styles.optimalMarker}>
          <div className={styles.markerPulseGreen} />
          <div className={styles.optimalCardCompact}>
            <CheckCircle size={11} className={styles.iconGreen} />
            <div className={styles.markerText}>
              <p className={styles.markerName}>Saraswati (1.2km)</p>
              <p className={styles.markerMetaGreen}>
                <span>18% SAFE STATE</span>
                <span className={styles.aiTagSmall}>AI</span>
              </p>
            </div>
          </div>
        </div>

        {/* TOP STATUS OVERLAY METRIC */}
        <div className={styles.warningOverlay}>
          <ShieldAlert size={16} className={styles.alertIcon} />
          <p className={styles.warningText}>
            <strong>CROWD BLOCKADE:</strong> High surge at your nearest node. Divert to <span className={styles.divertLink}>Saraswati Ghat</span> to access active safe slot windows.
          </p>
        </div>
      </div>

      {/* DATA INFOGRAPHIC BENTO GRID */}
      <div className={styles.bentoSection}>
        
        {/* CARD 1: THE CRITICAL TRAP ZONE */}
        <div className={styles.dangerBentoCard}>
          <div className={styles.bentoCardContent}>
            <div className={styles.bentoCardInfo}>
              <div className={styles.bentoCardTitleRow}>
                <div className={styles.bulletRed} />
                <h2 className={styles.bentoCardTitle}>01. Pushkara Ghat</h2>
              </div>
              {/* Visual Progress Bar */}
              <div className={styles.progressTrack}>
                <div className={styles.progressBarRed} style={{ width: '92%' }} />
              </div>
              <div className={styles.bentoMetrics}>
                <span className={styles.metricTextRed}><Users size={12} /> 92%</span>
                <span className={styles.metricText}><Clock size={12} /> ~45m Wait</span>
              </div>
            </div>
            <div className={styles.bentoBadgeCol}>
              <span className={styles.avoidBadge}>AVOID</span>
              <p className={styles.badgeSub}>RISK ALERT</p>
            </div>
          </div>
        </div>

        {/* CARD 2: PREMIUM AI RECOMMENDATION TARGET */}
        <div className={`${styles.optimalBentoCard} ${routeActive ? styles.optimalActive : ''}`}>
          
          <div className={styles.bentoCardContentCol}>
            <div className={styles.optimalCardTop}>
              <div className={styles.bentoCardInfoFull}>
                <div className={styles.bentoCardTitleRow}>
                  <div className={styles.bulletGreen} />
                  <h2 className={styles.optimalCardTitle}>02. Saraswati Ghat</h2>
                  <span className={styles.aiBadgeLabel}>AI CHOICE</span>
                </div>
                {/* Visual Progress Bar */}
                <div className={styles.progressTrack}>
                  <div className={styles.progressBarGreen} style={{ width: '18%' }} />
                </div>
                <div className={styles.bentoMetrics}>
                  <span className={styles.metricTextGreen}><Users size={12} /> 18% SAFE</span>
                  <span className={styles.metricText}><Clock size={12} /> 4m Wait</span>
                  <span className={styles.metricTextSaffron}><Flame size={12} /> Muhurtham ✓</span>
                </div>
              </div>
              
              <div className={styles.optimalRightCol}>
                <span className={styles.busBadge}>
                  <Bus size={12} /> BUS: 4m
                </span>
                <p className={styles.distanceLabel}>1.2 KM AWAY</p>
              </div>
            </div>

            {/* DYNAMIC HAPTIC ACTION PROGRESS TRACKER BUTTON */}
            <button 
              onMouseDown={() => setIsHolding(true)}
              onMouseUp={() => setIsHolding(false)}
              onMouseLeave={() => setIsHolding(false)}
              onTouchStart={() => setIsHolding(true)}
              onTouchEnd={() => setIsHolding(false)}
              className={`${styles.actionButton} ${routeActive ? styles.actionActive : ''}`}
            >
              {/* Live Action Hold Fill State Background mapping */}
              <div 
                className={styles.buttonFillState} 
                style={{ width: `${holdProgress}%` }}
              />
              
              <span className={styles.buttonText}>
                {routeActive ? (
                  <>
                    <Navigation size={13} className={styles.navigationIcon} /> 
                    ROUTE ENGAGED • EN ROUTE
                  </>
                ) : isHolding ? (
                  `HOLDING... ${holdProgress}%`
                ) : (
                  "HOLD TO ENGAGE ROUTING →"
                )}
              </span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default GhatRecommendation;
