import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from 'pages/login';
import App from '../App.tsx';

type UseRoutesHook = (isAuthenticated: boolean) => ReturnType<typeof createBrowserRouter>
type RoutesConfig = Parameters<typeof createBrowserRouter>[0]

const useRoutes: UseRoutesHook = (isAuthenticated) => {
  let routesConfig: RoutesConfig;

  if (isAuthenticated) {
    routesConfig = [{
      path: '/',
      element: <App />
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