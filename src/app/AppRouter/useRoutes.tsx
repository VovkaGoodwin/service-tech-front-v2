import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.tsx';

import { LoginPage } from 'pages/login';
import { SearchPage } from 'pages/search';
import { SwitchPage } from 'pages/switch';
import { PortPage } from 'pages/port';

type UseRoutesHook = (isAuthenticated: boolean) => ReturnType<typeof createBrowserRouter>
type RoutesConfig = Parameters<typeof createBrowserRouter>[0]

const useRoutes: UseRoutesHook = (isAuthenticated) => {
  let routesConfig: RoutesConfig;

  if (isAuthenticated) {
    routesConfig = [{
      path: '',
      element: (<MainLayout />),
      children: [{
        index: true,  
        path: '/',
        element: (<SearchPage />)
      }, {
        path: '/switch',
        element: (<SwitchPage />),
      }, {
        path: '/port',
        element: (<PortPage />)
      }]
    }];
  } else {
    routesConfig = [{
      path: '*',
      element: (<LoginPage/>)
    }];
  }

  return createBrowserRouter(routesConfig);
};

export default useRoutes;