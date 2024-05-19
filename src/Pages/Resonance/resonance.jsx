import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ResonanceList from './resonanceList';
import ResonanceDetails from './resonanceDetails';
import Navbar from "../../Components/Navbar/Navbar";

const Resonance = () => (
  <div>
    <Outlet />
  </div>
);

const ResonanceRoutes = () => (
  <Routes>
    <Route path="/" element={<Resonance />}>
      <Route index element={<ResonanceList />} />
      <Route path="detail/:index" element={<ResonanceDetails />} />
    </Route>
  </Routes>
);

export default ResonanceRoutes;
