import React, { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/dashboard-layout';
import { LinearProgress } from '@material-ui/core';
// import DashboardDefaultContent from './views/dashboard/dashboard-default-contect';
// import SettingaAndPrivacy from './views/dashboard/settings-and-privacy';
// import About from './views/pages/About';
import Main from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const About = lazy(() => import('./views/pages/About'));
const DashboardDefaultContent = lazy(
  () => import('./views/dashboard/dashboard-default-contect'),
);
const SettingaAndPrivacy = lazy(
  () => import('./views/dashboard/settings-and-privacy'),
);

const AllRoutes: FC = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/dashboard/settings-and-privacy"
          element={
            <Dashboard>
              <SettingaAndPrivacy />
            </Dashboard>
          }
        />
        <Route
          path={'/dashboard'}
          element={
            <Dashboard>
              <DashboardDefaultContent />
            </Dashboard>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
