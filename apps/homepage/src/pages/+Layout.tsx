import '@/index.css';
import '@/tailwind.css';

import MainLogo from '@/assets/main-logo.svg';
import { Button, ButtonType } from '@//components/button.component';
import { CookieDisclaimer } from '@//components/cookie-disclaimer.component';
import { SidePanel } from '@//components/side-panel.component';
import App from '@/app';
import { Link } from '@/components/link';
import { Navigation } from '@/components/navigation.component';
import config from '@/config/config';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';
import { Footer } from '@/components/footer.component';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidePanel, setShowSidePanel] = useState(false);

  return (
    <App>
      <div className="flex flex-col h-full bg-background ">
        <div className="flex items-center gap-4 py-4 w-full justify-between px-8">
          <Link href="/" className="">
            <img src={MainLogo} className="h-14" />
          </Link>
          <Navigation className="justify-center grow hidden lg:flex" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2 sm:ml-4 lg:ml-12">
              <Button
                className="hidden lg:flex mr-4 lg:mr-0"
                href={`tel:${config.phoneNumber}`}
                type={ButtonType.OUTLINE_GREEN}
              >
                <Trans>Termin Buchen</Trans>
              </Button>
              <Button type={ButtonType.ICON} className="flex lg:hidden" onClick={() => setShowSidePanel(true)}>
                <Bars3Icon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
        <SidePanel isOpen={showSidePanel} onClose={() => setShowSidePanel(false)} />

        <CookieDisclaimer />
        <div className="overflow-y-scroll lg:-mr-4" id="jhg-content">
          {children}
          <Footer />
        </div>
      </div>
    </App>
  );
}
