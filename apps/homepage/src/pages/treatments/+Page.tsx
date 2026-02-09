import { PageWrapper } from '@/components/page-wrapper';
import { Trans } from '@lingui/react/macro';
import TreatmentsHeader from '@/assets/FTK_0001.jpg';
import AcupunctureImage from '@/assets/acupuncture.jpg';
import HormonBalanceImage from '@/assets/hormon-balance.jpg';
import PsychosomaticsImage from '@/assets/psychosomatics.jpg';
import { Link } from '@/components/link';
import { links } from '@/navigation-entries';
import { Header } from '@/components/header.component';
import { TextContent } from '@/components/text.component';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { HeaderImage } from '@/components/HeaderImage';

export default function TreamentsView() {
  const treatments = [
    {
      name: 'Hormonbalance',
      description: `Hormone steuern nahezu alle Prozesse in unserem Körper – von Energie, Schlaf und Gewicht bis Zyklus, Fruchtbarkeit und Stimmung. In meiner Praxis begleite ich Sie ganzheitlich bei hormonellen Dysbalancen, mit dem Ziel, Ursachen zu erkennen, Regulationsprozesse anzustoßen und Ihr hormonelles Gleichgewicht nachhaltig zu unterstützen.`,
      image: HormonBalanceImage,
      link: links.hormoneBalance.path,
    },

    {
      name: 'Psychosomatik',
      description: `Manche Beschwerden lassen sich organisch nicht ausreichend erklären. In der psychosomatischen Arbeit betrachten wir Symptome als sinnvolle Signale des Körpers – als Ausdruck innerer Prozesse. Ziel ist es, diese Botschaften zu verstehen, einzuordnen und neue Wege im Umgang mit ihnen zu finden.`,
      image: PsychosomaticsImage,
      link: links.psychosomatics.path,
    },
    {
      name: 'Akupunktur',
      description: `Akupunktur ist eine Regulationstherapie der Traditionellen Chinesischen Medizin. Sie bringt Energie ins Fließen, unterstützt Selbstheilungskräfte und hilft dem Körper, in sein Gleichgewicht zurückzufinden – sanft, ganzheitlich und individuell.`,
      image: AcupunctureImage,
      link: links.acupuncture.path,
    },
  ];

  return (
    <>
      <PageWrapper space="wide" className="max-w-350">
        <div className="lg:flex lg:mt-8 lg:mb-16">
          <Header className="max-w-120" type="h2">
            Ein Stueck auf dem Weg begleiten
          </Header>
          <div className="lg:flex items-center justify-center">
            <TextContent className="max-w-150">
              Jeder Mensch bringt seine eigene Geschichte, seine eigenen Symptome und seine eigenen Ressourcen mit – ich
              begegne Ihnen dort, wo Sie gerade stehen, und begleite Sie ein Stück auf Ihrem Weg zurück zu mehr Balance,
              Vertrauen und innerer Gesundheit.
            </TextContent>
          </div>
        </div>

        <HeaderImage className="lg:mb-16 my-8" height="30vh" image={TreatmentsHeader} />

        <div className="">
          <Header className="mb-8 lg:mb-0" type="h2">
            Behandlungen
          </Header>

          <div className="mt-0 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {treatments.map((treatment) => (
              <div key={treatment.name}>
                <div className="flex justify-center">
                  <div
                    className="w-full bg-center bg-cover rounded-t-full h-96 mb-4 max-w-90"
                    style={{ backgroundImage: `url("${treatment.image}")` }}
                  />
                </div>

                <Header type="b">{treatment.name}</Header>
                <TextContent>{treatment.description}</TextContent>

                <Link href={treatment.link} className="text-gray-600 mt-8 flex items-center">
                  <Trans>MEHR ERFAHREN</Trans>
                  <ArrowRightIcon className="size-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
