import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';
import vikeReactZustand from 'vike-react-zustand/config';
import favicon from '@/assets/favicon.svg';

export default {
  title: 'Heilpraktikerin Jana Göllner - Eisenach',
  description:
    'Heilpraktiker in Eisenach, Alternativmediziner, ganzheitliche Naturheilkunde, Akupunktur, Hormone, Schilddrüse, Psychosomatik, Übergewicht',
  prerender: true,
  extends: [vikeReact, vikeReactZustand],
  favicon,
} satisfies Config;
