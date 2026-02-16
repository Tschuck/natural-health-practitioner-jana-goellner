import { Header } from '@/components/header.component';
import config from '@/config/config';
import { Trans } from '@lingui/react/macro';

export default function DataSecurityView() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:px-16 lg:max-w-300">
      <Header type="h2">Datenschutzerklärung</Header>

      {/** Section 1 */}
      <div>
        <b>
          <Trans>1. Verantwortliche Stelle</Trans>
        </b>
        <p className="mt-2">
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
          <Trans>Tel: {config.phoneNumber}</Trans>
        </p>
        <p>
          <Trans>E-Mail: {config.email}</Trans>
        </p>
      </div>

      {/** Section 2 */}
      <div>
        <b>
          <Trans>2. Allgemeine Hinweise zur Datenverarbeitung</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges Anliegen. Ich behandle Ihre personenbezogenen
            Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können (z. B. Name,
            E-Mail-Adresse).
          </Trans>
        </p>
      </div>

      {/** Section 3 */}
      <div>
        <b>
          <Trans>3. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Beim Aufrufen dieser Website werden automatisch Informationen durch den Browser Ihres Endgeräts an den
            Server der Website gesendet. Diese Informationen werden jedoch nicht gespeichert oder protokolliert. Zu
            Informationen zum Kontaktformular, lesen Sie bitte Punkt "5. Kontaktaufnahme".
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>
            Es erfolgt keine Speicherung von Logfiles oder anderen personenbezogenen Daten beim Besuch der Website. Die
            Datenübertragung dient ausschließlich der technischen Bereitstellung der Website.
          </Trans>
        </p>
      </div>

      {/** Section 4 */}
      <div>
        <b>
          <Trans>4. Hosting und technische Dienstleister</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Diese Website wird auf Servern der Amazon Web Services (AWS) in der EU gehostet. Der gesamte Datenverkehr
            wird über Cloudflare (Cloudflare Inc., USA/EU) als Content Delivery Network und Sicherheitsdienstleister
            geleitet. Cloudflare speichert und verarbeitet Daten ausschließlich zur Absicherung und Optimierung der
            Verbindung (z. B. Schutz vor DDoS-Angriffen). Es werden keine personenbezogenen Daten zu Analyse- oder
            Werbezwecken verarbeitet.
          </Trans>
        </p>
      </div>

      {/** Section 5 */}
      <div>
        <b>
          <Trans>5. Kontaktaufnahme</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Wenn Sie mich per E-Mail oder Kontaktformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen
            angegebenen Kontaktdaten gespeichert, um Ihre Anfrage zu bearbeiten und für den Fall von Anschlussfragen.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>Wenn Sie das Kontaktformular nutzen, werden folgende Daten erhoben:</Trans>
        </p>
        <ul className="my-2 ml-6 list-disc">
          <li>
            <Trans>Name</Trans>
          </li>
          <li>
            <Trans>E-Mail-Adresse</Trans>
          </li>
          <li>
            <Trans>Telefonnummer</Trans>
          </li>
          <li>
            <Trans>Ihre Nachricht</Trans>
          </li>
          <li>
            <Trans>Ihre Einwilligung zur Datenverarbeitung</Trans>
          </li>
        </ul>
        <p className="mt-2">
          <Trans>
            Die Kontaktanfragen werden per E-Mail über ProtonMail (Ende-zu-Ende-verschlüsselt) versendet. Diese Daten
            gebe ich nicht ohne Ihre Einwilligung weiter.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>Rechtsgrundlage:</Trans>
        </p>
        <ul className="my-2 ml-6 list-disc">
          <li>
            <Trans>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</Trans>
          </li>
          <li>
            <Trans>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</Trans>
          </li>
        </ul>
      </div>

      {/** Section 6 */}
      <div>
        <b>
          <Trans>6. Gesundheitsbezogene Daten</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Sofern Sie mir im Rahmen einer Anfrage oder Terminvereinbarung gesundheitsbezogene Informationen
            übermitteln, erfolgt die Verarbeitung dieser besonders sensiblen Daten ausschließlich zur Vorbereitung oder
            Durchführung einer Behandlung.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>Rechtsgrundlage: Art. 9 Abs. 2 lit. a DSGVO (ausdrückliche Einwilligung)</Trans>
        </p>
      </div>

      {/** Section 7 */}
      <div>
        <b>
          <Trans>7. Cookies</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Diese Website verwendet ggf. Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
            werden.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>
            Technisch notwendige Cookies dienen der Funktionalität der Website. Es werden keine Cookies gesetzt, die der
            Wiedererkennung von Besuchern dienen. Es findet kein Tracking oder Profiling der Besucher statt.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>Rechtsgrundlage:</Trans>
        </p>
        <ul className="my-2 ml-6 list-disc">
          <li>
            <Trans>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</Trans>
          </li>
          <li>
            <Trans>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</Trans>
          </li>
        </ul>
      </div>

      {/** Section 8 */}
      <div>
        <b>
          <Trans>8. Speicherdauer</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke
            erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
          </Trans>
        </p>
      </div>

      {/** Section 9 */}
      <div>
        <b>
          <Trans>9. Ihre Rechte</Trans>
        </b>
        <p className="mt-2">
          <Trans>Sie haben jederzeit das Recht:</Trans>
        </p>
        <ul className="my-2 ml-6 list-disc">
          <li>
            <Trans>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</Trans>
          </li>
          <li>
            <Trans>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</Trans>
          </li>
          <li>
            <Trans>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</Trans>
          </li>
          <li>
            <Trans>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</Trans>
          </li>
          <li>
            <Trans>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</Trans>
          </li>
          <li>
            <Trans>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</Trans>
          </li>
        </ul>
        <p className="mt-2">
          <Trans>Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</Trans>
        </p>
        <p className="mt-2">
          <Trans>Bitte wenden Sie sich für die Ausübung Ihrer Rechte an die oben genannte Kontaktadresse.</Trans>
        </p>
      </div>

      {/** Section 10 */}
      <div>
        <b>
          <Trans>10. Widerruf Ihrer Einwilligung</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Eine bereits erteilte Einwilligung zur Datenverarbeitung können Sie jederzeit mit Wirkung für die Zukunft
            widerrufen.
          </Trans>
        </p>
      </div>

      {/** Section 11 */}
      <div>
        <b>
          <Trans>11. SSL- bzw. TLS-Verschlüsselung</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
            Verbindung erkennen Sie an „https://" in der Adresszeile Ihres Browsers.
          </Trans>
        </p>
        <p className="mt-2">
          <Trans>
            Die Übertragung Ihrer Daten erfolgt verschlüsselt. Wir treffen technische und organisatorische Maßnahmen, um
            Ihre Daten vor unbefugtem Zugriff zu schützen.
          </Trans>
        </p>
      </div>

      {/** Section 12 */}
      <div>
        <b>
          <Trans>12. Aktualität und Änderung dieser Datenschutzerklärung</Trans>
        </b>
        <p className="mt-2">
          <Trans>
            Diese Datenschutzerklärung ist aktuell gültig. Durch Weiterentwicklung der Website oder gesetzliche
            Änderungen kann eine Anpassung erforderlich werden.
          </Trans>
        </p>
      </div>
    </div>
  );
}
