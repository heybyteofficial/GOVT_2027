import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LiveStatus from './components/LiveStatus/LiveStatus';
import QuickServices from './components/QuickServices/QuickServices';
import WhatsAppAssistant from './components/WhatsAppAssistant/WhatsAppAssistant';
import Profile from './components/Profile/Profile';
import Updates from './components/Updates/Updates';
import PilgrimMap from './components/PilgrimMap/PilgrimMap';
import GhatRecommendation from './components/GhatRecommendation/GhatRecommendation';
import LiveTransport from './components/LiveTransport/LiveTransport';
import ParkingFinder from './components/ParkingFinder/ParkingFinder';
import FoodWaterHubs from './components/FoodWaterHubs/FoodWaterHubs';
import EmergencyGrid from './components/EmergencyGrid/EmergencyGrid';
import SmartToilets from './components/SmartToilets/SmartToilets';
import TransitCamps from './components/TransitCamps/TransitCamps';
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
              <QuickServices onSelectService={(service) => setActiveTab(service)} />
              <WhatsAppAssistant />
            </div>
          </>
        ) : activeTab === 'ghat-recommendation' ? (
          <GhatRecommendation onBack={() => setActiveTab('home')} />
        ) : activeTab === 'live-transport' ? (
          <LiveTransport onBack={() => setActiveTab('home')} />
        ) : activeTab === 'parking-finder' ? (
          <ParkingFinder onBack={() => setActiveTab('home')} />
        ) : activeTab === 'food-water' ? (
          <FoodWaterHubs onBack={() => setActiveTab('home')} />
        ) : activeTab === 'emergency' ? (
          <EmergencyGrid onBack={() => setActiveTab('home')} />
        ) : activeTab === 'toilets' ? (
          <SmartToilets onBack={() => setActiveTab('home')} />
        ) : activeTab === 'transit-camps' ? (
          <TransitCamps onBack={() => setActiveTab('home')} />
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
