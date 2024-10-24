import { UserRoleDto } from '@apis/generated/data-contracts';
import { useLogout } from '@apis/hooks/authentication.hook';
import { AlignCenter, ItemCenter } from '@common/styled';
import { routes } from '@components/navbar/constant';
import { NavbarWrapper, NavItem, StyledMenuItem } from '@components/navbar/styled';
import { Avatar, Box, Button, Menu, Stack, Typography } from '@mui/material';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <Box display="flex" justifyContent="space-between" width={{ xs: '100%', sm: '90%' }}>
        <Box display="flex" alignItems="center" height={48}>
          <AlignCenter onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <img src="/logo.svg" width={125} />
          </AlignCenter>

          <Stack>
            {routes.map((route) => (
              <NavItem key={route.path} to={route.path}>
                <Typography display={{ xs: 'none' }}>{route.pathName}</Typography>
              </NavItem>
            ))}
          </Stack>
        </Box>

        {user.id ? (
          <ItemCenter>
            <Button startIcon={<Avatar />} sx={{ color }} onClick={openAccountMenu}>
              <Typography variant="body2" display={{ xs: 'none', sm: 'block' }}>
                {user.username}
              </Typography>
            </Button>
            <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={() => closeAccountMenu()}>
              <StyledMenuItem onClick={() => closeAccountMenu(`users/${user.id}`)}>Hồ sơ</StyledMenuItem>
              {user.role === UserRoleDto.RoleAdmin && (
                <StyledMenuItem onClick={() => closeAccountMenu('users')}>Quản trị</StyledMenuItem>
              )}
              <StyledMenuItem
                onClick={() => {
                  closeAccountMenu();
                  handleLogout();
                }}
              >
                Đăng xuất
              </StyledMenuItem>
            </Menu>
          </ItemCenter>
        ) : (
          <ItemCenter>
            <Button startIcon={<Avatar />} sx={{ color }} onClick={openAccountMenu}>
              <Typography variant="body2" display={{ xs: 'none', sm: 'block' }}>
                Tài khoản
              </Typography>
            </Button>

            <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={() => closeAccountMenu()}>
              <StyledMenuItem onClick={() => closeAccountMenu('login')}>Đăng nhập</StyledMenuItem>
              <StyledMenuItem onClick={() => closeAccountMenu('signup')}>Đăng ký</StyledMenuItem>
            </Menu>
          </ItemCenter>
        )}
      </Box>
    </NavbarWrapper>
  );
};

export default Navbar;
