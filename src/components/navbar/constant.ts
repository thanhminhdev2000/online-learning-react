interface Route {
  path: string;
  pathName: string;
}

export const routes: Route[] = [
  {
    path: '/about',
    pathName: 'Giới thiệu',
  },
  {
    path: '/learn',
    pathName: 'Khóa học',
  },
  {
    path: '/question',
    pathName: 'Hỏi đáp',
  },
  {
    path: '/documentation',
    pathName: 'Bài viết',
  },
  {
    path: '/donate',
    pathName: 'Tài trợ',
  },
  {
    path: '/contact',
    pathName: 'Liên hệ',
  },
];
