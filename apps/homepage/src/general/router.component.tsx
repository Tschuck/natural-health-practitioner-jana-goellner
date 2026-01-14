import { RootWrapper } from "@/general/components/root-wrapper.component";
import { DataSecurityView } from '@/general/modules/data-security/data-security.view';
import { HomeView } from '@/general/modules/home/home.view';
import { msg } from '@lingui/core/macro';
import {
  NonIndexRouteObject,
  RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

interface KnownHandle {
  name: string | undefined;
  hide?: boolean;
}

interface PageRoute extends NonIndexRouteObject {
  path: string;
  handle: KnownHandle;
}

export const pageRoutes: PageRoute[] = [
  {
    path: '/',
    Component: HomeView,
    handle: { name: msg`Willkommen`.message, hide: false }
  },
  {
    path: '/data-security',
    Component: DataSecurityView,
    handle: { name: msg`Datensicherheit`.message, hide: false }
  }
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootWrapper />,
    children: [
      ...pageRoutes
    ],
  },
];

export function Router() {
  return (
    <>
      <RouterProvider router={createHashRouter(routes)} />
    </>
  );
}
