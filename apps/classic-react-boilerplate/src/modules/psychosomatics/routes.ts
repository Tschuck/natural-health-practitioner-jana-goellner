import { PsychosomaticsView } from '@//modules/psychosomatics/views/psychosomatics.view';
import { msg } from '@lingui/core/macro';

export const psychosomaticsRoutes = [
  {
    path: '/psychosomatics',
    Component: PsychosomaticsView,
    handle: { name: msg`Psychosomatik`.message, hide: false },
  },
];
