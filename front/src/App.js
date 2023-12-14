import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./components/Home"
import './App.css';
import HeroBanner from './components/HeroBanner';


import Info from './components/Info';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:action" element={<HeroBanner />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
