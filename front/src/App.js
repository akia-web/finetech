import './App.css';
import HeroBanner from './components/HeroBanner';
import Info from './components/Info';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <div className="header">
      <NavBar />
    </div>
    <div className='HeroBanner'>
    <HeroBanner />
    </div>
    <div>
      <Info />
    </div>
    </>
  );
}

export default App;
