import { SidebarItem } from '@pages/document/type';

const subjects = [
  'Ngữ Văn',
  'Toán',
  'Tiếng Anh',
  'Vật lí',
  'Hóa Học',
  'Sinh học',
  'Lịch sử',
  'Địa lí',
  'Giáo dục công dân',
];

export const sidebarItems: SidebarItem[] = [
  { label: 'Đề thi thử đại học', count: 953, subjects: subjects },
  {
    label: 'Lớp 12',
    count: 828,
    subjects: subjects,
  },
  {
    label: 'Lớp 11',
    count: 649,
    subjects: subjects,
  },
  {
    label: 'Lớp 10',
    count: 828,
    subjects: subjects,
  },
  { label: 'Thi vào lớp 10', count: 53, subjects: subjects },
  {
    label: 'Lớp 9',
    count: 649,
    subjects: subjects,
  },
  { label: 'Lớp 8', count: 649, subjects: subjects },
  { label: 'Lớp 7', count: 83, subjects: subjects },
  { label: 'Lớp 6', count: 53, subjects: subjects },
  { label: 'Thi vào lớp 6', count: 53, subjects: subjects },
  { label: 'Lớp 5', count: 554, subjects: subjects },
  { label: 'Lớp 4', count: 58, subjects: subjects },
  { label: 'Lớp 3', count: 123, subjects: subjects },
  { label: 'Lớp 2', count: 513, subjects: subjects },
  { label: 'Lớp 1', count: 183, subjects: subjects },
];
