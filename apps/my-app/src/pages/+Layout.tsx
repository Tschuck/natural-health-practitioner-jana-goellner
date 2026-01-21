import '@/index.css';
import '@/tailwind.css';

import { Link } from '@/components/link2';
import { siteConfig } from '@/config/site-config';
import { useState } from 'react';
import { Button, ButtonType } from '@//components/button.component';
import { CookieDisclaimer } from '@//components/cookie-disclaimer.component';
import { SidePanel } from '@//components/side-panel.component';
import { Bars3Icon, PhoneIcon } from '@heroicons/react/24/solid';
import { Trans } from '@lingui/react/macro';
import { Navigation } from '@/components/navigation.component';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidePanel, setShowSidePanel] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex items-center gap-4 px-4 py-1 sm:pt-4 sm:px-8 xl:px-32">
        <div className="flex items-center">
          {/* <img src={Favicon} className="w-12 -ml-4 md:w-20" /> */}
          <div className="relative">
            <Link href="/" className="text-2xl text-gray-900 md:text-3xl font-yeseva">
              Heilpraktikerin Jana Goellner
            </Link>
            <Navigation className="absolute flex w-screen -mt-3 lg:hidden" />
          </div>
        </div>
        <div className="flex items-center justify-end flex-grow">
          <Navigation className="hidden lg:flex" />
          <div className="flex justify-between gap-2 sm:ml-4 lg:ml-12">
            <Button className="hidden lg:flex" link={`tel:${siteConfig.phoneNumber}`} type={ButtonType.PRIMARY}>
              <Trans>Anrufen</Trans>
            </Button>
            <Button className="flex lg:hidden" link={`tel:${siteConfig.phoneNumber}`} type={ButtonType.ICON_PRIMARY}>
              <PhoneIcon className="w-4 h-4" />
            </Button>
            <Button type={ButtonType.ICON} className="flex lg:hidden" onClick={() => setShowSidePanel(true)}>
              <Bars3Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <SidePanel isOpen={showSidePanel} onClose={() => setShowSidePanel(false)} />

      <CookieDisclaimer />
      <div className="py-4 overflow-y-auto">{children}</div>
    </div>
  );
}
