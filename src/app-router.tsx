import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, RouteProps } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/constants/routes/routes';
import { ProtectedRoutes } from './components';
import { ArticleLayout, GlobalLayout } from './layouts';

const HomePage = lazy(() => import('./pages/home'));
const UserPage = lazy(() => import('./pages/user'));
const ListingPage = lazy(() => import('./pages/listings'));

type TRoute = {
  children?: TRoute[];
  key: string;
} & RouteProps;

const publicRouteList: TRoute[] = [
  {
    path: PUBLIC_ROUTES.HOME,
    key: 'Home',
    element: <HomePage />,
  },
  {
    path: PUBLIC_ROUTES.ARTICLE,
    key: 'Article',
    element: <ArticleLayout />,
  },
  { path: `${PUBLIC_ROUTES.LISTINGS}`, key: 'Listings', element: <ListingPage /> },
];

const privateRouteList: TRoute[] = [
  {
    path: PRIVATE_ROUTES.USER,
    key: 'User',
    element: <UserPage />,
  },
];

// const renderRoute = ({ routes }: { routes: TRoute[] }) => {
//   return routes?.map((route) => {
//     if (!route.children || route.children?.length === 0) {
//       return <Route key={route.key} element={route.element} path={route.path} />;
//     }
//     const { element: Layout } = route;
//     return (
//       <Routes>
//         <Route element={<Layout />}>
//           {renderRoute(route.children)}
//         </Route>
//       </Routes>
//     );
//   });
// };

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalLayout>
          <Routes>
            {publicRouteList?.map((publicRoute) => {
              const { path, element } = publicRoute;
              return <Route key={path} path={path} element={element} />;
            })}
            {privateRouteList?.map((privateRoute) => {
              const { path, element } = privateRoute;
              return (
                <Route
                  key={path}
                  path={path}
                  element={<ProtectedRoutes>{element} </ProtectedRoutes>}
                />
              );
            })}
          </Routes>
        </GlobalLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
