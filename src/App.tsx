import MainLayout from '@components/layout/MainLayout';
import PageNotFound from '@components/layout/PageNotFound';
import ProtectedRoute from '@components/layout/ProtectedRoute';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import HomePage from '@pages/home';
import useAuthStore from '@store/authStore';
import { userInit } from '@store/constant';
import { lazy, Suspense, useEffect } from 'react';

import { useGetClasses } from '@api-hooks/document.hook';
import { UserDetailDto } from '@api-swagger/data-contracts';
import Loader from '@components/Loader';
import LoginPage from '@pages/authentication/login';
import SignUpPage from '@pages/authentication/signup';
import UserDetailPage from '@pages/users/UserDetailPage';
import UserManagePage from '@pages/users/UserManagePage';
import useClassStore from '@store/classStore';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const ForgotPasswordPage = lazy(() => import('@pages/authentication/forgotPassword'));
const ResetPasswordPage = lazy(() => import('@pages/authentication/resetPassword'));
const DocumentPage = lazy(() => import('@pages/document'));
const CoursePage = lazy(() => import('@pages/course'));
const CourseDetailPage = lazy(() => import('@pages/course/components/CourseDetail'));
const ContactPage = lazy(() => import('@pages/contact'));

const App = () => {
  const { login, checkTokenExpiration } = useAuthStore();
  const { setClasses } = useClassStore();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user?.id) {
      login(user);
    } else {
      login(userInit as UserDetailDto);
    }
    checkTokenExpiration();
  }, [login, checkTokenExpiration]);

  const { data = [] } = useGetClasses();

  useEffect(() => {
    if (data?.length) {
      setClasses(data);
    }
  }, [data, setClasses]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<MainLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

              <Route path="/documents" element={<DocumentPage />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/courses/:id" element={<CourseDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/users/:id" element={<UserDetailPage />} />

              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserManagePage />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </LocalizationProvider>
  );
};

export default App;
