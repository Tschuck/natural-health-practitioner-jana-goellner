import { Header } from '@/components/header.component';
import { ImageCard } from '@/components/image.component';
import { Link } from '@/components/link';
import { PageWrapper } from '@/components/page-wrapper';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import FTK_0019 from '@/assets/optimized/FTK_0019.webp';
import FTK_0020 from '@/assets/optimized/FTK_0020.webp';
import Herbal from '@/assets/optimized/herbal.webp';
import FTK_0043 from '@/assets/optimized/FTK_0043.webp';
import { links } from '@/navigation-entries';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Trans } from '@lingui/react/macro';
import { Button, ButtonType } from '@/components/button.component';

export default function TreamentsView() {
  const treatments = [
    {
      name: 'Hormonbalance',
      description: `Hormone steuern nahezu alle Prozesse in unserem Körper – von Energie, Schlaf und Gewicht bis Zyklus, Fruchtbarkeit und Stimmung. In meiner Praxis begleite ich Sie ganzheitlich bei hormonellen Dysbalancen, mit dem Ziel, Ursachen zu erkennen, Regulationsprozesse anzustoßen und Ihr hormonelles Gleichgewicht nachhaltig zu unterstützen.`,
      image: FTK_0020,
      link: links.hormoneBalance.path,
    },

    {
      name: 'Psychosomatik',
      description: `Manche Beschwerden lassen sich organisch nicht ausreichend erklären. In der psychosomatischen Arbeit betrachten wir Symptome als sinnvolle Signale des Körpers – als Ausdruck innerer Prozesse. Ziel ist es, diese Botschaften zu verstehen, einzuordnen und neue Wege im Umgang mit ihnen zu finden.`,
      image: Herbal,
      link: links.psychosomatics.path,
    },
    {
      name: 'Akupunktur',
      description: `Akupunktur ist eine Regulationstherapie der Traditionellen Chinesischen Medizin. Sie bringt Energie ins Fließen, unterstützt Selbstheilungskräfte und hilft dem Körper, in sein Gleichgewicht zurückzufinden – sanft, ganzheitlich und individuell.`,
      image: FTK_0043,
      link: links.acupuncture.path,
    },
  ];

  return (
    <>
      <section className=" mt-4 lg:mt-16">
        <TwoColumns
          leftAlign="start"
          left={
            <>
              <Header type="h2">Ein Stück auf dem Weg begleiten</Header>

              <TextContent>
                <Trans>
                  Jeder Mensch bringt seine eigene Geschichte, seine eigenen Symptome und seine eigenen Ressourcen mit –
                  ich begegne Ihnen dort, wo Sie gerade stehen, und begleite Sie ein Stück auf Ihrem Weg zurück zu mehr
                  Balance, Vertrauen und innerer Gesundheit.
                </Trans>
              </TextContent>
            </>
          }
          rightClass={'p-0 aspect-5/3 max-w-[500px] lg:max-w-[650px] lg:max-h-none'}
          right={
            <>
              <ImageCard image={FTK_0019} size="custom" className="w-full h-full" />
            </>
          }
        />
      </section>

      <PageWrapper>
        <Header className="mb-8 lg:mb-0 " type="h2">
          Behandlungen
        </Header>

        <div className="mt-0 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {treatments.map((treatment) => (
            <div key={treatment.name}>
              <ImageCard image={treatment.image} size="custom" className="aspect-8/9 mb-8 max-w-120" />

              <div className="max-w-120">
                <Header type="b">{treatment.name}</Header>
                <TextContent>{treatment.description}</TextContent>

                <Link href={treatment.link} className="text-gray-600 mt-8 items-center hidden lg:flex">
                  <Trans>MEHR ERFAHREN</Trans>
                  <ArrowRightIcon className="size-4 ml-2" />
                </Link>

                <div className="mt-8 lg:hidden">
                  <Button type={ButtonType.OUTLINE_GREEN} href={treatment.link}>
                    <Trans>MEHR ERFAHREN</Trans>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
