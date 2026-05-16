import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LiveStatus from './components/LiveStatus/LiveStatus';
import QuickServices from './components/QuickServices/QuickServices';
import BottomNav from './components/BottomNav/BottomNav';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Header />
      <main>
        <Hero />
        <LiveStatus />
        <QuickServices />
        
        {/* Padding for bottom nav */}
        <div style={{ height: '100px' }}></div>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
