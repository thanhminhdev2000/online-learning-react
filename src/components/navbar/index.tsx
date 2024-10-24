import { UserRoleDto } from '@apis/generated/data-contracts';
import { useLogout } from '@apis/hooks/authentication.hook';
import { HorizontalDivider, ItemCenter } from '@common/styled';
import { routes } from '@components/navbar/constant';
import { NavbarWrapper, NavItem } from '@components/navbar/styled';
import { Avatar, Box, Button, Menu, MenuItem } from '@mui/material';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const color = '#000';

  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate({});
    logout();
    navigate('login');
  };

  const openAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenu(event.currentTarget);
  };

  const closeAccountMenu = (link?: string) => {
    if (link) {
      navigate(link);
    }
    setAccountMenu(null);
  };

  return (
    <NavbarWrapper>
      <Box display="flex" justifyContent="space-between" width="90%">
        <Box display="flex" alignItems="center">
          <Link to="/">
            <img src="/logo.svg" width={150} />
          </Link>

          <Box display="flex" marginLeft={3}>
            {routes.map((route) => (
              <NavItem key={route.path} to={route.path} sx={{ color }}>
                {route.pathName}
              </NavItem>
            ))}
          </Box>
        </Box>
        {user.id ? (
          <ItemCenter>
            <Button
              size="large"
              startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
              sx={{ color }}
              onClick={openAccountMenu}
            >
              {user.username}
            </Button>
            <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={() => closeAccountMenu()}>
              <MenuItem onClick={() => closeAccountMenu(`users/${user.id}`)}>Hồ sơ</MenuItem>
              {user.role === UserRoleDto.RoleAdmin && (
                <MenuItem onClick={() => closeAccountMenu('users')}>Quản trị</MenuItem>
              )}
              <HorizontalDivider />
              <MenuItem
                onClick={() => {
                  closeAccountMenu();
                  handleLogout();
                }}
              >
                Đăng xuất
              </MenuItem>
            </Menu>
          </ItemCenter>
        ) : (
          <Box>
            <Button
              size="large"
              startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
              sx={{ color }}
              onClick={openAccountMenu}
            >
              Tài khoản
            </Button>
            <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={() => closeAccountMenu()}>
              <MenuItem onClick={() => closeAccountMenu('login')}>Đăng nhập</MenuItem>
              <HorizontalDivider />
              <MenuItem onClick={() => closeAccountMenu('signup')}>Đăng ký</MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
    </NavbarWrapper>
  );
};

export default Navbar;
