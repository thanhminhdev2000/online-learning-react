import { BoxContainer, TypographyHover } from '@common/styled';
import { Stack, Typography } from '@mui/material';
import { UserMenu, menuSettings } from '@pages/authentication/constant';
import UserAvatar from '@pages/users/components/UserAvatar';
import UserPassword from '@pages/users/components/UserPassword';
import UserProfile from '@pages/users/components/UserProfile';
import { useState } from 'react';

const UserDetailPage = () => {
  const [menu, setMenu] = useState<UserMenu>(UserMenu.PROFILE);

  return (
    <Stack justifyContent="center">
      <Stack width="100%" maxWidth={1000} marginTop={4} gap={2}>
        <BoxContainer width="25%">
          <Typography variant="h6">CÀI ĐẶT</Typography>
          {menuSettings.map((item) => (
            <TypographyHover key={item.path} onClick={() => setMenu(item.path)}>
              {item.pathName}
            </TypographyHover>
          ))}
        </BoxContainer>

        <BoxContainer width="75%">
          <Typography variant="h6">
            CHỈNH SỬA&nbsp;
            {menu === UserMenu.PROFILE && 'HỒ SƠ'}
            {menu === UserMenu.AVATAR && 'ẢNH ĐẠI DIỆN'}
            {menu === UserMenu.PASSWORD && 'MẬT KHẨU'} CỦA BẠN
          </Typography>

          {menu === UserMenu.PROFILE && <UserProfile />}
          {menu === UserMenu.AVATAR && <UserAvatar />}
          {menu === UserMenu.PASSWORD && <UserPassword />}
        </BoxContainer>
      </Stack>
    </Stack>
  );
};

export default UserDetailPage;
