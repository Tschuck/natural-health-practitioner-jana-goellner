import { Header } from '@/components/header.component';
import { PageWrapper } from '@/components/page-wrapper';
import { TextContent } from '@/components/text.component';
import AcupunctureImage from '@/assets/acupuncture.jpg';
import { HeaderImage } from '@/components/HeaderImage';
import { List } from '@/components/list.component';
import { TwoColumnsText } from '@/components/two-columns-text.component';
import { Button, ButtonType } from '@/components/button.component';
import { Trans } from '@lingui/react/macro';
import { links } from '@/navigation-entries';

export default function AcupunctureView() {
  return (
    <>
      <div className="relative text-hjg-dark-green mb-8">
        <HeaderImage className="mt-8 mx-8 opacity-70" height="30vh" image={AcupunctureImage} />
        <div className="absolute right-0 top-0 left-0 bottom-0 p-16 flex justify-center flex-col text-center items-center w-full">
          <Header className="max-w-1/2" type="h1">
            „Es gibt auch Krankheiten, die ›bestechlich‹ sind.“
          </Header>
          <TextContent>(Gerhard Uhlenbruck)</TextContent>
        </div>
      </div>
      <PageWrapper space="narrow">
        <TwoColumnsText
          left={
            <div className=" flex flex-col gap-4">
              <Header className="mb-4" type="h3">
                Akupunktur & Traditionelle Chinesische Medizin
              </Header>
              <TextContent>
                Akupunktur ist ein jahrtausendealtes Therapieverfahren der Traditionellen Chinesischen Medizin (TCM).
                Mit feinen Nadeln werden bestimmte Punkte stimuliert, um den Energiefluss (Qi) im Körper zu regulieren.
              </TextContent>

              <div>
                <TextContent>Akupunktur kann:</TextContent>
                <List
                  entries={[
                    'tonisierend (aktivierend)',
                    'oder sedierend (beruhigend, bremsend)',
                    'eingesetzt werden – je nachdem, was Ihr System benötigt',
                  ]}
                />
              </div>

              <div>
                <TextContent>
                  Ich arbeite unter anderem mit sanfter japanischer Akupunktur, die ich bei HP Jens-Peter Salzmann sowie
                  in Seminaren bei Dr. Sakae Yoneyama erlernt habe
                </TextContent>
                <List
                  entries={[
                    'Akupunktur ist eine Regulationstherapie. Sie zielt nicht primär auf das einzelne Symptom, sondern darauf, den Menschen als Ganzes wieder in ein inneres Gleichgewicht zu führen.',
                  ]}
                />
              </div>
            </div>
          }
          right={
            <div className="flex flex-col gap-4 lg:mt-28">
              <div>
                <TextContent>Sie kann unterstützend eingesetzt werden bei z.B.:</TextContent>
                <List
                  entries={[
                    'Schmerzen & Verspannungen',
                    'Kopfschmerzen',
                    'Narbenentstörung',
                    'hormonellen Dysbalancen',
                    'psychosomatischen Beschwerden',
                    'Magen-Darm-Erkrankungen (z.B. Reizdarm)',
                    'depressiven Verstimmungen, psychovegetativen Symptomen u.v.m',
                  ]}
                />
              </div>

              <TextContent>
                Nicht geeignet ist Akupunktur u.a. bei schweren psychischen Erkrankungen, akuten Psychosen, Epilepsie,
                hochwirksamer Blutverdünnung oder schweren Tumorerkrankungen – dies wird selbstverständlich im Rahmen
                der Anamnese sorgfältig abgeklärt.
              </TextContent>

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
