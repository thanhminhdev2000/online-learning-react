import { routes } from '@components/navbar/constant';
import { NavItem } from '@components/navbar/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" alignItems="center" justifyContent="space-between" width="90%">
        <Box display="flex" alignItems="center">
          <Typography variant="h4" fontWeight="700">
            OLM
          </Typography>

          <Box display="flex" gap={3} marginLeft={3}>
            {routes.map((route) => (
              <NavItem key={route.path} to={route.path}>
                {route.pathName}
              </NavItem>
            ))}
          </Box>
        </Box>

        <IconButton edge="end" onClick={handleMenuOpen} color="inherit">
          <AccountCircleIcon />
          <Typography marginLeft={1}>Tài khoản</Typography>
        </IconButton>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Đăng nhập</MenuItem>
          <MenuItem onClick={handleMenuClose}>Đăng ký</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
