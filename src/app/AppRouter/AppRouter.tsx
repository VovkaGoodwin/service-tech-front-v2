import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { sessionSelectors } from 'entities/session';
import { useAppSelector } from 'shared/model';

import useRoutes from './useRoutes.tsx';

const AppRouter: FC = () => {
  const isAuthenticated = useAppSelector(sessionSelectors.isAuthenticated);
  const router = useRoutes(isAuthenticated);

  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;