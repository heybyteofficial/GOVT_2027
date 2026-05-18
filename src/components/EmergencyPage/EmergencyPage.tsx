import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Shield, Phone, MapPin, ShieldAlert, Cpu, Radio, Activity, AlertTriangle, MessageSquare, X } from 'lucide-react';
import styles from './EmergencyPage.module.css';

interface EmergencyPageProps {
  onBack: () => void;
}

const EmergencyPage: React.FC<EmergencyPageProps> = ({ onBack }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isTriggered, setIsTriggered] = useState(false);

  const timerRef = useRef<any>(null);
  const progressRef = useRef(0);

  // Press and Hold Handlers
  const startHold = () => {
    if (isTriggered) return;
    setIsHolding(true);
    progressRef.current = 0;
    setHoldProgress(0);

    // Increment progress by 2% every 60ms (roughly 3 seconds to reach 100%)
    timerRef.current = setInterval(() => {
      progressRef.current += 2;
      if (progressRef.current >= 100) {
        progressRef.current = 100;
        setHoldProgress(100);
        setIsTriggered(true);
        setIsHolding(false);
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        setHoldProgress(progressRef.current);
      }
    }, 60);
  };

  const endHold = () => {
    setIsHolding(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isTriggered) {
      setHoldProgress(0);
      progressRef.current = 0;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCancelSOS = () => {
    if (confirm("Are you sure you want to cancel this emergency broadcast? This will alert responders that you are safe.")) {
      setIsTriggered(false);
      setHoldProgress(0);
      progressRef.current = 0;
    }
  };

  // SVG Circular progress math
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (holdProgress / 100) * circumference;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.meshBg} />

      <div className={styles.viewContainer}>
        {/* OFFICIAL HEADER */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <button className={styles.backButton} onClick={onBack}>
              <ArrowLeft size={20} />
            </button>

            <div className={styles.secureBadge}>
              <span className={styles.pulseGreen} />
              <Shield size={12} className={styles.shieldIcon} />
              <span className={styles.badgeText}>SECURE GOVT CONNECTION</span>
            </div>
          </div>

          <div className={styles.headerTitleArea}>
            <h1 className={styles.title}>EMERGENCY SOS</h1>
            <p className={styles.subtitle}>
              Broadcasting to Verified First Responders & Nearby Volunteers.
            </p>
          </div>
        </header>

        {/* Dynamic UI Switching */}
        {!isTriggered ? (
          <>
            {/* THE INFO BENTO GRID */}
            <div className={styles.bentoGrid}>

              {/* Card A: Live Location */}
              <div className={styles.bentoCard}>
                <div className={styles.cardHeader}>
                  <MapPin size={16} className={styles.iconRed} />
                  <span className={styles.cardLabel}>LIVE LOCATION</span>
                </div>
                <div className={styles.cardMain}>
                  <div className={styles.locationPill}>
                    <Activity size={12} className={styles.pulseActivity} />
                    <span>GPS Precision: 3m</span>
                  </div>
                  <h3 className={styles.coordString}>17.0005° N, 81.7774° E</h3>
                  <p className={styles.cardSubText}>Rajahmundry, AP Pilgrim Grid</p>
                </div>
              </div>

              {/* Card B: Broadcast Radius */}
              <div className={styles.bentoCard}>
                <div className={styles.cardHeader}>
                  <Radio size={16} className={styles.iconRed} />
                  <span className={styles.cardLabel}>BROADCAST RANGE</span>
                </div>
                <div className={styles.cardMain}>
                  <div className={styles.volunteersBadge}>
                    <span className={styles.pulseGreenSmall} />
                    <span>42 Responders Online</span>
                  </div>
                  <h3 className={styles.coordString}>1.5 km Radius</h3>
                  <p className={styles.cardSubText}>Covering local sector guards & EMS</p>
                </div>
              </div>

            </div>

            {/* CORE INTERACTIVE "HOLD TO BROADCAST" BUTTON */}
            <div className={styles.beaconControlSection}>
              <div className={styles.beaconInstruction}>
                <AlertTriangle size={14} className={styles.warnIcon} />
                <span>{isHolding ? 'HOLDING... KEEP PRESSING' : 'HOLD FOR 3 SECS TO BROADCAST DISTRESS'}</span>
              </div>

              <div className={styles.beaconOuterFrame}>
                {/* SVG Circular Progress Ring */}
                <svg className={styles.progressRing} width="130" height="130">
                  <circle
                    className={styles.progressRingBg}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="6"
                    fill="transparent"
                    r={radius}
                    cx="65"
                    cy="65"
                  />
                  <circle
                    className={styles.progressRingBar}
                    stroke="#EF4444"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="65"
                    cy="65"
                  />
                </svg>

                {/* Core Circular Button */}
                <button
                  className={`${styles.holdButton} ${isHolding ? styles.buttonHolding : ''}`}
                  onMouseDown={startHold}
                  onMouseUp={endHold}
                  onMouseLeave={endHold}
                  onTouchStart={startHold}
                  onTouchEnd={endHold}
                  aria-label="Hold to Broadcast Distress"
                >
                  <div className={styles.holdButtonCore}>
                    <ShieldAlert size={36} color="white" strokeWidth={2.5} className={styles.alertIcon} />
                  </div>
                </button>
              </div>

              <p className={styles.disclaimerText}>
                Intentionally broadcasting false distress signals is a punishable offense.
              </p>
            </div>
          </>
        ) : (
          /* RESPONDER CONNECTED STATE (Conditional UI) */
          <div className={styles.connectedView}>

            {/* Beacon Active Header */}
            <div className={styles.activeBanner}>
              <Radio size={24} className={styles.broadcastingIcon} />
              <div>
                <h2 className={styles.activeTitle}>SOS BEACON BROADCASTING</h2>
                <p className={styles.activeSubtitle}>GPS target actively monitored by Rajahmundry ICCC</p>
              </div>
            </div>

            {/* Interactive Vector Route Map */}
            <div className={styles.connectedMapFrame}>
              <svg viewBox="0 0 200 100" className={styles.mapGridSvg}>
                {/* Grid patterns */}
                <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="150" y1="0" x2="150" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                {/* Custom simulated route path */}
                <path
                  d="M30,80 Q80,20 140,50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeDasharray="6,6"
                />

                {/* Glowing user target */}
                <circle cx="30" cy="80" r="6" fill="#EF4444" />
                <circle cx="30" cy="80" r="14" fill="none" stroke="#EF4444" strokeWidth="1.5" className={styles.targetPulse} />

                {/* Moving Responder icon */}
                <circle cx="140" cy="50" r="6" fill="#10B981" />
                <circle cx="140" cy="50" r="14" fill="none" stroke="#10B981" strokeWidth="1.5" className={styles.responderPulse} />
              </svg>
              <div className={styles.mapLabels}>
                <span className={styles.mapLabelUser}>You (Sector 4)</span>
                <span className={styles.mapLabelResp}>Responder Approaching</span>
              </div>
            </div>

            {/* Responder Profile Card */}
            <div className={styles.responderCard}>
              <div className={styles.responderHeader}>
                <div className={styles.avatarCircle}>
                  <Cpu size={24} className={styles.avatarIcon} />
                </div>
                <div className={styles.responderMeta}>
                  <h3 className={styles.respName}>Dr. Amara</h3>
                  <p className={styles.respRole}>Verified Medical Volunteer</p>
                </div>
                <span className={styles.verifBadge}>VERIFIED</span>
              </div>

              <div className={styles.distanceBlock}>
                <div className={styles.distCol}>
                  <span className={styles.distLabel}>DISTANCE</span>
                  <span className={styles.distVal}>450 meters</span>
                </div>
                <div className={styles.distCol}>
                  <span className={styles.distLabel}>ETA</span>
                  <span className={styles.distValGreen}>3 mins away</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionRow}>
                <a href="tel:911" className={styles.callButton}>
                  <Phone size={16} />
                  <span>Call Responder</span>
                </a>
                <button className={styles.chatButton} onClick={() => alert("Establishing secure encrypted endpoint...")}>
                  <MessageSquare size={16} />
                  <span>Secure Chat</span>
                </button>
              </div>
            </div>

            {/* Cancel Button */}
            <button className={styles.cancelSOSButton} onClick={handleCancelSOS}>
              <X size={16} />
              <span>Cancel Emergency distress broadcast</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default EmergencyPage;
