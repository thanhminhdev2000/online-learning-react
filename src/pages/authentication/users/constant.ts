export enum UserMenu {
  PROFILE = 'PROFILE',
  AVATAR = 'AVATAR',
  PASSWORD = 'PASSWORD',
}

export const menuSettings = [
  {
    path: UserMenu.PROFILE,
    pathName: 'Hồ sơ',
  },
  {
    path: UserMenu.AVATAR,
    pathName: 'Ảnh đại diện',
  },
  {
    path: UserMenu.PASSWORD,
    pathName: 'Mật khẩu',
  },
];
