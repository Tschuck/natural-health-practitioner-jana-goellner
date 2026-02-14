import { Header } from '@/components/header.component';
import config from '@/config/config';
import { Trans } from '@lingui/react/macro';

export default function ImprintView() {
  return (
    <div className="flex flex-col gap-4 p-4 lg:px-16 lg:max-w-300">
      <Header type="h2">Impressum</Header>
      <p>
        <Trans>Angaben gemäß §§ 5 und 6 DDG</Trans>
      </p>

      <div>
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

        <p>
          <Trans>Mail: {config.email}</Trans>
        </p>
        <p>
          <Trans>Tel: {config.phoneNumber}</Trans>
        </p>
      </div>

      <b className="font-bold">
        <Trans>Berufsbezeichnung: Heilpraktikerin</Trans>
      </b>

      <p>
        <Trans>
          Urkunde: Erlaubnis zur berufsmäßigen Ausübung der Heilkunde ohne Bestallung (Deutschland) Ausgestellt am
          24.05.2018
        </Trans>
      </p>

      <b className="font-bold">
        <Trans>Zuständige Aufsichtsbehörde:</Trans>
      </b>
      <div>
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
          <p>
            <Trans>Gesundheitsamt Eisenach</Trans>
          </p>
          <p>
            <Trans>Ernst-Thälmann-Straße 74</Trans>
          </p>
          <p>
            <Trans>99817 Eisenach</Trans>
          </p>
          <p>
            <Trans>36433 Bad Salzungen</Trans>
          </p>
          <p>
            <Trans>03695 617401</Trans>
          </p>
          <p>
            <Trans>https://www.wartburgkreis.de/landratsamt/aemter-einrichtungen/gesundheitsamt</Trans>
          </p>
        </div>
      </div>

      <div>
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
        <p>
          <Trans>Berufsordnung: Berufsordnung für Heilpraktiker</Trans>
        </p>
        <p>https://www.vdh-heilpraktiker.de/fileadmin/nutzerdateien/Formulare/allgemeines/Berufsordnung.pdf</p>
      </div>

      <div>
        <b className="font-bold">
          <Trans>Haftpflichtversicherung</Trans>
        </b>
        <p>
          <Trans>Berufsverband: Mitglied im VDH- Verband deutscher Heilpraktiker</Trans>
        </p>
        <p>
          <Trans>Todo: Name der Versicherung, Adresse</Trans>
        </p>
        <p>
          <Trans>Geltungsraum der Versicherung: Deutschland</Trans>
        </p>
      </div>
    </div>
  );
}
