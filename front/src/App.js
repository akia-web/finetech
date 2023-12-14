import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./components/Home"
import './App.css';
import HeroBanner from './components/HeroBanner';


import Info from './components/Info';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:action" element={<HeroBanner />} />
      </Routes>
    </BrowserRouter>
    {/* <div className="header">
      <NavBar />
    </div>
    <div className='HeroBanner'>
    <HeroBanner />
    </div> */}

    {/* <div>
      <Home />
    </div> */}
    {/* <div>
      <Info />
    </div> */}
    </div>
  );
}

export default App;
