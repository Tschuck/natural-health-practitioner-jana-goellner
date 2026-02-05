import { Trans } from '@lingui/react/macro';
import AboutMeImage1 from '@/assets/image-1.jpg';
import JanaGreenBackground from '@/assets/jana-green-background.jpg';
import { PageWrapper } from '@/components/page-wrapper';

export default function AboutMeView() {
  return (
    <>
      <div className="text-hjg-dark-green">
        <section
          className="w-full overflow-hidden relative flex items-center justify-center"
          style={{ height: '40vh' }}
        >
          <div
            className="w-full bg-center bg-cover h-full opacity-70 absolute"
            style={{ backgroundImage: `url("${AboutMeImage1}")` }}
          />

          <h1 className="text-4xl lg:text-6xl lg:max-w-2/3 px-16 text-center text-white z-10 content">
            <Trans>"Glück ist, wen das Herz tanzt und die Seele singt."</Trans>
          </h1>
        </section>

        <PageWrapper>
          <section className="lg:grid grid-cols-2 gap-4 lg:gap-16 mt-8 lg:mt-16">
            <div className="">
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl lg:text-5xl">
                  <Trans>Über mich – Heilpraktikerin, Hebamme & Hormonpraktikerin</Trans>
                </h2>

                <p>
                  <Trans>
                    Dieser Leitsatz beschreibt sehr gut, was mich seit vielen Jahren antreibt: die tiefe Überzeugung,
                    dass echte Gesundheit entsteht, wenn Körper, Geist und Seele im Einklang sind.
                  </Trans>
                </p>

                <p>
                  <Trans>
                    Schon während meiner Schulzeit hat mich die Frage fasziniert, was Menschen wirklich gesund hält.
                    Diese Neugier auf den menschlichen Körper, die Liebe zum Lernen und meine tiefe Naturverbundenheit
                    haben mich auf meinen heutigen Weg geführt. Ich liebe es, Menschen einfühlsam zu begleiten – hin zu
                    mehr Balance, Lebensfreude und innerer Stabilität.
                  </Trans>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center lg:mt-0 mt-8">
              <div
                className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128"
                style={{ height: '80vh', backgroundImage: `url("${JanaGreenBackground}")` }}
              />
            </div>
          </section>

          <section className="mt-8 lg:mt-0 lg:pt-24 lg:grid grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl lg:text-4xl">
                <Trans>Mein beruflicher Weg</Trans>
              </h3>

              <p>
                <Trans>
                  Im Jahr 2013 schloss ich meine Ausbildung zur staatlich geprüften Hebamme ab und arbeitete viele Jahre
                  sowohl klinisch als auch freiberuflich. Die Begleitung von Frauen, Paaren und Familien in einer der
                  sensibelsten Phasen des Lebens hat meine Arbeit bis heute tief geprägt.
                  <br />
                  Parallel dazu begann ich meine intensive Beschäftigung mit der Traditionellen Chinesischen Medizin
                  (TCM), Akupunktur und ganzheitlichen Heilverfahren. Von 2015 bis 2017 absolvierte ich die
                  Heilpraktikerausbildung an der Paracelsus Schule in Erfurt mit dem Schwerpunkt TCM (Akupunktur,
                  Akupunkt-Massage, Phytotherapie und Diagnostik). 2018 erhielt ich die Heilpraktikererlaubnis.
                </Trans>
              </p>

              <p>
                <Trans>
                  Über die Jahre folgten zahlreiche Fort- und Weiterbildungen in Akupunktur, Psychosomatik,
                  Hormontherapie, Ernährungsmedizin, Körpertherapie und Gesprächsführung, unter anderem bei renommierten
                  Dozenten wie Anna Blaack, Jens-Peter Salzmann, Dr. Sakae Yoneyama und Franz Thews.
                </Trans>
              </p>

              <p>
                <Trans>
                  Ein besonderer Fokus meiner heutigen Arbeit liegt auf der Hormonbalance und psychosomatischen
                  Gesundheit. 2024 absolvierte ich die Ausbildung zum Hormoncoach, 2025 folgte der Abschluss als
                  Hormonpraktikerin. Ergänzend dazu habe ich mich intensiv in Psychosomatik, Hypnose,
                  neurowissenschaftlich fundiertem Coaching und Gesprächsführung nach Carl R. Rogers weitergebildet.
                </Trans>
              </p>
            </div>

            <div className="flex flex-col items-start justify-start gap-8 mt-8 lg:mt-0">
              <h3 className="text-2xl lg:text-4xl">
                <Trans>Mein Ansatz</Trans>
              </h3>

              <p>
                <Trans>
                  In meiner Praxis verbinde ich naturheilkundliche Verfahren, moderne Hormontherapie, Traditionelle
                  Chinesische Medizin, Akupunktur und psychotherapeutisch orientierte Methoden.
                </Trans>
              </p>

              <p>
                <Trans>
                  Ich betrachte den Menschen immer ganzheitlich – mit seiner Geschichte, seinen körperlichen Symptomen,
                  seinem emotionalen Erleben und seinen Lebensumständen.
                </Trans>
              </p>

              <p>
                <Trans>
                  Mein Ziel ist es, nicht nur Symptome zu lindern, sondern Ursachen zu verstehen, Selbstheilungskräfte
                  zu aktivieren und nachhaltige Veränderungen zu ermöglichen.
                </Trans>
              </p>

              <h3 className="text-2xl lg:text-4xl">
                <Trans>Auch persönlich wichtig</Trans>
              </h3>

              <p>
                <Trans>
                  Ich bin Mama von zwei Jungs – meine Familie ist mein Kraftort und erinnert mich jeden Tag daran, wie
                  wertvoll Gesundheit, innere Balance und echte Verbindung sind.
                </Trans>
              </p>

              <p>
                <Trans>
                  Diese Erfahrung fließt ebenso in meine Arbeit ein wie mein fundiertes medizinisches und
                  naturheilkundliches Wissen.
                </Trans>
              </p>
            </div>
          </section>
        </PageWrapper>
      </div>
    </>
  );
}
