import { UserRoleDto } from '@api-swagger/data-contracts';
import { HEADER_HEIGHT } from '@common/constant';
import { AlignCenter, ItemCenter, SpaceBetween, TypographyHover } from '@common/styled';
import { routes } from '@components/navbar/constant';
import { NavbarWrapper, StyledMenuItem } from '@components/navbar/styled';
import { Avatar, Box, Button, Container, Menu, Stack, Typography } from '@mui/material';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../api-hooks/authentication.hook';
import useSubjectStore from '../../store/classStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { setClassId, setSubjectId } = useSubjectStore();
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
                  sx={{ padding: 3, color: 'white' }}
                  onClick={() => {
                    navigate(route.path);
                    setClassId(0);
                    setSubjectId(0);
                  }}
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
                  <Box>
                    <StyledMenuItem onClick={() => closeAccountMenu('users')}>Quản trị</StyledMenuItem>
                  </Box>
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
