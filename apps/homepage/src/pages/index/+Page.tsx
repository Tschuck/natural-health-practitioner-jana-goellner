import { Trans } from '@lingui/react/macro';
import Section1Image from '@/assets/section-1.jpg';
import Section2Image from '@/assets/section-2.jpg';
import Section3Image from '@/assets/section-3.jpg';
import Section4Image from '@/assets/section-4.jpg';
import Section5Image from '@/assets/jana-green-background.jpg';
import Section6Image from '@/assets/section-6.jpg';
import Section8Image from '../contact/assets/contact.jpg';
import { Button, ButtonType } from '@/components/button.component';
import { links } from '@/navigation-entries';
import ContactFormular from '@/pages/contact/components/contact-formular.component';

export default function IndexPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/** section 1 */}
      <section
        className="relative text-hjg-whitesmoke bg-center flex items-center justify-center max-h-200 bg-cover lg:mx-8 mb-8"
        style={{ height: '80vh', backgroundImage: `url("${Section1Image}")` }}
      >
        {/* <img src={Section1Image} className="absolute z-0 opacity-50" /> */}
        <div className="flex items-center justify-center flex-col gap-4 z-10 max-w-150 text-center">
          <p className="text-sm">
            <Trans>Naturheilpraxis für Hormonbalance & Psychosomatik</Trans>
          </p>
          <h1 className="text-3xl lg:text-6xl">
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
      {/** section 2 */}
      <section className="lg:grid sm:grid-cols-2 grid-cols-1 text-hjg-dark-green mb-8">
        <img className="rounded-r-full" src={Section2Image} />
        <div className="lg:flex items-center justify-center mt-8 lg:mt-0 px-8">
          <div className="w-fit text-left">
            <p className="text-sm">
              <Trans>Ihr Körper spricht mit Ihnen. Ich helfe Ihnen, ihn zu verstehen.</Trans>
            </p>
            <div className="flex lg:block">
              <h2 className="text-2xl lg:text-5xl">
                <Trans>Therapieformen &</Trans>
              </h2>
              <h2 className="text-2xl lg:text-5xl">
                <Trans>Schwerpunkte</Trans>
              </h2>
            </div>

            <p>
              <ul className="mt-4 ml-4 list-disc">
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
              <Button type={ButtonType.OUTLINE_GREEN} className="mt-8">
                Jetzt Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/** section 3 */}
      <section
        className="flex items-center justify-center text-hjg-whitesmoke bg-center bg-cover"
        mb-8
        style={{ height: '50vh', backgroundImage: `url("${Section3Image}")` }}
      >
        <h1 className="text-3xl lg:text-6xl lg:max-w-2/3 p-16 text-center">
          <Trans>
            Keine zwei Menschen sind exakt gleich. Deshalb sind unsere Programme individuell gestaltet, um Sicherheit
            und Wirksamkeit zu gewährleisten.
          </Trans>
        </h1>
      </section>

      {/** section 4 */}
      <section className="bg-white lg:grid grid-cols-3 p:8 text-hjg-dark-green p-8 lg:py-32 lg:px-16">
        <div className="gap-4 flex flex-col lg:px-8 lg:pl-16 lg:pr-24 col-span-2 max-w-180">
          <h2 className="text<-2xl lg:text-5xl">
            <Trans>Warum Therapie helfen kann</Trans>
          </h2>
          <p>
            <Trans>
              Manche Beschwerden entstehen nicht „einfach so“. Sie sind oft Ausdruck eines Körpers, der aus dem
              Gleichgewicht geraten ist – hormonell, nervlich oder emotional. Stress, Überforderung, unverarbeitete
              Erfahrungen oder langanhaltende Belastungen können sich auf vielfältige Weise zeigen: in Erschöpfung,
              Schlafstörungen, Zyklusproblemen, innerer Unruhe oder psychosomatischen Symptomen.
            </Trans>
          </p>
          <p>
            <Trans>
              Ganzheitliche Therapie setzt genau hier an. Sie betrachtet nicht nur einzelne Symptome, sondern den
              Menschen als Ganzes. Ziel ist es, Ursachen zu erkennen, Regulationsprozesse zu unterstützen und dem Körper
              wieder Raum zu geben, in seine natürliche Balance zurückzufinden. Therapie kann helfen, Zusammenhänge zu
              verstehen, Selbstheilungskräfte zu aktivieren und neue Wege im Umgang mit sich selbst zu entwickeln.
            </Trans>
          </p>
        </div>

        <div className="flex items-center justify-center flex-col mt-16 lg:mt-0">
          <div
            className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128 lg:max-h-128 mb-8"
            style={{ height: '80vh', backgroundImage: `url("${Section4Image}")` }}
          />
          <div>
            <Button type={ButtonType.OUTLINE_GREEN} href={links.treatments.path}>
              <Trans>Behandlungen</Trans>
            </Button>
          </div>
        </div>
      </section>
      {/** section 5 */}
      <section className="bg-hjg-dark-green p-8 lg:pt-24 lg:px-24 flex flex-col items-center justify-center lg:grid grid-cols-2 text-white">
        <div
          className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128"
          style={{ height: '80vh', backgroundImage: `url("${Section5Image}")` }}
        />

        <div className="flex flex-col gap-8 lg:pl-24 mt-8 lg:mt-0">
          <h2 className="text-2xl lg:text-5xl">
            <Trans>Über mich</Trans>
          </h2>

          <p>
            <Trans>
              Ich bin staatlich geprüfte Hebamme, Heilpraktikerin und Hormonpraktikerin mit langjähriger Erfahrung in
              der Begleitung von Frauen, Familien und Menschen in sensiblen Lebensphasen.
            </Trans>
          </p>

          <p>
            <Trans>
              Mein therapeutischer Ansatz verbindet Naturheilkunde, Hormonbalance, Traditionelle Chinesische Medizin
              (TCM), Akupunktur und psychosomatische Verfahren. Dabei betrachte ich den Menschen immer ganzheitlich –
              mit Körper, Geist und Seele.
            </Trans>
          </p>

          <p>
            <Trans>
              Mein Ziel ist es, nicht nur Symptome zu behandeln, sondern Ursachen zu erkennen, Selbstheilungskräfte zu
              aktivieren und nachhaltige Gesundheit zu fördern.
            </Trans>
          </p>

          <div>
            <Button type={ButtonType.OUTLINE_WHITE} className="mt-8" href={links.aboutMe.path}>
              <Trans>Mehr erfahren</Trans>
            </Button>
          </div>
        </div>
      </section>

      {/** section 6 */}
      <section className="lg:grid grid-cols-2 p:8 text-hjg-dark-green p-8 lg:py-32 lg:px-16">
        <div className="flex items-center justify-center flex-col">
          <div
            className="w-full bg-center bg-cover rounded-t-full max-h-164 mb-8 max-w-124"
            style={{ height: '80vh', backgroundImage: `url("${Section6Image}")` }}
          />
          <div>
            <Button type={ButtonType.OUTLINE_GREEN} href={links.treatments.path}>
              <Trans>Behandlungsräume entdecken</Trans>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:px-8 mt-8 lg:mt-0">
          <h2 className="text-2xl lg:text-5xl mb-4">
            <Trans>Wofür meine Praxis steht</Trans>
          </h2>
          <div>
            <p className="font-bold">
              <Trans>Ganzheitlichkeit</Trans>
            </p>
            <div className="border-t border-hjg-dark-green w-full my-2" />
            <p>
              <Trans>
                Ich betrachte Körper, Geist und Seele als Einheit. Nachhaltige Veränderung entsteht, wenn alle Ebenen
                einbezogen werden.
              </Trans>
            </p>
          </div>
          <div>
            <p className="font-bold">
              <Trans>Individualität</Trans>
            </p>
            <div className="border-t border-hjg-dark-green w-full my-2" />
            <p>
              <Trans>
                Jeder Mensch ist einzigartig. Ihre Geschichte, Ihre Symptome und Ihre Ressourcen bestimmen den
                Therapieansatz – nicht ein Standardkonzept.
              </Trans>
            </p>
          </div>
          <div>
            <p className="font-bold">
              <Trans>Achtsamkeit & Wertschätzung</Trans>
            </p>
            <div className="border-t border-hjg-dark-green w-full my-2" />
            <p>
              <Trans>
                Jeder Mensch ist einzigartig. Ihre Geschichte, Ihre Symptome und Ihre Ressourcen bestimmen den
                Therapieansatz – nicht ein Standardkonzept.
              </Trans>
            </p>
          </div>
          <div>
            <p className="font-bold">
              <Trans>Ursachenorientiertes Arbeiten</Trans>
            </p>
            <div className="border-t border-hjg-dark-green w-full my-2" />
            <p>
              <Trans>
                Ich betrachte Körper, Geist und Seele als Einheit. Nachhaltige Veränderung entsteht, wenn alle Ebenen
                einbezogen werden.
              </Trans>
            </p>
          </div>
          <div>
            <p className="font-bold">
              <Trans>Hilfe zur Selbsthilfe</Trans>
            </p>
            <div className="border-t border-hjg-dark-green w-full my-2" />
            <p>
              <Trans>
                Mein Ziel ist es, Sie nicht abhängig von Therapie zu machen, sondern Sie in Ihre eigene Körperkompetenz
                und Selbstregulation zurückzuführen.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      {/** section 7 */}
      <section className="lg:grid grid-cols-2 p-8 mt-16 lg:mt-0 lg:gap-32 lg:p-16">
        <div>
          <h2 className="text-2xl lg:text-5xl mb-4">
            <Trans>Stimmen aus der Praxis</Trans>
          </h2>
          <div>
            <p>
              <Trans>
                Ein Stück Weg gemeinsam gegangen Jeder Mensch bringt seine eigene Geschichte mit. Umso dankbarer bin ich
                für das Vertrauen, das mir in meiner Praxis entgegengebracht wird. Die folgenden Rückmeldungen geben
                einen kleinen Einblick in die Erfahrungen von Menschen, die ich ein Stück auf ihrem Weg begleiten
                durfte.
              </Trans>
            </p>
          </div>
          <div className="mt-8">
            <p className="font-bold">Akupunktur & Schmerzen</p>
            <p>
              <Trans>
                „Ich bin wegen chronischer Verspannungen und Kopfschmerzen gekommen. Die Akupunktur war sehr sanft und
                gleichzeitig erstaunlich wirkungsvoll. Schon nach wenigen Sitzungen waren die Beschwerden deutlich
                reduziert. Besonders schätze ich die ruhige, zugewandte Art und die Zeit, die sich hier wirklich
                genommen wird.“
              </Trans>
            </p>
            <p className="italic">
              <Trans>-- Patientin, 34 Jahre</Trans>
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold">Hormonbalance & Erschöpfung</p>
            <p>
              <Trans>
                „Ich kam mit starker Erschöpfung, Zyklusproblemen und dem Gefühl, dass mein Körper nicht mehr ‚richtig
                funktioniert‘. Schon nach den ersten Terminen hatte ich das erste Mal das Gefühl, wirklich gesehen zu
                werden. Die ganzheitliche Herangehensweise, die ausführlichen Erklärungen und der individuell
                abgestimmte Therapieplan haben mir sehr geholfen. Heute fühle ich mich wieder deutlich stabiler,
                energiegeladener und verbundener mit meinem Körper.“
              </Trans>
            </p>
            <p className="italic">
              <Trans>-- Patient, 38 Jahre</Trans>
            </p>
          </div>
          <div className="mt-8">
            <p className="font-bold">Ganzheitliche Begleitung</p>
            <p>
              <Trans>
                Was diese Praxis für mich besonders macht, ist die Verbindung aus Fachwissen, Herz und echter
                Aufmerksamkeit. Ich hatte nie das Gefühl, nur ein Symptom zu sein. Jede Sitzung war ein Schritt zurück
                zu mehr Stabilität, Klarheit und innerer Ruhe.“
              </Trans>
            </p>
            <p className="italic">
              <Trans>-- Patientin, 56 Jahre</Trans>
            </p>
          </div>
        </div>
      </section>

      {/** section 9 */}
      <section className="lg:grid grid-cols-2 p-8 lg:p-16 gap-16">
        <div>
          <ContactFormular />
        </div>
        <div className="flex items-center justify-center flex-col">
          {' '}
          <div
            className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128"
            style={{ height: '80vh', backgroundImage: `url("${Section8Image}")` }}
          />
        </div>
      </section>
    </main>
  );
}
