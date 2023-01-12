import { ThreeDots } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { AppLoader } from './App,styled';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const routes = {
  HomePage: lazy(() => import('../pages/HomePage')),
  RegisterPage: lazy(() => import('../pages/RegisterPage')),
  LoginPage: lazy(() => import('../pages/LoginPage')),
  ContactsPage: lazy(() => import('../pages/ContactsPage')),
};

export const App = () => {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { HomePage, RegisterPage, LoginPage, ContactsPage } = routes;

  return isRefreshing ? (
    <AppLoader>
      <ThreeDots color="orange" />
    </AppLoader>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} redirectTo='/login'/>}
        />
      </Route>
    </Routes>
  );
};
