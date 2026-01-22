// https://vike.dev/onPageTransitionStart

import type { PageContextClient } from 'vike/types';

export function onPageTransitionStart(pageContext: Partial<PageContextClient>) {
  document.body.classList.add('page-transition');
}
