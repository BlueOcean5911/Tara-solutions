import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// pages routing
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// render - sample page
const Dashboard = Loadable(lazy(() => import('pages/dashboard/dashboard')));
const PredictStudentPerformance = Loadable(lazy(() => import('pages/analytics/RiskDetector')));
const ComprehensiveAnalysis = Loadable(lazy(() => import('pages/analytics/StudentPerformance')));
const DropOutAnalysis = Loadable(lazy(() => import('pages/analytics/DropOutAnalysis')));
const RetentionAnalysis = Loadable(lazy(() => import('pages/analytics/RetentionAnalysis')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'analytics',
          children: [
            {
              path: 'risk-detector',
              element: <PredictStudentPerformance />
            },
            {
              path: 'student-performance',
              element: <ComprehensiveAnalysis />
            },
            {
              path: 'drop-out',
              element: <DropOutAnalysis />
            },
            {
              path: 'retention',
              element: <RetentionAnalysis />
            }
          ]
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    }
  ]
};

export default MainRoutes;
