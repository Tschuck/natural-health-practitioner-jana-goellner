export function onPageTransitionEnd() {
  document.querySelector('#jhg-content')?.scrollTo({ top: 0, behavior: 'instant' });
}
