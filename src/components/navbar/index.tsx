import { UserRoleDto } from '@apis/generated/data-contracts';
import { useLogout } from '@apis/hooks/authentication.hook';
import { HEADER_HEIGHT } from '@common/constant';
import { AlignCenter, ItemCenter, SpaceBetween, TypographyHover } from '@common/styled';
import { routes } from '@components/navbar/constant';
import { NavbarWrapper, StyledMenuItem } from '@components/navbar/styled';
import { Avatar, Button, Container, Menu, Stack, Typography } from '@mui/material';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const color = 'black';

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
      <Container maxWidth="lg">
        <SpaceBetween height={HEADER_HEIGHT}>
          <AlignCenter>
            <AlignCenter onClick={() => navigate('/')} sx={{ cursor: 'pointer', color: 'white' }}>
              <Typography fontWeight="bold" sx={{ fontSize: 20 }}>
                360
              </Typography>
              <Typography fontWeight="bold" sx={{ fontSize: 20 }}>
                Learning
              </Typography>
            </AlignCenter>

            <Stack>
              {routes.map((route) => (
                <TypographyHover
                  key={route.path}
                  display={{ xs: 'none', sm: 'block' }}
                  sx={{ padding: 3, color: 'white' }}
                  onClick={() => navigate(route.path)}
                >
                  {route.pathName}
                </TypographyHover>
              ))}
            </Stack>
          </AlignCenter>

          {user.id ? (
            <ItemCenter>
              <Button startIcon={<Avatar />} sx={{ color }} onClick={openAccountMenu}>
                <Typography variant="body2" display={{ xs: 'none', sm: 'block' }} sx={{ color: 'white' }}>
                  {user.username}
                </Typography>
              </Button>
              <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={() => closeAccountMenu()}>
                <StyledMenuItem onClick={() => closeAccountMenu(`users/${user.id}`)}>Hồ sơ</StyledMenuItem>
                {user.role === UserRoleDto.RoleAdmin && (
                  <>
                    <StyledMenuItem onClick={() => closeAccountMenu('users')}>Quản trị</StyledMenuItem>
                    <StyledMenuItem onClick={() => closeAccountMenu('document/upload')}>Đăng tài liệu</StyledMenuItem>
                  </>
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
                <Typography variant="body2" display={{ xs: 'none', sm: 'block' }} sx={{ color: 'white' }}>
                  Tài khoản
                </Typography>
              </Button>

              <Menu anchorEl={accountMenu} open={Boolean(accountMenu)} onClose={() => closeAccountMenu()}>
                <StyledMenuItem onClick={() => closeAccountMenu('login')}>Đăng nhập</StyledMenuItem>
                <StyledMenuItem onClick={() => closeAccountMenu('signup')}>Đăng ký</StyledMenuItem>
              </Menu>
            </ItemCenter>
          )}
        </SpaceBetween>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
