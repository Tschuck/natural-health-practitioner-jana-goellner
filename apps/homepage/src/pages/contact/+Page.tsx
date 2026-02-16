import ContactFormular from '@/pages/contact/components/contact-formular.component';

import PraxisLocation from '@/assets/praxis-location.jpg';
import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import config from '@/config/config';
import { ArrowUpRightIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Trans } from '@lingui/react/macro';

function getNavigationUrl(address: string, coordinates?: { lat: string; lng: string }) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (coordinates) {
    if (isIOS) {
      return `maps://maps.apple.com/?ll=${coordinates.lat},${coordinates.lng}&q=${encodeURIComponent(address)}`;
    }
    if (isAndroid) {
      return `geo:${coordinates.lat},${coordinates.lng}?q=${encodeURIComponent(address)}`;
    }
    // Fallback for desktop
    return `https://maps.apple.com/?ll=${coordinates.lat},${coordinates.lng}&q=${encodeURIComponent(address)}`;
  }

  // Address-based navigation
  return `https://maps.apple.com/?address=${encodeURIComponent(address)}`;
}

export default function ContactView() {
  return (
    <section className="shadow-md lg:py-16">
      <TwoColumns
        leftAlign="start"
        left={
          <>
            <ContactFormular />
          </>
        }
        rightAlign="center"
        rightClass="h-full"
        right={
          <>
            <Header type="h4">Direkt kontaktieren</Header>

            <table className="mt-2">
              <tbody>
                <tr>
                  <td>
                    <Header type="b">E-Mail:</Header>
                  </td>
                  <td className="pl-4">
                    <TextContent className="col-span-3">{config.email}</TextContent>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Header type="b">Telefonnummer:</Header>
                  </td>
                  <td className="pl-4">
                    <TextContent className="col-span-3">{config.phoneNumber}</TextContent>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-start flex-col lg:flex-row gap-8 mt-4">
              <div>
                <Button
                  type={ButtonType.FILLED_GREEN}
                  href={`mailto:${config.email}`}
                  display="flex"
                  className="gap-2 whitespace-nowrap"
                >
                  <EnvelopeIcon className="w-6 h-6" />
                  <Trans>E-Mail schreiben</Trans>
                </Button>
              </div>
              <div>
                <Button
                  type={ButtonType.FILLED_GREEN}
                  href={`tel:${config.phoneNumber}`}
                  display="flex"
                  className="flex gap-2 whitespace-nowrap"
                >
                  <PhoneIcon className="w-6 h-6" />
                  <Trans>Jetzt anrufen</Trans>
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <Header type="h4">Praxis</Header>
              <TextContent>Kasseler Straße 31</TextContent>
              <TextContent>99817 Eisenach</TextContent>

              <div className="flex mt-8">
                <a
                  className="cursor-pointer relative max-w-100"
                  href={getNavigationUrl('Kasseler+Straße+31%2C+99817+Eisenach%2C+Germany', {
                    lng: '10.3029087',
                    lat: '50.9795316',
                  })}
                  target="_blank"
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-50 bg-white items-center justify-center flex max-w-100">
                    <ArrowUpRightIcon className="size-16" />
                  </div>
                  <img src={PraxisLocation} className="max-w-100" />
                </a>
              </div>
            </div>
          </>
        }
      />
    </section>
  );
}
