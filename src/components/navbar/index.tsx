import { UserRoleDto } from '@apis/generated/data-contracts';
import { useLogout } from '@apis/hooks/authentication.hook';
import { HorizontalDivider, ItemCenter } from '@common/styled';
import { routes } from '@components/navbar/constant';
import { IconCursor, NavItem } from '@components/navbar/styled';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import useAuthStore from '@store/authStore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ page }: { page?: string }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [notifyMenu, setNotifyMenu] = useState<null | HTMLElement>(null);
  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const color = page === 'HOME' ? '#fff' : '#000';

  const notifications = [
    { id: 1, message: 'Notify1', link: 'notify1' },
    { id: 2, message: 'Notify2', link: 'notify2' },
    { id: 3, message: 'Notify3', link: 'notify3' },
  ];

  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate({});
    logout();
    navigate('login');
  };

  const openNotifytMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNotifyMenu(event.currentTarget);
  };

  const closeNotifyMenu = (link: string) => {
    navigate(link);
    setNotifyMenu(null);
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
    <Box display="flex" alignItems="center" justifyContent="space-between">
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
        <Box display="flex">
          <Box>
            <IconCursor onClick={openNotifytMenu}>
              <NotificationsNoneIcon sx={{ color }} />
            </IconCursor>
            <Menu
              anchorEl={notifyMenu}
              open={Boolean(notifyMenu)}
              onClose={closeNotifyMenu}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <MenuItem
                    key={notification.id}
                    onClick={() => closeNotifyMenu(notification.link)}
                    sx={{ width: 300, marginY: 2 }}
                  >
                    {notification.message}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>
                  <Typography>Không có thông báo.</Typography>
                </MenuItem>
              )}
              <MenuItem onClick={() => closeNotifyMenu('notifications')}>Xem tất cả</MenuItem>
            </Menu>
          </Box>

          <ItemCenter>
            <Avatar src={user.avatar} onClick={openAccountMenu} sx={{ width: 24, height: 24 }} />
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
        </Box>
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
  );
};

export default Navbar;
