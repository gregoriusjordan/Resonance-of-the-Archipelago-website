import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import ResonanceRoutes from './Pages/Resonance/resonance'; 
import Melody from './Pages/Melody/melody';
import AboutUs from './Pages/aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resonance/*" element={<ResonanceRoutes />} />
        <Route path="/melody/*" element={<Melody />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
