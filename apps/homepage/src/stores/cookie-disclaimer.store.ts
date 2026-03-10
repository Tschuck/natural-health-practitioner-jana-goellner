import { create } from 'vike-react-zustand';
import { persist } from 'zustand/middleware';

interface CookieDisclaimerStore {
  accepted: boolean;
  accept: () => void;
}

export const useCookieStore = create(
  persist<CookieDisclaimerStore>(
    (set) => ({
      accepted: false,
      accept: () => set(() => ({ accepted: true })),
    }),
    { name: 'cookie-disclaimer-store' }
  )
);
