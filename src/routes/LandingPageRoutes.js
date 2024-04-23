import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

// pages routing

// render - sample page
const LandingPage = Loadable(lazy(() => import('pages/landingpage')));

// ==============================|| MAIN ROUTING ||============================== //

const LandingPageRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <LandingPage />
      ),
    }
  ]
};

export default LandingPageRoutes;
