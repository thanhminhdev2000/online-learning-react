import { UserDetailDto } from '@apis/generated/data-contracts';
import DocumentationLayout from '@components/layout/DocumentationLayout';
import ProtectedRoute from '@components/layout/ProtectedRoute';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import ForgotPasswordPage from '@pages/authentication/forgotPassword';
import LoginPage from '@pages/authentication/login';
import ResetPasswordPage from '@pages/authentication/resetPassword';
import SignUpPage from '@pages/authentication/signup';
import ContactPage from '@pages/contact';
import DocumentationPage from '@pages/documentation';
import DocumentationDetailPage from '@pages/documentation/documentationDetail';
import HomePage from '@pages/home';
import LearnPage from '@pages/learn';
import UserDetailPage from '@pages/users/UserDetailPage';
import UserManagePage from '@pages/users/UserManagePage';
import useAuthStore from '@store/authStore';
import { userInit } from '@store/constant';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

const queryClient = new QueryClient();

const App = () => {
  const { login, checkTokenExpiration } = useAuthStore();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user?.id) {
      login(user);
    } else {
      login(userInit as UserDetailDto);
    }
    checkTokenExpiration();
  }, [login, checkTokenExpiration]);

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<MainLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

              <Route element={<DocumentationLayout />}>
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/documentation/:subjectId" element={<DocumentationDetailPage />} />
              </Route>

              <Route path="/learn" element={<LearnPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/users/:userId" element={<UserDetailPage />} />

              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserManagePage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </Router>
      </LocalizationProvider>
    </QueryClientProvider>
  );
};

export default App;
