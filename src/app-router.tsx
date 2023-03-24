import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/constants/routes/routes';
import ArticleLayout from './components/layouts/article-layout';
import ProtectedRoutes from './components/protected-routes/protected-routes.comp';

const HomePage = lazy(() => import('./pages/home'));
const UserPage = lazy(() => import('./pages/user'));

const publicRouteList = [
  {
    pathKey: PUBLIC_ROUTES.HOME,
    label: 'Home',
    component: <HomePage />,
  },
  {
    pathKey: PUBLIC_ROUTES.ARTICLE,
    label: 'Article',
    component: <ArticleLayout />,
  },
];

const privateRouteList = [
  {
    pathKey: PRIVATE_ROUTES.USER,
    label: 'User',
    component: <UserPage />,
  },
];

const AppRouter = () => {
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
