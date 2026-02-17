import { Header } from '@/components/header.component';
import { TextContent } from '@/components/text.component';
import config from '@/config/config';
import { EnvelopeIcon, GlobeAltIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Trans } from '@lingui/react/macro';
import HealthPractitionerIcon from '@/assets/verband-heilpraktiker.svg';

export default function ImprintView() {
  return (
    <div className="flex flex-col gap-4 p-4 lg:px-16 lg:max-w-300">
      <Header type="h2">Impressum</Header>
      <p>
        <Trans>Angaben gemäß §§ 5 und 6 DDG</Trans>
      </p>

      <div className="flex grow">
        <div className="mr-4">
          <MapPinIcon className="size-6" />
        </div>
        <div className="">
          <p>
            <Trans>Jana Göllner</Trans>
          </p>
          <p>
            <Trans>Heilpraktikerin</Trans>
          </p>
          <p>
            <Trans>Kasseler Straße 31</Trans>
          </p>
          <p>
            <Trans>99817 Eisenach</Trans>
          </p>
        </div>
      </div>

      <div className="flex grow">
        <div className="mr-4">
          <PhoneIcon className="size-6" />
        </div>
        <div className="">
          <p>
            <Trans>{config.phoneNumber}</Trans>
          </p>
        </div>
      </div>

      <div className="flex grow">
        <div className="mr-4">
          <GlobeAltIcon className="size-6" />
        </div>
        <div className="">
          <p>
            <Trans>heilpraktikerin-jana-goellner.de</Trans>
          </p>
        </div>
      </div>

      <div className="flex grow">
        <div className="mr-4">
          <EnvelopeIcon className="size-6" />
        </div>
        <div className="">
          <p>
            <Trans>Mail: {config.email}</Trans>
          </p>
        </div>
      </div>

      <div className="mb-16">
        <TextContent>Berufsbezeichnung: Heilpraktikerin</TextContent>

        <TextContent>
          Urkunde: Erlaubnis zur berufsmäßigen Ausübung der Heilkunde ohne Bestallung (Deutschland)
        </TextContent>

        <TextContent>Ausgestellt am 24.05.2018</TextContent>

        <img src={HealthPractitionerIcon} className="max-w-50" />
      </div>

      <b className="font-bold">
        <Trans>Zuständige Aufsichtsbehörde:</Trans>
      </b>
      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <p>
            <Trans>Landratsamt Wartburgkreis</Trans>
          </p>
          <p>
            <Trans>Gesundheitsamt Bad Salzungen</Trans>
          </p>
          <p>
            <Trans>Erzberger Allee 14</Trans>
          </p>
          <p>
            <Trans>36433 Bad Salzungen</Trans>
          </p>
        </div>
        <div>
          <div>
            <p>
              <Trans>Gesundheitsamt Eisenach</Trans>
            </p>
            <p>
              <Trans>Ernst-Thälmann-Straße 74</Trans>
            </p>
            <p>
              <Trans>99817 Eisenach</Trans>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p>
          <Trans>03695 617401</Trans>
        </p>
        <p>
          <Trans>https://www.wartburgkreis.de/landratsamt/aemter-einrichtungen/gesundheitsamt</Trans>
        </p>
      </div>

      <div className="mt-16">
        <b className="font-bold">
          <Trans>Berufsrechtliche Regelungen:</Trans>
        </b>
        <p>
          <Trans>
            Gesetz über die berufsmäßige Ausübung der Heilkunde ohne Bestallung (Heilpraktikergesetz)
            https://www.gesetze-im-internet.de/heilprg/BJNR002510939.html
          </Trans>
        </p>
        <p>
          <Trans>
            Erste Durchführungsverordnung zum Gesetz über die berufsmäßige Ausübung der Heilkunde ohne Bestallung
            (Heilpraktikergesetz)
          </Trans>
        </p>
        <p>https://www.gesetze-im-internet.de/heilprgdv_1/BJNR002590939.html</p>
        <p className="mt-8">
          <Trans>Berufsordnung: Berufsordnung für Heilpraktiker</Trans>
        </p>
        <p>https://www.vdh-heilpraktiker.de/fileadmin/nutzerdateien/Formulare/allgemeines/Berufsordnung.pdf</p>
      </div>

      <div className="mt-8">
        <b className="font-bold">
          <Trans>Haftpflichtversicherung</Trans>
        </b>

        <TextContent>andsafe Betriebshaftpflichtversicherung</TextContent>
        <TextContent>andsafe Aktiengesellschaft</TextContent>
        <TextContent>Provinzial-Allee 1</TextContent>
        <TextContent>48159 Münster</TextContent>
      </div>
      <div className="mt-8">
        <Header type="b">Berufsverband</Header>
        <TextContent>Mitglied im VDH- Verband deutscher Heilpraktiker</TextContent>
      </div>
      <div className="mt-8">
        <Header type="b">Bilder</Header>
        <TextContent> Flashlight tk, Fotograf Tobias Kromke, Sophienstrasse 41, 99817 Eisenach</TextContent>
      </div>
      <div className="mt-8">
        <Header type="b">Homepage Design</Header>
        <TextContent>Julia Celiker</TextContent>
      </div>

      <div className="mt-8">
        <Header type="b">Homepage Implementierung</Header>
        <a href="">Tobias Winkler</a>
        <a href="https://github.com/Tschuck/natural-health-practitioner-jana-goellner">Github</a>
      </div>
    </div>
  );
}
