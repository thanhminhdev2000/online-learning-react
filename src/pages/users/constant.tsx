import { LIMIT } from '@common/constant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import Person2Icon from '@mui/icons-material/Person2';
import { UserMenu } from '@pages/authentication/constant';

export const userSearchInit = {
  email: '',
  username: '',
  fullName: '',
  dateOfBirth: '',
  role: '*',
  page: 1,
  limit: LIMIT,
};

export const menuSettings = [
  {
    path: UserMenu.PROFILE,
    pathName: 'Hồ sơ',
    icon: <Person2Icon />,
  },
  {
    path: UserMenu.AVATAR,
    pathName: 'Ảnh đại diện',
    icon: <AccountCircleIcon />,
  },
  {
    path: UserMenu.PASSWORD,
    pathName: 'Mật khẩu',
    icon: <PasswordIcon />,
  },
];
