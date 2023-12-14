import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./components/Home"
import './App.css';
import HeroBanner from './components/HeroBanner';
import footer from './assets/footer.png'


import Info from './components/Info';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:action" element={<HeroBanner />} />
      </Routes>
    </BrowserRouter>
    
    <img className="footer" src={footer}/>
    </div>
  );
}

export default App;
