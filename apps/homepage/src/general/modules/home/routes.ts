import { HomeView } from '@/general/modules/home/views/home.view';
import { msg } from '@lingui/core/macro';

export const homeRoutes = [
  {
    path: '/',
    Component: HomeView,
    handle: { name: msg`Willkommen`.message, hide: false },
  },
];
