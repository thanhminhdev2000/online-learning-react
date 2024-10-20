import Layout from '@components/layout';
import { Box } from '@mui/material';
import AboutPage from '@pages/about';
import ContactPage from '@pages/contact';
import DocumentationPage from '@pages/documentation';
import DonatePage from '@pages/donate';
import ForgotPasswordPage from '@pages/forgotPassword';
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import QuestionPage from '@pages/question';
import ResetPasswordPage from '@pages/resetPassword';
import SignUpPage from '@pages/signup';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LearnPage from './pages/learn';

const App = () => {
  return (
    <Box>
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
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </Box>
  );
};

export default App;
