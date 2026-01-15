import { RootWrapper } from '@/general/components/root-wrapper.component';
import { aboutMeRoutes } from '@/general/modules/about-me/routes';
import { contactAndImprintRoutes } from '@/general/modules/contact-and-imprint/routes';
import { downloadRoutes } from '@/general/modules/downloads/routes';
import { homeRoutes } from '@/general/modules/home/routes';
import { hormonBalanceRoutes } from '@/general/modules/hormon-balance/routes';
import { psychosomaticsRoutes } from '@/general/modules/psychosomatics/routes';
import { PageRoute } from '@/general/types/page-route.type';
import { RouteObject, RouterProvider, createHashRouter } from 'react-router-dom';

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

export function Router() {
  return (
    <>
      <RouterProvider router={createHashRouter(routes)} />
    </>
  );
}
