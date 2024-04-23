import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import LandingPage from 'pages/landingpage';
import CommonLayout from 'layout/CommonLayout';
import Localization from 'layout/MainLayout/Header/HeaderContent/Localization';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <>
          <Localization />
          <CommonLayout />
        </>
      ),
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
