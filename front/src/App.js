import './App.css';
import HeroBanner from './components/HeroBanner';
import Home from './components/Home';
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

    {/* <div>
      <Home />
    </div> */}
    {/* <div>
      <Info />
    </div> */}
    </>
  );
}

export default App;
