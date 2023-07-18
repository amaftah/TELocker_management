import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignInSide from './components/SignInSide';
import Man from './pages/man/man';
import Women from './pages/women/women';
import Lockers from './pages/lockers/lockers';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInSide />} />
        <Route path="/other" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/lockers" element={<Lockers />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
