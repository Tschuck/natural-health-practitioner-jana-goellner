import { hydrateRoot } from 'react-dom/client';
import { PageContextClient } from 'vike/types';

export function onRenderClient(pageContext: PageContextClient) {
  const { Page } = pageContext;
  hydrateRoot(document.getElementById('page-view')!, <Page />);
}
