import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';
import vikeReactZustand from 'vike-react-zustand/config';

export default {
  title: 'Heilpraktikerin Jana Goellner',
  prerender: true,

  extends: [vikeReact, vikeReactZustand],
} satisfies Config;
