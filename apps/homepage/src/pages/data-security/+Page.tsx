import { PageWrapper } from '@/components/page-wrapper';
import { Trans } from '@lingui/react/macro';

export default function DataSecurityView() {
  return (
    <PageWrapper className="flex flex-col gap-4">
      <h1 className="text-3xl lg:text-5xl">Datenschutzerklärung</h1>
      <div>
        <b>
          <Trans>1. Verantwortlicher</Trans>
        </b>
        <p>
          <Trans>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</Trans>
        </p>

        <p>
          <Trans>Jana Göllner</Trans>
        </p>
        <p>
          <Trans>Kasseler Straße 31</Trans>
        </p>
        <p>
          <Trans>99817 Eisenach</Trans>
        </p>
        <p>
          <Trans>E-Mail: [Ihre E-Mail-Adresse]</Trans>
        </p>
        <p>
          <Trans>Telefon: [Ihre Telefonnummer]</Trans>
        </p>
      </div>

      <div>
        <b>
          <Trans>2. Hosting und Zugriffsdaten</Trans>
        </b>
        <p>
          <Trans>
            Diese Website wird auf Servern der Amazon Web Services (AWS) in der EU gehostet. Der gesamte Datenverkehr
            wird über Cloudflare (Cloudflare Inc., USA/EU) als Content Delivery Network und Sicherheitsdienstleister
            geleitet. Cloudflare speichert und verarbeitet Daten ausschließlich zur Absicherung und Optimierung der
            Verbindung (z. B. Schutz vor DDoS-Angriffen). Es werden keine personenbezogenen Daten zu Analyse- oder
            Werbezwecken verarbeitet.
          </Trans>
        </p>
      </div>

      <div>
        <b>
          <Trans>3. Cookies und Tracking</Trans>
        </b>
        <p>
          <Trans>
            Es werden keine Cookies gesetzt, die der Wiedererkennung von Besuchern dienen. Es findet kein Tracking oder
            Profiling der Besucher statt.
          </Trans>
        </p>
      </div>

      <div>
        <b className="font-bold">
          <Trans>4. Kontaktformular</Trans>
        </b>
        <p>
          <Trans>Wenn Sie das Kontaktformular nutzen, werden folgende Daten erhoben:</Trans>
        </p>
        <ul className="my-4 ml-4 list-disc">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Ihre Nachricht</li>
          <li>Ihre Einwilligung zur Datenverarbeitung</li>
        </ul>
        <p>
          <Trans>
            Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Die Übermittlung erfolgt
            verschlüsselt (TLS/SSL). Die Daten werden nicht gespeichert oder protokolliert, sondern direkt an unseren
            Server übertragen und per E-Mail (ProtonMail) an uns weitergeleitet. Eine Weitergabe an Dritte erfolgt
            nicht.
          </Trans>
        </p>
      </div>

      <div>
        <b>
          <Trans>5. E-Mail-Kommunikation</Trans>
        </b>
        <p>
          <Trans>
            Die Kontaktanfragen werden per E-Mail über ProtonMail (Ende-zu-Ende-verschlüsselt) versendet. Die E-Mails
            werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
          </Trans>
        </p>
      </div>

      <div>
        <b>
          <Trans>6. Ihre Rechte</Trans>
        </b>
        <p>
          <Trans>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen
            die Verarbeitung sowie das Recht auf Datenübertragbarkeit Ihrer personenbezogenen Daten. Sie können eine
            erteilte Einwilligung jederzeit widerrufen. Bitte wenden Sie sich dazu an die oben genannte Kontaktadresse.
          </Trans>
        </p>
      </div>
      <div>
        <b>
          <Trans>7. Beschwerderecht</Trans>
        </b>
        <p>
          <Trans>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</Trans>
        </p>
      </div>

      <div>
        <b>
          <Trans>8. Sicherheit</Trans>
        </b>
        <p>
          <Trans>
            Die Übertragung Ihrer Daten erfolgt verschlüsselt. Wir treffen technische und organisatorische Maßnahmen, um
            Ihre Daten vor unbefugtem Zugriff zu schützen.
          </Trans>
        </p>
      </div>

      <div>
        <b>
          <Trans>9. Änderungen</Trans>
        </b>
        <p>
          <Trans>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei
            Änderungen des Dienstes sowie der Datenverarbeitung anzupassen.
          </Trans>
        </p>
      </div>
    </PageWrapper>
  );
}
