import { Router } from "@/general/router.component";
import "./app.css";
import { Suspense } from "react";
import { I18nProvider } from '@lingui/react';
import { i18n } from "@lingui/core";
import { dynamicActivate } from '@/general/i18n';

function Application() {
  void dynamicActivate('de')

  return (
    <>
      <Suspense fallback={<>loading</>}>
        <I18nProvider i18n={i18n}>
          <Router />
        </I18nProvider>
      </Suspense>
    </>
  );
}

export default Application;
