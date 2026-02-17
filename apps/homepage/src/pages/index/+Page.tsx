import FTK_0008 from '@/assets/optimized/FTK_0008.webp';
import FTK_0010 from '@/assets/optimized/FTK_0010.webp';
import FTK_0043 from '@/assets/optimized/FTK_0043.webp';
import FTK_0047 from '@/assets/optimized/FTK_0047.webp';
import FTK_0050 from '@/assets/optimized/FTK_0050.webp';
import FTK_0056 from '@/assets/optimized/FTK_0056.webp';
import FTK_0060 from '@/assets/optimized/FTK_0060.webp';
import FTK_0079 from '@/assets/optimized/FTK_0079.webp';
import FTK_0081 from '@/assets/optimized/FTK_0081.webp';
import HerbalImage from '@/assets/optimized/herbal.webp';
import { Banner } from '@/components/banner.component';
import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { ImageCard } from '@/components/image.component';
import { List } from '@/components/list.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import { links } from '@/navigation-entries';
import ContactView from '@/pages/contact/+Page';
import { Trans } from '@lingui/react/macro';

export default function IndexPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/** section 1 */}
      <Banner
        className="lg:mx-8 text-hjg-dark-green"
        image={FTK_0047}
        textPosition="left"
        bgPosition="bg-top"
        imageClass="opacity-70"
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

        <div className="mt-4">
          <Button type={ButtonType.FILLED_GREEN} href={links.contact.path}>
            <Trans>Jetzt Erstgespräch vereinbaren</Trans>
          </Button>
        </div>
      </Banner>

      {/** section 2 */}
      <section className=" shadow-md  lg:py-16">
        <TwoColumns
          leftClass={'p-0 aspect-square max-w-[500px] lg:max-w-[700px] lg:max-h-none'}
          left={
            <>
              {/**
               * left and right 5% margin
               * 3 images, but on is overlapping with 2/3 -> 2 1/3 images needed
               * width = 90% / 2 1/3 = 39%
               * left base = 5%
               * image 1 -> 5% (left first image) + (39 * 0.7) = 32%
               * image 2 -> 32% (left second image) + (39 * 0.66) = 62%
               */}
              <ImageCard
                image={HerbalImage}
                size="custom"
                className="absolute z-0 w-[39%] h-[60%] left-[5%] top-[0%]"
              />
              <ImageCard image={FTK_0050} size="custom" className="absolute z-5 w-[39%] h-[60%] left-[32%] top-[40%]" />
              <ImageCard image={FTK_0010} size="custom" className="absolute z-0 w-[39%] h-[60%] left-[57%] top-[10%]" />
            </>
          }
          right={
            <>
              <TextContent className="text-sm">
                Ihr Körper spricht mit Ihnen. Ich helfe Ihnen, ihn zu verstehen.
              </TextContent>
              <div className="flex lg:block">
                <Header type="h2">
                  <Trans>Therapieformen & Schwerpunkte</Trans>
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
      <Banner className="text-hjg-whitesmoke" image={FTK_0056} textPosition="center" glassEffect="true">
        <Header type="h2" className="lg:max-w-3/4 text-center">
          Keine zwei Menschen sind exakt gleich. Deshalb gestalte ich meine Behandlungen individuell, um Sorgfalt und
          Sicherheit zu gewährleisten.
        </Header>
      </Banner>

      {/** section 4 */}
      <section className=" bg-white shadow-md lg:py-16">
        <TwoColumns
          left={
            <>
              <Header type="h2">Wie Therapie helfen kann</Header>
              <TextContent>
                Manche Beschwerden entstehen nicht „einfach so". Sie sind oft Ausdruck eines Körpers, der aus dem
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
              <div>
                <Button type={ButtonType.OUTLINE_GREEN} href={links.treatments.path}>
                  Behandlungen
                </Button>
              </div>
            </>
          }
          rightClass={'p-0 aspect-3/4 max-w-[500px] lg:max-w-[650px] lg:max-h-none'}
          right={
            <>
              <ImageCard
                image={FTK_0060}
                size="custom"
                className="absolute z-0 w-[50%] h-[50%] left-[0%] lg:left-[5%] top-[5%]"
              />
              <ImageCard
                image={FTK_0043}
                size="custom"
                className="absolute z-5 w-[50%] h-[50%] left-[35%] lg:left-[45%] top-[45%]"
              />
            </>
          }
        />
      </section>

      {/** section 5 */}
      <section className=" shadow-md lg:py-16">
        <TwoColumns
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

              <div className="flex items-start justify-start mt-8 lg:mt-0">
                <div>
                  <Button type={ButtonType.OUTLINE_GREEN} href={links.aboutMe.path}>
                    <Trans>Mehr erfahren</Trans>
                  </Button>
                </div>
              </div>
            </>
          }
          rightClass={'p-0 aspect-3/4 max-w-[500px] lg:max-w-[650px] lg:max-h-none'}
          right={
            <>
              <ImageCard image={FTK_0008} size="custom" className="absolute z-0 w-[90%] h-[90%] left-[5%] top-[5%]" />
            </>
          }
        />
      </section>

      {/** section 6 */}
      <section className=" shadow-md lg:py-16">
        <TwoColumns
          leftClass={'p-0 aspect-3/4 max-w-[500px] lg:max-w-[650px] lg:max-h-none'}
          left={
            <>
              <ImageCard
                image={FTK_0079}
                size="custom"
                className="absolute z-0 w-[60%] h-[60%] left-[0%] lg:left-[5%] top-[0%]"
              />
              <ImageCard
                image={FTK_0081}
                size="custom"
                className="absolute z-5 w-[60%] h-[60%] left-[35%] lg:left-[45%] top-[40%]"
              />
            </>
          }
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
                  <Trans>Zeit für Ihre Anliegen, Wünsche und Ziele- in Ihrem Tempo.</Trans>
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
                    Ich möchte nicht "einfach nur Symptome lindern", sondern den Ursprüngen der Beschwerden auf den
                    Grund gehen um eine nachhaltige Änderung zu bewirken.
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
      <section className=" shadow-md  lg:py-16">
        <TwoColumns
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
                    wirklich genommen wird."
                  </Trans>
                </TextContent>
                <TextContent className="italic">
                  <Trans>-- Lisa, 34 Jahre</Trans>
                </TextContent>
              </div>
            </>
          }
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
                  <Trans>-- Julia, 38 Jahre</Trans>
                </TextContent>
              </div>
              <div className="mt-8">
                <TextContent className="font-bold">Blutdruck & Blutwerte</TextContent>
                <TextContent>
                  <Trans>
                    „Ich kam mit erhöhtem Blutdruck, Muskelverspannungen und auffälligen Blutwerten. Wir haben alle
                    Ursachen abgetestet und mit Hilfe eines Bluttests, meine Schwachpunkte gefunden. Die Ernährungstipps
                    und Empfehlungen zu Nahrungsergänzung waren sehr hilfreich. Mein Blutdruck hat sich stabilisiert und
                    die Verspannungen sind dank Akupunktur besser geworden."
                  </Trans>
                </TextContent>
                <TextContent className="italic">
                  <Trans>-- Tobias, 32 Jahre</Trans>
                </TextContent>
              </div>
            </>
          }
        />
      </section>

      {/** section 9 */}
      {/* <section className="shadow-md lg:py-16"> */}
      {/* <TwoColumns
          left={<ContactFormular />}
          rightClass={'p-0 aspect-3/4 max-w-[500px] lg:max-w-[650px] lg:max-h-none'}
          right={
            <>
              <ImageCard image={FTK_0081} size="custom" className="absolute z-0 w-[90%] h-[90%] left-[5%] top-[5%]" />
            </>
          }
        /> */}
      <ContactView />
      {/* </section> */}
    </main>
  );
}
