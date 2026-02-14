import ContactFormular from '@/pages/contact/components/contact-formular.component';

import { TwoColumns } from '@/components/two-columns.component';
import { Button, ButtonType } from '@/components/button.component';
import config from '@/config/config';
import { Trans } from '@lingui/react/macro';
import { Header } from '@/components/header.component';
import { TextContent } from '@/components/text.component';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

export default function ContactView() {
  return (
    <section className="shadow-md lg:py-16">
      <TwoColumns
        leftAlign="start"
        left={
          <>
            <h2 className="text-2xl font-semibold">
              <Trans>Direkt kontaktieren</Trans>
            </h2>

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
            <div className="flex items-center flex-col lg:flex-row gap-8 mt-4">
              <div>
                <Button type={ButtonType.FILLED_GREEN} href={`mailto:${config.email}`} className="flex gap-2">
                  <EnvelopeIcon className="w-6 h-6" />
                  <Trans>E-Mail schreiben</Trans>
                </Button>
              </div>
              <div>
                <Button type={ButtonType.FILLED_GREEN} href={`tel:${config.phoneNumber}`} className="flex gap-2">
                  <PhoneIcon className="w-6 h-6" />
                  <Trans>Jetzt anrufen</Trans>
                </Button>
              </div>
            </div>
          </>
        }
        rightAlign="center"
        rightClass="h-full"
        right={
          <>
            <ContactFormular />
          </>
        }
      />
    </section>
  );
}
