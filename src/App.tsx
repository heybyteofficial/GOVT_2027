import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LiveStatus from './components/LiveStatus/LiveStatus';
import QuickServices from './components/QuickServices/QuickServices';
import BottomNav from './components/BottomNav/BottomNav';
import './index.css';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfdfd' }}>
      <Header />
      <main style={{ paddingBottom: '120px' }}>
        <Hero />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <LiveStatus />
          <QuickServices />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
