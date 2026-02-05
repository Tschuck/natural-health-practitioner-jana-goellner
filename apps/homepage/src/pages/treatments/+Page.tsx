import { PageWrapper } from '@/components/page-wrapper';
import { Trans } from '@lingui/react/macro';
import TreatmentsHeader from '@/assets/FTK_0001.jpg';
import AcupunctureImage from '@/assets/acupuncture.jpg';
import HormonBalanceImage from '@/assets/hormon-balance.jpg';
import PsychosomaticsImage from '@/assets/psychosomatics.jpg';
import { Link } from '@/components/link';
import { links } from '@/navigation-entries';

export default function TreamentsView() {
  const treatments = [
    {
      name: 'Hormonbalance',
      description: `Hormone steuern nahezu alle Prozesse in unserem Körper – von Energie, Schlaf und Gewicht bis Zyklus, Fruchtbarkeit und Stimmung. In meiner Praxis begleite ich Sie ganzheitlich bei hormonellen Dysbalancen, mit dem Ziel, Ursachen zu erkennen, Regulationsprozesse anzustoßen und Ihr hormonelles Gleichgewicht nachhaltig zu unterstützen.`,
      image: AcupunctureImage,
    },

    {
      name: 'Psychosomatik',
      description: `Manche Beschwerden lassen sich organisch nicht ausreichend erklären. In der psychosomatischen Arbeit betrachten wir Symptome als sinnvolle Signale des Körpers – als Ausdruck innerer Prozesse. Ziel ist es, diese Botschaften zu verstehen, einzuordnen und neue Wege im Umgang mit ihnen zu finden.`,
      image: HormonBalanceImage,
    },
    {
      name: 'Akupunktur',
      description: `Akupunktur ist eine Regulationstherapie der Traditionellen Chinesischen Medizin. Sie bringt Energie ins Fließen, unterstützt Selbstheilungskräfte und hilft dem Körper, in sein Gleichgewicht zurückzufinden – sanft, ganzheitlich und individuell.`,
      image: PsychosomaticsImage,
    },
  ];

  return (
    <>
      <PageWrapper>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <h1>
              <Trans>Ein Stueck auf dem Weg begleiten</Trans>
            </h1>
          </div>
          <div className="col-span-1">
            <p>
              <Trans>
                Jeder Mensch bringt seine eigene Geschichte, seine eigenen Symptome und seine eigenen Ressourcen mit –
                ich begegne Ihnen dort, wo Sie gerade stehen, und begleite Sie ein Stück auf Ihrem Weg zurück zu mehr
                Balance, Vertrauen und innerer Gesundheit.
              </Trans>
            </p>
          </div>

          <div
            className="w-full bg-center bg-cover h-full opacity-70 absolute"
            style={{ height: '40vh', backgroundImage: `url("${TreatmentsHeader}")` }}
          />
        </div>

        <h2 className="text-2xl lg:text-5xl">
          <Trans>Behandlungen</Trans>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div key={treatment.name}>
              <div
                className="w-full bg-center bg-cover rounded-t-full max-h-164 max-w-128"
                style={{ backgroundImage: `url("${treatment.image}")` }}
              />

              <b className="font-bold">{treatment.image}</b>
              <p>{treatment.description}</p>

              <Link href={links.treatments.path}>
                <Trans>MEHR ERFAHREN</Trans>
              </Link>
            </div>
          ))}
        </div>
      </PageWrapper>
    </>
  );
}
