interface Route {
  path: string;
  pathName: string;
}

export const routes: Route[] = [
  {
    path: '/documents',
    pathName: 'Tài liệu',
  },
  {
    path: '/courses',
    pathName: 'Khóa học',
  },
  {
    path: '/contact',
    pathName: 'Liên hệ',
  },
];
