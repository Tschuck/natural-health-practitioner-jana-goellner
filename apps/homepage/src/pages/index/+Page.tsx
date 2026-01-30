import { Trans } from '@lingui/react/macro';
import Section1Image from './assets/section-1.jpg';
import Section2Image from './assets/section-2.jpg';
import Section3Image from './assets/section-3.jpg';
import Section4Image from './assets/section-4.jpg';
import Section5Image from './assets/section-5.jpg';
import Section6Image from './assets/section-6.jpg';
import Section8Image from './assets/section-8.jpg';
import { Button, ButtonType } from '@/components/button.component';

export default function IndexPage() {
  return (
    <main className="min-h-screen gap-16 flex flex-col">
      <section
        className="relative text-hjg-whitesmoke overflow-hidden bg-center flex items-center justify-center max-h-200 bg-cover"
        style={{ height: '80vh', backgroundImage: `url("${Section1Image}")` }}
      >
        {/* <img src={Section1Image} className="absolute z-0 opacity-50" /> */}
        <div className="flex items-center justify-center flex-col gap-4 z-10 max-w-150 text-center">
          <p className="text-sm">
            <Trans>Naturheilpraxis für Hormonbalance & Psychosomatik</Trans>
          </p>
          <h1 className="text-6xl">
            <Trans>Zurück in Ihre innere Balance – ganzheitlich & individuell begleitet</Trans>
          </h1>
          <p className="text-base">
            <Trans>
              Fühlen Sie sich aus dem Gleichgewicht geraten? Ich unterstütze Sie bei hormonellen Beschwerden,
              Stressfolgen und psychosomatischen Symptomen – für mehr Wohlbefinden, Klarheit und Lebensqualität.
            </Trans>
          </p>

          <Button type={ButtonType.OUTLINE_WHITE} className="mt-8">
            Jetzt Erstgespräch vereinbaren
          </Button>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 grid-cols-1 text-hjg-dark-green">
        <img src={Section2Image} />
        <div className="flex items-center justify-center">
          <div>
            <p className="text-sm">
              <Trans>Ihr Körper spricht mit Ihnen. Ich helfe Ihnen, ihn zu verstehen.</Trans>
            </p>
            <h2 className="text-5xl">
              <Trans>Therapieformen & Schwerpunkte</Trans>
            </h2>

            <p>
              <ul className="mt-4 list-disc">
                {[
                  'Phytotherapie & Adaptogene',
                  'Ganzheitliche Ernährungsberatung',
                  'Akupunktur, Ohrakupunktur & Akupressur',
                  'Reflexzonenmassage',
                  'Mykotherapie & Vitalstofftherapie',
                  'Hormonmassagen',
                  'Wirbelsäulentherapie nach Dorn & Breuß-Massage',
                  'Homöopathisch aufbereitete Hormonpräparate',
                  'Embodiment & psychosomatische Begleitung',
                ].map((item) => (
                  <li key={item} className="text-base">
                    <Trans>{item}</Trans>
                  </li>
                ))}
              </ul>
            </p>

            <div>
              <Button type={ButtonType.OUTLINE_DARK} className="mt-8">
                Jetzt Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src={Section3Image} />
      </section>
      <section>
        <img src={Section4Image} />
      </section>
      <section>
        <img src={Section5Image} />
      </section>
      <section>
        <img src={Section6Image} />
      </section>
      <section>
        <img src={Section8Image} />
      </section>
    </main>
  );
}
