import AcupunctureImage from '@/assets/acupuncture.jpg';
import HormonBalanceImage from '@/assets/hormon-balance.jpg';
import PsychosomaticsImage from '@/assets/psychosomatics.jpg';
import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { PageWrapper } from '@/components/page-wrapper';
import { TextContent } from '@/components/text.component';
import { links } from '@/navigation-entries';

export default function DownloadsView() {
  const cards = [
    {
      name: 'Vorbereitungsbogen',
      description: `Dieser Bogen dient als Grundlage für unsere gemeinsame Arbeit. Er hilft Ihnen, Ihre Beschwerden, bisherigen Erfahrungen, Vorerkrankungen, Medikamente und Wünsche in Ruhe zu erfassen.
Ihre Angaben ermöglichen mir eine umfassende und ganzheitliche Einschätzung und schaffen eine wertvolle Basis für eine individuelle und zielführende Behandlung.`,
      image: HormonBalanceImage,
      link: links.hormoneBalance.path,
    },

    {
      name: 'Informationen zur Akupunkturbehandlung',
      description: `In diesem Dokument finden Sie wichtige Hinweise rund um die Akupunktur: Ablauf der Behandlung, mögliche Reaktionen, Verhalten vor und nach der Sitzung sowie Kontraindikationen.
      Der Bogen unterstützt Sie dabei, gut informiert in die Behandlung zu gehen und Ihren Körper bestmöglich auf die Akupunktur vorzubereiten.`,
      image: PsychosomaticsImage,
      link: links.psychosomatics.path,
    },
    {
      name: 'Therapie & Zusammenarbeit – Leitfaden',
      description: `Dieser Leitfaden gibt Ihnen einen Einblick in meine therapeutische Arbeitsweise. Sie erfahren, wie eine Behandlung in meiner Praxis aufgebaut ist, was mir in der Zusammenarbeit wichtig ist und wie Sie den Prozess aktiv unterstützen können.
      Er soll Orientierung geben, Vertrauen schaffen und deutlich machen, dass nachhaltige Veränderung ein gemeinsamer Weg ist.`,
      image: AcupunctureImage,
      link: links.acupuncture.path,
    },
  ];

  return (
    <>
      <PageWrapper space="wide" className="max-w-350">
        <div className="lg:flex lg:mt-8 lg:mb-16">
          <Header className="max-w-120" type="h2">
            Gut vorbereitet in die Behandlung
          </Header>
          <div className="lg:flex items-center justify-center">
            <div>
              <TextContent className="max-w-150">
                „Manche Schritte lassen sich leichter gehen, wenn man sich in Ruhe vorbereiten darf.“
              </TextContent>
              <TextContent className="max-w-150">
                Hier finden Sie wichtige Unterlagen, die Sie dabei unterstützen, sich entspannt und gut informiert auf
                Ihren Termin vorzubereiten. Die Bögen helfen mir, mir bereits vorab ein erstes Bild zu machen – und
                Ihnen, Ihre Anliegen, Symptome und Fragen bewusst zu sortieren.
              </TextContent>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-0 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {cards.map((card) => (
              <div key={card.name}>
                <div className="flex justify-center">
                  <div
                    className="w-full bg-center bg-cover rounded-t-full h-96 mb-4 max-w-90"
                    style={{ backgroundImage: `url("${card.image}")` }}
                  />
                </div>

                <Header type="b">{card.name}</Header>
                <TextContent>{card.description}</TextContent>

                <div className="mt-8">
                  <Button type={ButtonType.OUTLINE_GREEN} href={card.link}>
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
