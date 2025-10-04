import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ROUTES} from '../config/constants'
import HomePage from '../pages/common/HomePage';
import Dashboard from '../pages/super-admin/Dashboard';




const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route
            path={ROUTES.HOME}
            element={<HomePage/>}
        />

        <Route
            path={ROUTES.DASHBORD}
            element={<Dashboard/>}
        />
    </Routes>
  );
};

export default AppRoutes;