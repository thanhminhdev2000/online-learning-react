interface Route {
  path: string;
  pathName: string;
}

export const routes: Route[] = [
  {
    path: '/courses',
    pathName: 'Khóa học',
  },
  {
    path: '/documents',
    pathName: 'Tài liệu',
  },
  {
    path: '/contact',
    pathName: 'Liên hệ',
  },
];
