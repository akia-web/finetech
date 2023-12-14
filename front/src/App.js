import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from "./pages/Home"
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
    {/* <div className="header">
      <NavBar />
    </div>
    <div className='HeroBanner'>
    <HeroBanner />
    </div> */}
    </div>
  );
}

export default App;
