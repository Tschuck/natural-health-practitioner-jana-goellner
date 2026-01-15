import { DownloadsView } from '@/general/modules/downloads/views/downloads.view';
import { msg } from '@lingui/core/macro';

export const downloadRoutes = [
  {
    path: '/downloads',
    Component: DownloadsView,
    handle: { name: msg`Downloads`.message, hide: false },
  },
];
