import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MelodyList from './melodyList';
import MelodyDetails from './melodyDetails';
import Navbar from "../../Components/Navbar/Navbar";

const Melody = () => (
  <div>
    <Outlet />
  </div>
);

const MelodyRoutes = () => (
  <Routes>
    <Route path="/" element={<Melody />}>
      <Route index element={<MelodyList />} />
      <Route path="detail/:index" element={<MelodyDetails />} />
    </Route>
  </Routes>
);

export default MelodyRoutes;
