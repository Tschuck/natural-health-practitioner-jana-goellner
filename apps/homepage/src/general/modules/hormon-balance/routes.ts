import { HormonBalanceView } from '@/general/modules/hormon-balance/views/hormon-balance.view';
import { msg } from '@lingui/core/macro';

export const hormonBalanceRoutes = [
  {
    path: '/hormon-balance',
    Component: HormonBalanceView,
    handle: { name: msg`Hormonbalance`.message, hide: false },
  },
];
