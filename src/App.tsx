import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LiveStatus from './components/LiveStatus/LiveStatus';
import QuickServices from './components/QuickServices/QuickServices';
import WhatsAppAssistant from './components/WhatsAppAssistant/WhatsAppAssistant';
import BottomNav from './components/BottomNav/BottomNav';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfdfd', overflowX: 'hidden' }}>
      <Header />
      <main style={{ paddingBottom: '180px' }}>
        <Hero />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <LiveStatus />
          <QuickServices />
          <WhatsAppAssistant />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
