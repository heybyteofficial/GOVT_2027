import React from 'react';
import styles from './WhatsAppAssistant.module.css';

const WhatsAppAssistant: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.leftSection}>
            <div className={styles.waIconWrapper}>
              <svg viewBox="0 0 24 24" className={styles.waIcon} xmlns="http://www.w3.org/2000/svg">
                <path fill="#25D366" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a10.014 10.014 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.926-7.066A9.94 9.94 0 0 0 12.012 2z"/>
                <path fill="#FFF" d="M17.476 14.378c-.286-.143-1.692-.834-1.953-.93-.261-.095-.452-.143-.643.143-.19.286-.738.93-.905 1.121-.167.191-.334.215-.62.072-.285-.143-1.207-.445-2.3-1.417-.85-.756-1.423-1.69-1.589-1.976-.167-.286-.018-.44.125-.583.129-.129.286-.334.429-.5.143-.167.19-.286.286-.477.095-.19.047-.357-.024-.5-.071-.143-.643-1.549-.881-2.121-.233-.556-.469-.481-.643-.489-.167-.008-.357-.008-.548-.008s-.5.071-.762.357c-.262.286-1 .977-1 2.383 0 1.406 1.024 2.764 1.167 2.955.143.19 2.014 3.074 4.877 4.31.681.294 1.213.47 1.627.602.684.217 1.306.186 1.796.113.548-.082 1.692-.691 1.93-1.358.238-.667.238-1.239.167-1.358-.071-.119-.262-.19-.548-.333z"/>
              </svg>
            </div>
            <div className={styles.textGroup}>
              <span className={styles.subTextTop}>Need instant help?</span>
              <h3 className={styles.title}>Chat with PushkarAI</h3>
              <span className={styles.subTextBottom}>Official WhatsApp Assistant</span>
            </div>
          </div>
          
          <div className={styles.rightSection}>
            <div className={styles.robotWrapper}>
              <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 62 Q36 50 50 62" stroke="#0a4bcb" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M28 56 Q36 66 44 56" stroke="#0a4bcb" strokeWidth="1.5" fill="none"/>
                
                <path d="M17 34 A 4 4 0 0 0 17 48" fill="#0a4bcb"/>
                <path d="M55 34 A 4 4 0 0 1 55 48" fill="#0a4bcb"/>

                <rect x="17" y="24" width="38" height="30" rx="15" fill="#f8fafc" stroke="#0a4bcb" strokeWidth="2.5"/>
                
                <rect x="23" y="30" width="26" height="12" rx="6" fill="#0a4bcb"/>
                
                <circle cx="30" cy="36" r="2.5" fill="white"/>
                <circle cx="42" cy="36" r="2.5" fill="white"/>
                
                <path d="M30 46 Q36 50 42 46" stroke="#0a4bcb" strokeWidth="2" strokeLinecap="round"/>

                <path d="M36 24V17" stroke="#0a4bcb" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="36" cy="14" r="3" fill="#0a4bcb"/>
                <path d="M40 10 A 5 5 0 0 0 32 10" stroke="#0a4bcb" strokeWidth="2" strokeLinecap="round"/>

                <path d="M48 16 C48 8 54 4 60 4 C66 4 72 8 72 16 C72 23 66 26 62 26 L56 30 L57 24 C51 23 48 20 48 16 Z" fill="#0a4bcb"/>
                <circle cx="55" cy="15" r="2" fill="white"/>
                <circle cx="60" cy="15" r="2" fill="white"/>
                <circle cx="65" cy="15" r="2" fill="white"/>
              </svg>
            </div>
            
            <button className={styles.chatButton}>
              Chat Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAssistant;
