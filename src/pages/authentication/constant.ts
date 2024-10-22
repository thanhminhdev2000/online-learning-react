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

export const updatePasswordInit = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export const loginInit = {
  identifier: '',
  password: '',
};
export const resetPasswordInit = {
  password: '',
  confirmPassword: '',
};

export const signUpInit = {
  email: '',
  username: '',
  fullName: '',
  password: '',
  confirmPassword: '',
  gender: '',
  avatar: '',
  dateOfBirth: '',
};
