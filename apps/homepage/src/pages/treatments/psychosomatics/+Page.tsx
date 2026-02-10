import { Header } from '@/components/header.component';
import { PageWrapper } from '@/components/page-wrapper';
import { TextContent } from '@/components/text.component';
import PsychosomaticsImage from '@/assets/psychosomatics.jpg';
import { HeaderImage } from '@/components/HeaderImage';
import { List } from '@/components/list.component';
import { TwoColumns } from '@/components/two-columns.component';
import { Button, ButtonType } from '@/components/button.component';
import { Trans } from '@lingui/react/macro';
import { links } from '@/navigation-entries';

export default function PsychosomatcsView() {
  return (
    <>
      <div className="relative text-hjg-dark-green mb-8">
        <HeaderImage className="mt-8 mx-8" height="30vh" image={PsychosomaticsImage} />
        <div className="absolute right-0 top-0 bottom-0 p-16 max-w-1/2 flex items-center justify-center flex-col text-center">
          <Header type="h1">„Der Körper meint es gut mit uns und will uns helfen, das Gute im Leben zu finden.“</Header>
          <TextContent>(Hanne Seemann)</TextContent>
        </div>
      </div>
      <PageWrapper space="narrow">
        <TwoColumns
          left={
            <div className="flex flex-col gap-4">
              <Header className="mb-4" type="h3">
                Psychosomatik & seelisch-körperliche Gesundheit
              </Header>
              <TextContent>
                Psychosomatische Symptome sind keine Einbildung. Sie sind echte körperliche Reaktionen, die häufig aus
                einem komplexen Zusammenspiel von Körper, Nervensystem, Emotionen und Lebensumständen entstehen.
              </TextContent>

              <TextContent>
                Voraussetzung ist immer, dass organische Ursachen zuvor ärztlich abgeklärt wurden (z.B. bei
                Herzstolpern, Schwindel, anhaltenden Schmerzen).
              </TextContent>

              <div>
                <TextContent>In meiner Praxis unterstütze ich Sie dabei:</TextContent>
                <List
                  entries={[
                    'Symptome einzuordnen und ihre Bedeutung zu verstehen',
                    'Zusammenhänge zwischen Körper, Psyche und Lebenssituation zu erkennen',
                    'den Umgang mit den Beschwerden zu verändern',
                    'innere Ressourcen zu aktivieren und Selbstregulation zu fördern',
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
            <div className="flex flex-col gap-4 lg:mt-28">
              <div>
                <TextContent>Je nach Situation arbeite ich u.a. mit:</TextContent>
                <List
                  entries={[
                    'Akupunktur & Ohrakupunktur (starke Verbindung von Körper und Psyche)',
                    'Phytotherapie',
                    'Gesprächsführung nach Carl R. Rogers',
                    'Achtsamkeitsübungen',
                    'Meridianmassage & Akupressur',
                    'Hypnose',
                  ]}
                />
              </div>

              <div>
                <TextContent>Psychosomatische Beschwerdebilder können z.B. sein:</TextContent>
                <List
                  entries={[
                    'Verdauungsstörungen (Reizdarm, Magenschmerzen)',
                    'Schwindel',
                    'Erschöpfungszustände',
                    'Herzstolpern, Herzrasen',
                    'Kopfschmerzen und andere Schmerzsyndrome',
                    'psychovegetative Beschwerden',
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
