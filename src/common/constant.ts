import { UserGenderDto, UserRoleDto } from '@apis/generated/data-contracts';
import { IOptions } from '@common/type';

export const genderOptions: IOptions[] = [
  {
    key: 'Nam',
    value: UserGenderDto.GenderMale,
  },
  {
    key: 'Nữ',
    value: UserGenderDto.GenderFemale,
  },
];

export const roleOptions: IOptions[] = [
  {
    key: 'Tất cả',
    value: '*',
  },
  {
    key: 'Quản trị viên',
    value: UserRoleDto.RoleAdmin,
  },
  {
    key: 'Người dùng',
    value: UserRoleDto.RoleUser,
  },
];

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT_VN = 'DD/MM/YYYY';
export const HEADER_HEIGHT = 40;
export const LIMIT = 15;
export const SIDEBAR_WIDTH = 240;
export const PADDING_SM = 20;
export const PADDING_XS = 4;

export const BACKGROUND_COLOR_HOVER = 'rgba(0, 0, 0, 0.04)';
