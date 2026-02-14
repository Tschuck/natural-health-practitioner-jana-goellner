import { Banner } from '@/components/banner.component';
import { Header } from '@/components/header.component';
import { ImageCard } from '@/components/image.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import FTK_0028 from '@/assets/optimized/FTK_0028.webp';
import FTK_0071 from '@/assets/optimized/FTK_0071.webp';
import { Trans } from '@lingui/react/macro';

export default function AboutMeView() {
  return (
    <>
      <div className="">
        <Banner
          className="lg:mx-8 lg:mb-16 "
          image={FTK_0028}
          textPosition="left"
          bgPosition="bg-top"
          glassEffect="false"
          minHeight="min-h-[25vh]"
        >
          <Header type="h2">"Glück ist, wen das Herz tanzt und die Seele singt."</Header>
        </Banner>

        <TwoColumns
          leftClass={'p-0 aspect-square max-w-[450px] lg:max-h-none'}
          left={
            <>
              <ImageCard image={FTK_0071} size="custom" className="w-full h-full" />
            </>
          }
          rightAlign="center"
          right={
            <>
              <Header type="h3">Über mich – Heilpraktikerin, Hebamme & Hormonpraktikerin</Header>

              <TextContent>
                Dieser Leitsatz beschreibt sehr gut, was mich seit vielen Jahren antreibt: die tiefe Überzeugung, dass
                echte Gesundheit entsteht, wenn Körper, Geist und Seele im Einklang sind.
              </TextContent>

              <TextContent>
                Schon während meiner Schulzeit hat mich die Frage fasziniert, was Menschen wirklich gesund hält. Diese
                Neugier auf den menschlichen Körper, die Liebe zum Lernen und meine tiefe Naturverbundenheit haben mich
                auf meinen heutigen Weg geführt. Ich liebe es, Menschen einfühlsam zu begleiten – hin zu mehr Balance,
                Lebensfreude und innerer Stabilität.
              </TextContent>
            </>
          }
        />

        <TwoColumns
          className="mt-8"
          leftAlign="start"
          left={
            <>
              <Header type="h3">
                <Trans>Mein beruflicher Weg</Trans>
              </Header>

              <TextContent>
                Im Jahr 2013 schloss ich meine Ausbildung zur staatlich geprüften Hebamme ab und arbeitete viele Jahre
                sowohl klinisch als auch freiberuflich. Die Begleitung von Frauen, Paaren und Familien in einer der
                sensibelsten Phasen des Lebens hat meine Arbeit bis heute tief geprägt.
                <br />
                Parallel dazu begann ich meine intensive Beschäftigung mit der Traditionellen Chinesischen Medizin
                (TCM), Akupunktur und ganzheitlichen Heilverfahren. Von 2015 bis 2017 absolvierte ich die
                Heilpraktikerausbildung an der Paracelsus Schule in Erfurt mit dem Schwerpunkt TCM (Akupunktur,
                Akupunkt-Massage, Phytotherapie und Diagnostik). 2018 erhielt ich die Heilpraktikererlaubnis.
              </TextContent>

              <TextContent>
                Über die Jahre folgten zahlreiche Fort- und Weiterbildungen in Akupunktur, Psychosomatik,
                Hormontherapie, Ernährungsmedizin, Körpertherapie und Gesprächsführung, unter anderem bei renommierten
                Dozenten wie Anna Blaack, Jens-Peter Salzmann, Dr. Sakae Yoneyama und Franz Thews.
              </TextContent>

              <TextContent>
                Ein besonderer Fokus meiner heutigen Arbeit liegt auf der Hormonbalance und psychosomatischen
                Gesundheit. 2024 absolvierte ich die Ausbildung zum Hormoncoach, 2025 folgte der Abschluss als
                Hormonpraktikerin. Ergänzend dazu habe ich mich intensiv in Psychosomatik, Hypnose,
                neurowissenschaftlich fundiertem Coaching und Gesprächsführung nach Carl R. Rogers weitergebildet.
              </TextContent>
            </>
          }
          rightAlign="start"
          right={
            <>
              <header className="text-2xl lg:text-4xl">
                <Trans>Mein Ansatz</Trans>
              </header>

              <TextContent>
                In meiner Praxis verbinde ich naturheilkundliche Verfahren, moderne Hormontherapie, Traditionelle
                Chinesische Medizin, Akupunktur und psychotherapeutisch orientierte Methoden.
              </TextContent>

              <TextContent>
                Ich betrachte den Menschen immer ganzheitlich – mit seiner Geschichte, seinen körperlichen Symptomen,
                seinem emotionalen Erleben und seinen Lebensumständen.
              </TextContent>

              <TextContent>
                Mein Ziel ist es, nicht nur Symptome zu lindern, sondern Ursachen zu verstehen, Selbstheilungskräfte zu
                aktivieren und nachhaltige Veränderungen zu ermöglichen.
              </TextContent>

              <Header type="h3">
                <Trans>Auch persönlich wichtig</Trans>
              </Header>

              <TextContent>
                Ich bin Mama von zwei Jungs – meine Familie ist mein Kraftort und erinnert mich jeden Tag daran, wie
                wertvoll Gesundheit, innere Balance und echte Verbindung sind.
              </TextContent>

              <TextContent>
                Diese Erfahrung fließt ebenso in meine Arbeit ein wie mein fundiertes medizinisches und
                naturheilkundliches Wissen.
              </TextContent>
            </>
          }
        />
      </div>
    </>
  );
}
