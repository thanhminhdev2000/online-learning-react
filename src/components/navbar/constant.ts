interface Route {
  path: string;
  pathName: string;
}

export const routes: Route[] = [
  {
    path: '/document',
    pathName: 'Tài liệu',
  },
  {
    path: '/learn',
    pathName: 'Khóa học',
  },
  {
    path: '/contact',
    pathName: 'Liên hệ',
  },
];
