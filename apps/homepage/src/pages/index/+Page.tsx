import { Banner } from '@/components/banner.component';
import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { ImageCard } from '@/components/image.component';
import { List } from '@/components/list.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import FTK_0008 from '@/final-assets/FTK_0008.jpg';
import FTK_0010 from '@/final-assets/FTK_0010.jpg';
import FTK_0026 from '@/final-assets/FTK_0026.jpg';
import FTK_0047 from '@/final-assets/FTK_0047.jpg';
import FTK_0050 from '@/final-assets/FTK_0050.jpg';
import FTK_0056 from '@/final-assets/FTK_0056.jpg';
import FTK_0060 from '@/final-assets/FTK_0060.jpg';
import FTK_0079 from '@/final-assets/FTK_0079.jpg';
import FTK_0081 from '@/final-assets/FTK_0081.jpg';
import HerbalImage from '@/final-assets/herbal.jpg';
import { links } from '@/navigation-entries';
import ContactFormular from '@/pages/contact/components/contact-formular.component';
import { Trans } from '@lingui/react/macro';

export default function IndexPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/** section 1 */}
      <Banner
        className="lg:mx-8 h-[40vh] text-hjg-dark-green lg:mb-8"
        image={FTK_0047}
        textPosition="left"
        glassEffect="true"
      >
        <TextContent className="text-sm">Naturheilpraxis für Hormonbalance & Psychosomatik</TextContent>
        <Header type="h2">Zurück in Ihre innere Balance – ganzheitlich & individuell begleitet</Header>
        <TextContent className="text-base">
          <Trans>
            Fühlen Sie sich aus dem Gleichgewicht geraten? Ich unterstütze Sie bei hormonellen Beschwerden, Stressfolgen
            und psychosomatischen Symptomen – für mehr Wohlbefinden, Klarheit und Lebensqualität.
          </Trans>
        </TextContent>

        <div>
          <Button type={ButtonType.FILLED_GREEN}>
            <Trans>Jetzt Erstgespräch vereinbaren</Trans>
          </Button>
        </div>
      </Banner>

      {/** section 2 */}
      <section className="text-hjg-dark-green lg:h-150 lg:mb-8 shadow-md">
        <TwoColumns
          leftClass="p-0"
          left={
            <div className="relative h-150 w-full lg:w-130">
              <ImageCard image={HerbalImage} size="small" className="absolute lg:top-5 lg:left-0 z-0" />
              <ImageCard image={FTK_0050} size="small" className="absolute lg:top-60 lg:left-40 z-10" />
              <ImageCard image={FTK_0010} size="small" className="absolute lg:top-20 lg:left-70 z-5" />
            </div>
          }
          rightClass="lg:max-w-150"
          right={
            <>
              <TextContent className="text-sm">
                Ihr Körper spricht mit Ihnen. Ich helfe Ihnen, ihn zu verstehen.
              </TextContent>
              <div className="flex lg:block">
                <Header type="h2">
                  <Trans>Therapieformen &</Trans>
                </Header>
                <Header type="h2">
                  <Trans>Schwerpunkte</Trans>
                </Header>
              </div>

              <List
                entries={[
                  'Phytotherapie & Adaptogene',
                  'Ganzheitliche Ernährungsberatung',
                  'Akupunktur, Ohrakupunktur & Akupressur',
                  'Reflexzonenmassage',
                  'Mykotherapie & Vitalstofftherapie',
                  'Hormonmassagen',
                  'Wirbelsäulentherapie nach Dorn & Breuß-Massage',
                  'Homöopathisch aufbereitete Hormonpräparate',
                  'Embodiment & psychosomatische Begleitung',
                ]}
              />

              <div>
                <Button type={ButtonType.OUTLINE_GREEN} href={links.treatments.path}>
                  Behandlungen
                </Button>
              </div>
            </>
          }
        />
      </section>
      {/** section 3 */}
      <Banner className="h-[40vh] text-hjg-whitesmoke" image={FTK_0056} textPosition="center" glassEffect="true">
        <Header type="h2" className="lg:max-w-3/4 text-center">
          Keine zwei Menschen sind exakt gleich. Deshalb gestalte ich meine Behandlungen individuell, um Sorgfalt und
          Sicherheit zu gewährleisten.
        </Header>
      </Banner>

      {/** section 4 */}
      <section className="text-hjg-dark-green lg:h-190 mb-8 bg-white shadow-md">
        <TwoColumns
          leftClass="lg:max-w-150"
          left={
            <>
              <Header type="h2">Warum Therapie helfen kann</Header>
              <TextContent>
                Manche Beschwerden entstehen nicht „einfach so“. Sie sind oft Ausdruck eines Körpers, der aus dem
                Gleichgewicht geraten ist – hormonell, nervlich oder emotional. Stress, Überforderung, unverarbeitete
                Erfahrungen oder langanhaltende Belastungen können sich auf vielfältige Weise zeigen: in Erschöpfung,
                Schlafstörungen, Zyklusproblemen, innerer Unruhe oder psychosomatischen Symptomen.
              </TextContent>
              <TextContent>
                Ganzheitliche Therapie setzt genau hier an. Sie betrachtet nicht nur einzelne Symptome, sondern den
                Menschen als Ganzes. Ziel ist es, Ursachen zu erkennen, Regulationsprozesse zu unterstützen und dem
                Körper wieder Raum zu geben, in seine natürliche Balance zurückzufinden. Therapie kann helfen,
                Zusammenhänge zu verstehen, Selbstheilungskräfte zu aktivieren und neue Wege im Umgang mit sich selbst
                zu entwickeln.
              </TextContent>
            </>
          }
          right={
            <div className="flex items-center flex-col">
              <div className="relative h-160 w-150">
                <ImageCard image={FTK_0060} size="small" className="absolute top-10 left-20 z-0" />
                <ImageCard image={FTK_0026} size="small" className="absolute top-70 left-70 z-5" />
              </div>
              <div>
                <Button type={ButtonType.OUTLINE_GREEN} href={links.treatments.path}>
                  Behandlungen
                </Button>
              </div>
            </div>
          }
        />
      </section>

      {/** section 5 */}
      <section className="text-hjg-dark-green shadow-md">
        <TwoColumns
          className="lg:h-190"
          leftClass="lg:max-w-150"
          left={
            <>
              <Header type="h2">Über mich</Header>

              <TextContent>
                <Trans>
                  Ich bin staatlich geprüfte Hebamme, Heilpraktikerin und Hormonpraktikerin mit langjähriger Erfahrung
                  in der Begleitung von Frauen, Familien und Menschen in sensiblen Lebensphasen.
                </Trans>
              </TextContent>

              <TextContent>
                <Trans>
                  Mein therapeutischer Ansatz verbindet Naturheilkunde, Hormonbalance, Traditionelle Chinesische Medizin
                  (TCM), Akupunktur und psychosomatische Verfahren. Dabei betrachte ich den Menschen immer ganzheitlich
                  – mit Körper, Geist und Seele.
                </Trans>
              </TextContent>

              <TextContent>
                <Trans>
                  Mein Ziel ist es, nicht nur Symptome zu behandeln, sondern Ursachen zu erkennen, Selbstheilungskräfte
                  zu aktivieren und nachhaltige Gesundheit zu fördern.
                </Trans>
              </TextContent>

              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div>
                  <Button type={ButtonType.OUTLINE_GREEN} href={links.aboutMe.path}>
                    <Trans>Mehr erfahren</Trans>
                  </Button>
                </div>
              </div>
            </>
          }
          right={
            <div className="h-160 w-130">
              <ImageCard image={FTK_0008} size="large" />
            </div>
          }
        />
      </section>

      {/** section 6 */}
      <section className="text-hjg-dark-green lg:h-190 shadow-md">
        <TwoColumns
          left={
            <div className="flex items-center flex-col">
              <div className="relative h-180 w-150">
                <ImageCard image={FTK_0079} size="medium" className="absolute top-10 left-20 z-0" />
                <ImageCard image={FTK_0081} size="medium" className="absolute top-70 left-70 z-5" />
              </div>
            </div>
          }
          rightClass="lg:max-w-150"
          right={
            <>
              <Header type="h2" className="mb-4">
                <Trans>Wofür meine Praxis steht</Trans>
              </Header>
              <div>
                <TextContent className="font-bold">
                  <Trans>Ganzheitlichkeit</Trans>
                </TextContent>
                <div className="border-t border-hjg-dark-green w-full my-2" />
                <TextContent>
                  <Trans>
                    Ich betrachte Körper, Geist und Seele als Einheit. Nachhaltige Veränderung entsteht, wenn alle
                    Ebenen einbezogen werden.
                  </Trans>
                </TextContent>
              </div>
              <div>
                <TextContent className="font-bold">
                  <Trans>Individualität</Trans>
                </TextContent>
                <div className="border-t border-hjg-dark-green w-full my-2" />
                <TextContent>
                  <Trans>
                    Jeder Mensch ist einzigartig. Ihre Geschichte, Ihre Symptome und Ihre Ressourcen bestimmen den
                    Therapieansatz – nicht ein Standardkonzept.
                  </Trans>
                </TextContent>
              </div>
              <div>
                <TextContent className="font-bold">
                  <Trans>Achtsamkeit & Wertschätzung</Trans>
                </TextContent>
                <div className="border-t border-hjg-dark-green w-full my-2" />
                <TextContent>
                  <Trans>
                    Jeder Mensch ist einzigartig. Ihre Geschichte, Ihre Symptome und Ihre Ressourcen bestimmen den
                    Therapieansatz – nicht ein Standardkonzept.
                  </Trans>
                </TextContent>
              </div>
              <div>
                <TextContent className="font-bold">
                  <Trans>Ursachenorientiertes Arbeiten</Trans>
                </TextContent>
                <div className="border-t border-hjg-dark-green w-full my-2" />
                <TextContent>
                  <Trans>
                    Ich betrachte Körper, Geist und Seele als Einheit. Nachhaltige Veränderung entsteht, wenn alle
                    Ebenen einbezogen werden.
                  </Trans>
                </TextContent>
              </div>
              <div>
                <TextContent className="font-bold">
                  <Trans>Hilfe zur Selbsthilfe</Trans>
                </TextContent>
                <div className="border-t border-hjg-dark-green w-full my-2" />
                <TextContent>
                  <Trans>
                    Mein Ziel ist es, Sie nicht abhängig von Therapie zu machen, sondern Sie in Ihre eigene
                    Körperkompetenz und Selbstregulation zurückzuführen.
                  </Trans>
                </TextContent>
              </div>
            </>
          }
        />
      </section>

      {/** section 7 */}
      <section className="text-hjg-dark-green shadow-md">
        <TwoColumns
          leftClass="lg:max-w-150"
          left={
            <>
              <Header type="h2" className="mb-4">
                <Trans>Stimmen aus der Praxis</Trans>
              </Header>
              <div>
                <TextContent>
                  <Trans>
                    Ein Stück Weg gemeinsam gegangen Jeder Mensch bringt seine eigene Geschichte mit. Umso dankbarer bin
                    ich für das Vertrauen, das mir in meiner Praxis entgegengebracht wird. Die folgenden Rückmeldungen
                    geben einen kleinen Einblick in die Erfahrungen von Menschen, die ich ein Stück auf ihrem Weg
                    begleiten durfte.
                  </Trans>
                </TextContent>
              </div>
              <div className="mt-8">
                <TextContent className="font-bold">Akupunktur & Schmerzen</TextContent>
                <TextContent>
                  <Trans>
                    „Ich bin wegen chronischer Verspannungen und Kopfschmerzen gekommen. Die Akupunktur war sehr sanft
                    und gleichzeitig erstaunlich wirkungsvoll. Schon nach wenigen Sitzungen waren die Beschwerden
                    deutlich reduziert. Besonders schätze ich die ruhige, zugewandte Art und die Zeit, die sich hier
                    wirklich genommen wird.“
                  </Trans>
                </TextContent>
                <TextContent className="italic">
                  <Trans>-- Patientin, 34 Jahre</Trans>
                </TextContent>
              </div>
            </>
          }
          rightClass="lg:max-w-150"
          right={
            <>
              <div>
                <TextContent className="font-bold">Hormonbalance & Erschöpfung</TextContent>
                <TextContent>
                  <Trans>
                    „Ich kam mit starker Erschöpfung, Zyklusproblemen und dem Gefühl, dass mein Körper nicht mehr
                    ‚richtig funktioniert‘. Schon nach den ersten Terminen hatte ich das erste Mal das Gefühl, wirklich
                    gesehen zu werden. Die ganzheitliche Herangehensweise, die ausführlichen Erklärungen und der
                    individuell abgestimmte Therapieplan haben mir sehr geholfen. Heute fühle ich mich wieder deutlich
                    stabiler, energiegeladener und verbundener mit meinem Körper.“
                  </Trans>
                </TextContent>
                <TextContent className="italic">
                  <Trans>-- Patient, 38 Jahre</Trans>
                </TextContent>
              </div>
              <div className="mt-8">
                <TextContent className="font-bold">Ganzheitliche Begleitung</TextContent>
                <TextContent>
                  <Trans>
                    Was diese Praxis für mich besonders macht, ist die Verbindung aus Fachwissen, Herz und echter
                    Aufmerksamkeit. Ich hatte nie das Gefühl, nur ein Symptom zu sein. Jede Sitzung war ein Schritt
                    zurück zu mehr Stabilität, Klarheit und innerer Ruhe.“
                  </Trans>
                </TextContent>
                <TextContent className="italic">
                  <Trans>-- Patientin, 56 Jahre</Trans>
                </TextContent>
              </div>
            </>
          }
        />
      </section>

      {/** section 9 */}
      <section className="shadow-md">
        <TwoColumns
          left={<ContactFormular />}
          right={
            <div className="h-160 w-130">
              <ImageCard image={FTK_0081} size="large" />
            </div>
          }
        />
      </section>
    </main>
  );
}
