import { BoxContainer, ItemCenter } from '@common/styled';
import SettingsIcon from '@mui/icons-material/Settings';
import { Stack, Typography } from '@mui/material';
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
          <ItemCenter>
            <Typography variant="h6" display={{ xs: 'none', sm: 'block' }}>
              CÀI ĐẶT
            </Typography>
            <Typography variant="h6" display={{ xs: 'block', sm: 'none' }}>
              <SettingsIcon />
            </Typography>
          </ItemCenter>

          {menuSettings.map((item) => (
            <ItemCenter key={item.path} onClick={() => setMenu(item.path)}>
              <Typography variant="h6" display={{ xs: 'none', sm: 'block' }}>
                {item.pathName}
              </Typography>
              <Typography variant="h6" display={{ xs: 'block', sm: 'none' }}>
                {item.icon}
              </Typography>
            </ItemCenter>
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
