import { BoxContainer, ItemCenter, TypographyHover } from '@common/styled';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Stack, Typography } from '@mui/material';
import { UserMenu } from '@pages/authentication/constant';
import UserAvatar from '@pages/users/components/UserAvatar';
import UserPassword from '@pages/users/components/UserPassword';
import UserProfile from '@pages/users/components/UserProfile';
import { menuSettings } from '@pages/users/constant';
import { useState } from 'react';

const UserDetailPage = () => {
  const [menu, setMenu] = useState<UserMenu>(UserMenu.PROFILE);

  return (
    <Stack justifyContent="center">
      <Stack width="100%" maxWidth={800} marginTop={4} gap={2}>
        <BoxContainer minWidth={40} width={{ xs: '15%', sm: '25%' }}>
          <Typography variant="h6" display={{ xs: 'none', sm: 'block' }}>
            CÀI ĐẶT
          </Typography>

          <ItemCenter>
            <Typography display={{ xs: 'block', sm: 'none' }}>
              <SettingsIcon />
            </Typography>
          </ItemCenter>

          {menuSettings.map((item) => (
            <Box key={item.path} onClick={() => setMenu(item.path)}>
              <TypographyHover display={{ xs: 'none', sm: 'block' }}>{item.pathName}</TypographyHover>

              <ItemCenter>
                <TypographyHover display={{ xs: 'block', sm: 'none' }}>{item.icon}</TypographyHover>
              </ItemCenter>
            </Box>
          ))}
        </BoxContainer>

        <BoxContainer width={{ xs: '85%', sm: '75%' }}>
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
