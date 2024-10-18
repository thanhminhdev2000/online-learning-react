import { routes } from '@components/navbar/constant';
import { MenuLink, NavItem } from '@components/navbar/styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ page }: { page?: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const color = page === 'HOME' ? '#fff' : '#000';

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Link to="/">
          <img src="/logo.svg" width={150} />
        </Link>

        <Box display="flex" marginLeft={3}>
          {routes.map((route) => (
            <NavItem key={route.path} to={route.path}>
              <Typography color={color}>{route.pathName}</Typography>
            </NavItem>
          ))}
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gap={1} onClick={handleMenuOpen} sx={{ cursor: 'pointer' }}>
        <IconButton edge="end">
          <AccountCircleIcon color="primary" />
        </IconButton>
        <Typography color={color}>Tài khoản</Typography>
      </Box>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <MenuLink to="login">
            <Typography>Đăng nhập</Typography>
          </MenuLink>
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          <MenuLink to="signup">
            <Typography>Đăng ký</Typography>
          </MenuLink>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
