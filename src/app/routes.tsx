import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './views/pages/About';
import Main from './views/pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AllRoutes;
