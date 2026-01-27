import { create } from 'vike-react-zustand';

interface CookieDisclaimerStore {
  accepted: boolean;
  accept: () => void;
}

export const useCookieStore = create<CookieDisclaimerStore>()((set) => ({
  accepted: false,
  accept: () => set(() => ({ accepted: true })),
}));
