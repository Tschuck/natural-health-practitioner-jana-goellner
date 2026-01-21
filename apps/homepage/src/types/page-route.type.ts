import { NonIndexRouteObject } from 'react-router-dom';

export interface KnownHandle {
  name: string | undefined;
  hide?: boolean;
}

export interface PageRoute extends NonIndexRouteObject {
  path: string;
  handle: KnownHandle;
}
