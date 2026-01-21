import { AboutMeView } from '@//modules/about-me/views/about-me.view';
import { msg } from '@lingui/core/macro';

export const aboutMeRoutes = [
  {
    path: '/about-me',
    Component: AboutMeView,
    handle: { name: msg`Über mich`.message, hide: false },
  },
];
