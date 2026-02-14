import { Header } from '@/components/header.component';
import { TextContent } from '@/components/text.component';
import { List } from '@/components/list.component';
import { TwoColumns } from '@/components/two-columns.component';
import { Button, ButtonType } from '@/components/button.component';
import { Trans } from '@lingui/react/macro';
import { links } from '@/navigation-entries';
import FTK_0016 from '@/assets/FTK_0016.jpg';
import { Banner } from '@/components/banner.component';

export default function HormonBalanceView() {
  return (
    <>
      <Banner
        className="lg:mx-8 lg:mb-16 "
        image={FTK_0016}
        textPosition="left"
        bgPosition="bg-top"
        glassEffect="false"
        minHeight="min-h-[25vh]"
      >
        <Header type="h2">Hormonbalance als Schlüssel zur Gesundheit</Header>
      </Banner>

      <TwoColumns
        leftAlign="start"
        left={
          <div className=" flex flex-col gap-4">
            <Header className="mb-4" type="h3">
              Hormonbalance
            </Header>
            <TextContent>
              Ich bin ausgebildete Hormonpraktikerin (Ausbildung bei Dr. med. univ. Berndt Rieger) und betrachte den
              Hormonhaushalt nicht isoliert, sondern als fein abgestimmtes Netzwerk.
            </TextContent>

            <TextContent>
              Zu Beginn steht immer ein ausführliches Gespräch, in dem wir Ihr Anliegen, Ihren Auftrag und Ihre Ziele
              klar definieren. Darauf aufbauend erfolgt eine umfassende Anamnese, bei Bedarf ergänzt durch
              Laboranalysen, körperliche Untersuchung und Schilddrüsenultraschall.
            </TextContent>

            <div>
              <TextContent>Anschließend erstelle ich einen individuellen Therapieplan, der berücksichtigt:</TextContent>
              <List
                entries={[
                  'Ihre bisherigen Erfahrungen und Vorerkrankungen',
                  'eventuelle Medikamenteneinnahme',
                  'Ihre persönlichen Ressourcen',
                  'und was in Ihrem Alltag realistisch umsetzbar ist',
                ]}
              />
            </div>
            <div>
              <TextContent>Meine hormonelle Arbeit kann u.a. beinhalten:</TextContent>
              <List
                entries={[
                  'Mykotherapie, Adaptogene, Phytotherapie homöopathische',
                  'Komplexmittel und Vitalstoffe',
                  'bioidentische, homöopathisch aufbereitete Hormone',
                  'Ernährung, Schlafregulation, Stressmanagement, Bewegung',
                  'Hormonmassage, Akupunktur, Ohrakupunktur, Akupressur',
                  'Meridianübungen für zu Hause',
                ]}
              />
            </div>
          </div>
        }
        rightAlign="start"
        right={
          <div className="flex flex-col gap-4 lg:mt-18">
            <TextContent>
              Ein zentraler Bestandteil ist das Verständnis für das Zusammenspiel der drei großen Hormondrüsen:
            </TextContent>

            <TextContent>Schilddrüse – Nebennieren – Geschlechtsdrüsen (Ovarien/Hoden).</TextContent>

            <TextContent>
              Oft genügt es, an einer Stelle gezielt Impulse zu setzen, damit sich das gesamte Hormonsystem wieder
              regulieren kann.
            </TextContent>

            <div>
              <TextContent>Ich behalte außerdem stets im Blick:</TextContent>
              <List
                entries={[
                  'die Steuerdrüsen Hypothalamus & Hypophyse',
                  'den Einfluss von Viruspersistenzen',
                  'Leber- und Darmgesundheit',
                  'sowie einen stabilen Blutzucker, der für hormonelle Balance entscheidend ist.',
                ]}
              />
            </div>

            <div>
              <TextContent>Unterstützung biete ich u.a. bei:</TextContent>
              <List
                entries={[
                  'Schilddrüsenfunktionsstörungen (Hypo-/Hyperthyreose, Autoimmunprozesse)',
                  'Zyklusstörungen',
                  'Kinderwunsch',
                  'Wechseljahresbeschwerden',
                  'Nebennierenerschöpfung, Burnout, Schlafstörungen',
                  'Testosteronmangel',
                ]}
              />
            </div>

            <div>
              <Header type="b">Schilddrüsenultraschall</Header>

              <TextContent>
                Der Schilddrüsenultraschall ist eine sichere und wertvolle Diagnosemethode in meiner Praxis. Er hilft,
                Struktur, Größe und Funktion der Schilddrüse zu beurteilen. Dies ist ein Schlüsselelement bei der
                Therapiewahl und der Einschätzung des Krankheitsverlaufs. Er kann uns die entscheidenden Hinweise geben,
                wie gut Ihre Schilddrüse arbeiten kann.
              </TextContent>
            </div>

            <div className="mt-8">
              <Button className="mr-4" type={ButtonType.OUTLINE_GREEN} href={links.treatments.path}>
                <Trans>Zurück zu allen Behandlungen</Trans>
              </Button>
              <Button type={ButtonType.FILLED_GREEN} href={links.contact.path}>
                <Trans>Termin vereinbaren</Trans>
              </Button>
            </div>
          </div>
        }
      />
    </>
  );
}
