import { RootWrapper } from '@//components/root-wrapper.component';
import { aboutMeRoutes } from '@//modules/about-me/routes';
import { contactAndImprintRoutes } from '@//modules/contact-and-imprint/routes';
import { downloadRoutes } from '@//modules/downloads/routes';
import { homeRoutes } from '@//modules/home/routes';
import { hormonBalanceRoutes } from '@//modules/hormon-balance/routes';
import { psychosomaticsRoutes } from '@//modules/psychosomatics/routes';
import { PageRoute } from '@//types/page-route.type';
import { RouteObject } from 'react-router-dom';

export const pageRoutes: PageRoute[] = [
  ...homeRoutes,
  ...hormonBalanceRoutes,
  ...psychosomaticsRoutes,
  ...aboutMeRoutes,
  ...downloadRoutes,
  ...contactAndImprintRoutes,
];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootWrapper />,
    children: [...pageRoutes],
  },
];
