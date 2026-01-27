import { Router } from '@//router.component';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { Suspense } from 'react';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import './app.css';

function Application(helmetContext: { helmet?: HelmetServerState }) {
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Suspense fallback={<>loading</>}>
          <I18nProvider i18n={i18n}>
            <Router />
          </I18nProvider>
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default Application;
