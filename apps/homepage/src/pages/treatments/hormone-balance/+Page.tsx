import { Header } from '@/components/header.component';
import { PageWrapper } from '@/components/page-wrapper';
import { TextContent } from '@/components/text.component';
import HormonBalanceImage from '@/assets/hormon-balance.jpg';
import { HeaderImage } from '@/components/HeaderImage';
import { List } from '@/components/list.component';
import { TwoColumns } from '@/components/two-columns.component';
import { Button, ButtonType } from '@/components/button.component';
import { Trans } from '@lingui/react/macro';
import { links } from '@/navigation-entries';

export default function HormonBalanceView() {
  return (
    <>
      <HeaderImage className="mt-8 mx-8 mb-8" height="30vh" image={HormonBalanceImage} />
      <PageWrapper space="narrow">
        <TwoColumns
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
                <TextContent>
                  Anschließend erstelle ich einen individuellen Therapieplan, der berücksichtigt:
                </TextContent>
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
      </PageWrapper>
    </>
  );
}
