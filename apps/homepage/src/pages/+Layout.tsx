import '@/index.css';
import '@/tailwind.css';

import { Button, ButtonType } from '@//components/button.component';
import { CookieDisclaimer } from '@//components/cookie-disclaimer.component';
import { SidePanel } from '@//components/side-panel.component';
import App from '@/app';
import MainLogo from '@/assets/main-logo.svg';
import { Footer } from '@/components/footer.component';
import { Link } from '@/components/link';
import { Navigation } from '@/components/navigation.component';
import { links } from '@/navigation-entries';
import { Bars3Icon, CalendarIcon } from '@heroicons/react/24/solid';
import { Trans } from '@lingui/react/macro';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidePanel, setShowSidePanel] = useState(false);

  return (
    <App>
      <div className="flex flex-col h-full bg-background ">
        <div className="flex items-center gap-4 py-4 w-full justify-between p-2 lg:px-8">
          <Link href="/" className="">
            <img src={MainLogo} className="h-14" />
          </Link>
          <Navigation className="justify-center grow hidden lg:flex" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-2">
              <div className="hidden lg:flex">
                <Button className="mr-4 lg:mr-0 text-nowrap" href={links.contact.path} type={ButtonType.OUTLINE_GREEN}>
                  <Trans>Termin Buchen</Trans>
                </Button>
              </div>
              <div className="flex lg:hidden gap-2">
                <Button type={ButtonType.ICON} href={links.contact.path} className="flex lg:hidden">
                  <CalendarIcon className="w-6 h-6" />
                </Button>
                <Button type={ButtonType.ICON} className="flex lg:hidden" onClick={() => setShowSidePanel(true)}>
                  <Bars3Icon className="w-6 h-6" />
                </Button>
              </div>
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
