import JanaGoellnerImg from '@/assets/Jana Goellner.jpg';
import { Trans } from '@lingui/react/macro';

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-background text-hjg-dark">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm text-secondary mb-4">
              <Trans>Naturheilpraxis</Trans>
            </p>

            <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight mb-6">
              <Trans>Aus dem Gleichgewicht geraten?</Trans>
            </h1>

            <p className="text-lg text-hjg-dark-green mb-8 max-w-xl">
              <Trans>Gerne begleite ich Sie auf Ihrem Weg zu mehr Gesundheit, Wohlbefinden und innerer Balance.</Trans>
            </p>

            <button className="px-8 py-3 rounded-full bg-primary text-white hover:bg-primary-hover transition">
              <Trans>Termin vereinbaren</Trans>
            </button>
          </div>

          <div className="relative">
            <img className="aspect-[4/5] rounded-3xl bg-hjg-light-green/40 shadow-lg" src={JanaGoellnerImg} />
            {/* <div className="aspect-[4/5] rounded-3xl bg-hjg-light-green/40 shadow-lg"> */}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-serif mb-6">
          <Trans>Herzlich Willkommen</Trans>
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          <Trans>
            Herzlich Willkommen in meiner Naturheilpraxis für Hormonbalance und Psychosomatik. Ich freue mich, dass Sie
            den Weg zu mir gefunden haben und mehr darüber erfahren möchten, wie ich arbeite.
          </Trans>
        </p>

        <p className="leading-relaxed mb-6">
          <Trans>
            Unsere heutige Zeit ist geprägt von vielseitigen Herausforderungen – ständige Erreichbarkeit, Stress,
            hastiges Essen, wenig oder unruhiger Schlaf, zu wenig Zeit für sich selbst und noch so vieles mehr. Dabei
            geht das Gefühl für die eigenen Bedürfnisse und die Wahrnehmung des Körpers schnell verloren.
          </Trans>
        </p>

        <p className="leading-relaxed">
          <Trans>
            Ihr Körper sendet Ihnen diese Signale. Ich kann Ihnen helfen, sie zu verstehen. Gemeinsam definieren wir
            Ziele und finden Wege, wie Sie Stück für Stück zu mehr Lebensqualität zurückfinden – wie Körper, Geist und
            Seele wieder in Einklang kommen können.
          </Trans>
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-hjg-light-green/30 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-6">
            <Trans>Individuelle Begleitung</Trans>
          </h2>

          <p className="leading-relaxed mb-6">
            <Trans>
              Nach einer ausführlichen Anamnese und Diagnostik erarbeiten wir Ihren persönlichen Therapieplan. Sie
              stehen bei mir im Mittelpunkt. Mir ist wichtig, dass Sie sich gesehen und verstanden fühlen.
            </Trans>
          </p>

          <p className="leading-relaxed">
            <Trans>
              Auf dieser Basis und Ihren persönlichen Ressourcen entscheiden wir gemeinsam, wie ich Sie bestmöglich
              unterstützen kann.
            </Trans>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-serif text-center mb-12">
          <Trans>Meine Schwerpunkte</Trans>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            `Phytotherapie & Adaptogene`,
            `Ernährungsberatung`,
            `Akupressur`,
            `Akupunktur`,
            `Ohrakupunktur`,
            `Reflexzonenmassage`,
            `Mykotherapie`,
            `Vitalstoffe`,
            `Hormonmassagen`,
            `Wirbelsäulentherapie (Dorn & Breuß)`,
            `Homöopathische Hormonpräparate`,
            `Embodiment`,
          ].map((item) => (
            <div key={item} className="p-6 rounded-2xl bg-white/60 backdrop-blur shadow hover:shadow-md transition">
              <p className="font-medium text-hjg-dark-green">
                <Trans>{item}</Trans>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-6">
            <Trans>Bereit für mehr Balance?</Trans>
          </h2>

          <p className="mb-8">
            <Trans>Lassen Sie uns gemeinsam Ihren Weg zu mehr Gesundheit und Wohlbefinden beginnen.</Trans>
          </p>

          <button className="px-8 py-3 rounded-full bg-white text-primary hover:bg-hjg-whitesmoke transition">
            <Trans>Kontakt aufnehmen</Trans>
          </button>
        </div>
      </section>
    </main>
  );
}
