import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import LandingPage from 'pages/landingpage';
import CommonLayout from 'layout/CommonLayout';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <CommonLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        }
      ]
    },
    LoginRoutes,
    MainRoutes
  ]);
}
