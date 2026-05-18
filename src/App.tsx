import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LiveStatus from './components/LiveStatus/LiveStatus';
import QuickServices from './components/QuickServices/QuickServices';
import WhatsAppAssistant from './components/WhatsAppAssistant/WhatsAppAssistant';
import Profile from './components/Profile/Profile';
import Updates from './components/Updates/Updates';
import PilgrimMap from './components/PilgrimMap/PilgrimMap';
import BottomNav from './components/BottomNav/BottomNav';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfdfd', overflowX: 'hidden' }}>
      <Header />
      <main style={{ paddingBottom: '180px' }}>
        {activeTab === 'home' ? (
          <>
            <Hero />
            <div style={{ position: 'relative', zIndex: 10 }}>
              <LiveStatus />
              <QuickServices />
              <WhatsAppAssistant />
            </div>
          </>
        ) : activeTab === 'map' ? (
          <PilgrimMap />
        ) : activeTab === 'updates' ? (
          <Updates />
        ) : activeTab === 'profile' ? (
          <Profile />
        ) : (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#64748b' }}>
            <h2>Coming Soon</h2>
            <p>This module is under development for the mock prototype.</p>
          </div>
        )}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
