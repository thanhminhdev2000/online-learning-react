import { Box } from '@mui/material';
import ContactPage from '@pages/contact';
import CoursesPage from '@pages/courses';
import HomePage from '@pages/home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
