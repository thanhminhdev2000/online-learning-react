import Layout from '@components/layout';
import AboutPage from '@pages/about';
import UserProfile from '@pages/authentication/users/userProfile';
import ContactPage from '@pages/contact';
import DocumentationPage from '@pages/documentation';
import DonatePage from '@pages/donate';
import ForgotPasswordPage from '@pages/forgotPassword';
import HomePage from '@pages/home';
import QuestionPage from '@pages/question';
import ResetPasswordPage from '@pages/resetPassword';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './pages/authentication/login';
import SignUpPage from './pages/authentication/signup';
import LearnPage from './pages/learn';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/users/:id" element={<UserProfile />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
