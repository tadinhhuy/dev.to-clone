import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/constants/routes/routes';
import ProtectedRoutes from './components/ProtectedRoutes/protected-routes';

const HomePage = lazy(() => import('./pages/home'));
const UserPage = lazy(() => import('./pages/user'));

const publicRouteList = [
  {
    pathKey: PUBLIC_ROUTES.HOME,
    label: 'Home',
    component: <HomePage />,
  },
];

const privateRouteList = [
  {
    pathKey: PRIVATE_ROUTES.USER,
    label: 'User',
    component: <UserPage />,
  },
];

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRouteList?.map((publicRoute) => {
            const { pathKey, label, component } = publicRoute;
            return <Route key={label} path={pathKey} element={component} />;
          })}
          {privateRouteList?.map((privateRoute) => {
            const { pathKey, label, component } = privateRoute;
            return (
              <Route
                key={label}
                path={pathKey}
                element={<ProtectedRoutes>{component}</ProtectedRoutes>}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
