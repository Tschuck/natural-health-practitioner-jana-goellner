import { Banner } from '@/components/banner.component';
import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { List } from '@/components/list.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import FTK_0043 from '@/assets/optimized/FTK_0043.webp';
import FTK_0037 from '@/assets/optimized/FTK_0037.webp';
import { links } from '@/navigation-entries';
import { Trans } from '@lingui/react/macro';
import { ImageCard } from '@/components/image.component';

export default function AcupunctureView() {
  return (
    <>
      <Banner
        className="lg:mx-8 lg:mb-16 text-hjg-whitesmoke"
        image={FTK_0043}
        textPosition="left"
        bgPosition="bg-right"
        glassEffect="false"
        minHeight="min-h-[25vh]"
      >
        <Header type="h2">„Es gibt auch Krankheiten, die ›bestechlich‹ sind.“</Header>
        <TextContent>(Gerhard Uhlenbruck)</TextContent>
      </Banner>

      <TwoColumns
        leftAlign="start"
        left={
          <div className="flex flex-col gap-4">
            <Header className="mb-4" type="h3">
              Akupunktur & Traditionelle Chinesische Medizin
            </Header>
            <TextContent>
              Akupunktur ist ein jahrtausendealtes Therapieverfahren der Traditionellen Chinesischen Medizin (TCM). Mit
              feinen Nadeln werden bestimmte Punkte stimuliert, um den Energiefluss (Qi) im Körper zu regulieren.
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
                bei Dr. Sakae Yoneyama erlernt habe
              </TextContent>
              <List
                entries={[
                  'Akupunktur ist eine Regulationstherapie. Sie zielt nicht primär auf das einzelne Symptom, sondern darauf, den Menschen als Ganzes wieder in ein inneres Gleichgewicht zu führen.',
                ]}
              />
            </div>

            <div className="flex justify-center mt-4">
              <ImageCard image={FTK_0037} size="small" />
            </div>
          </div>
        }
        rightAlign="start"
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
              hochwirksamer Blutverdünnung oder schweren Tumorerkrankungen – dies wird selbstverständlich im Rahmen der
              Anamnese sorgfältig abgeklärt.
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
    </>
  );
}
