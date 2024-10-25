import { UserDetailDto } from '@apis/generated/data-contracts';
import DocumentLayout from '@components/layout/DocumentLayout';
import MainLayout from '@components/layout/MainLayout';
import ProtectedRoute from '@components/layout/ProtectedRoute';
import { ContactPage } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import ForgotPasswordPage from '@pages/authentication/forgotPassword';
import LoginPage from '@pages/authentication/login';
import ResetPasswordPage from '@pages/authentication/resetPassword';
import SignUpPage from '@pages/authentication/signup';
import DocumentationPage from '@pages/document';
import DocumentDetailPage from '@pages/document/documentDetail';
import DocumentUploadPage from '@pages/document/documentUpload';
import HomePage from '@pages/home';
import LearnPage from '@pages/learn';
import UserDetailPage from '@pages/users/UserDetailPage';
import UserManagePage from '@pages/users/UserManagePage';
import useAuthStore from '@store/authStore';
import { userInit } from '@store/constant';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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

              <Route element={<DocumentLayout />}>
                <Route path="/document" element={<DocumentationPage />} />
                <Route path="/document/:subjectId" element={<DocumentDetailPage />} />
                <Route path="/document/upload" element={<DocumentUploadPage />} />
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
