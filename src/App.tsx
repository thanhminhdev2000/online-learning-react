import MainLayout from '@components/layout/MainLayout';
import PageNotFound from '@components/layout/PageNotFound';
import ProtectedRoute from '@components/layout/ProtectedRoute';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import ForgotPasswordPage from '@pages/authentication/forgotPassword';
import LoginPage from '@pages/authentication/login';
import ResetPasswordPage from '@pages/authentication/resetPassword';
import SignUpPage from '@pages/authentication/signup';
import ContactPage from '@pages/contact';
import DocumentPage from '@pages/document';
import HomePage from '@pages/home';
import UserDetailPage from '@pages/users/UserDetailPage';
import UserManagePage from '@pages/users/UserManagePage';
import useAuthStore from '@store/authStore';
import { userInit } from '@store/constant';
import { useEffect } from 'react';

import { UserDetailDto } from '@api-swagger/data-contracts';
import CourseDetailPage from '@pages/course/components/CourseDetail';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useGetClasses } from './hooks/document.hook';
import CoursePage from './pages/course';
import useClassStore from './store/classStore';

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
      </Router>
    </LocalizationProvider>
  );
};

export default App;
