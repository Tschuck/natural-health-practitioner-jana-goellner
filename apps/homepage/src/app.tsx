import '@/index.css';
import '@/tailwind.css';

import { useAppLocale } from '@/i18n/i18n';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { queryClient } from '@/query-client';

export default function App({ children }: { children: React.ReactNode }) {
  useAppLocale();

  return (
    <I18nProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <>{children}</>
      </QueryClientProvider>
    </I18nProvider>
  );
}
