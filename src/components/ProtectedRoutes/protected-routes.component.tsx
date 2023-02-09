import React from 'react';
import { Navigate } from 'react-router-dom';
import { PUBLIC_ROUTES } from '@/constants/routes/routes';

interface IProtectedRoutes {
  children: JSX.Element;
}

function useAuth() {
  return true;
}

const ProtectedRoutes = ({ children }: IProtectedRoutes) => {
  const auth = useAuth();

  if (!auth) {
    return <Navigate to={PUBLIC_ROUTES.HOME} replace />;
  }
  return children;
};

export default ProtectedRoutes;
