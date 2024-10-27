import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="p" color="textSecondary" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary" mb={2}>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go back to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
