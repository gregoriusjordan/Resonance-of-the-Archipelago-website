import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Resonance from './Pages/Resonance/resonance'; 
import Melody from './Pages/Melody/melody';
import AboutUs from './Pages/aboutus';
import SignIn from './Pages/SignIn';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [prevLocation, setPrevLocation] = useState('/');

  const handleSignIn = (name) => {
    setUsername(name);
    setIsSignedIn(true);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <Navbar 
        isSignedIn={isSignedIn} 
        username={username} 
        handleLogout={handleLogout} 
        setPrevLocation={setPrevLocation}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resonance/*" element={<Resonance />} />
        <Route path="/melody/*" element={<Melody />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} prevLocation={prevLocation} />} />
      </Routes>
    </Router>
  );
};

export default App;