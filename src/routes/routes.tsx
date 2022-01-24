import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Path from '../pages/Path';

const Router: React.FC = () => (
    <Routes>
        <Route index element={<Home />}  />
        <Route path="/path" element={<Path />} />
    </Routes>
)

export default Router;