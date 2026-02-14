import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { ImageCard } from '@/components/image.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import FTK_0020 from '@/assets/optimized/FTK_0020.webp';
import FTK_0043 from '@/assets/optimized/FTK_0043.webp';
import InfoAcupuncture from '@/assets/pdfs/Info-Akupunkturbehandlung.pdf';
import PreperationSheet from '@/assets/pdfs/Vorbereitungsbogen.pdf';
import { Trans } from '@lingui/react/macro';

export default function DownloadsView() {
  const cards = [
    {
      name: 'Vorbereitungsbogen',
      description: `Dieser Bogen dient als Grundlage für unsere gemeinsame Arbeit. Er hilft Ihnen, Ihre Beschwerden, bisherigen Erfahrungen, Vorerkrankungen, Medikamente und Wünsche in Ruhe zu erfassen.
Ihre Angaben ermöglichen mir eine umfassende und ganzheitliche Einschätzung und schaffen eine wertvolle Basis für eine individuelle und zielführende Behandlung.`,
      image: FTK_0020,
      link: PreperationSheet,
      downloadName: 'Vorbereitungsbogen.pdf',
    },
    {
      name: 'Informationen zur Akupunkturbehandlung',
      description: `In diesem Dokument finden Sie wichtige Hinweise rund um die Akupunktur: Ablauf der Behandlung, mögliche Reaktionen, Verhalten vor und nach der Sitzung sowie Kontraindikationen.
      Der Bogen unterstützt Sie dabei, gut informiert in die Behandlung zu gehen und Ihren Körper bestmöglich auf die Akupunktur vorzubereiten.`,
      image: FTK_0043,
      link: InfoAcupuncture,
      downloadName: 'Info-Akupunkturbehandlung.pdf',
    },
  ];

  return (
    <div className="">
      <TwoColumns
        leftAlign="start"
        left={
          <Header className="max-w-120" type="h2">
            Gut vorbereitet in die Behandlung
          </Header>
        }
        rightAlign="start"
        right={
          <>
            <TextContent>
              „Manche Schritte lassen sich leichter gehen, wenn man sich in Ruhe vorbereiten darf.“ Hier finden Sie
              wichtige Unterlagen, die Sie dabei unterstützen, sich entspannt und gut informiert auf Ihren Termin
              vorzubereiten. Die Bögen helfen mir, mir bereits vorab ein erstes Bild zu machen – und Ihnen, Ihre
              Anliegen, Symptome und Fragen bewusst zu sortieren.
            </TextContent>
          </>
        }
      />

      <div>
        {cards.map((card) => (
          <TwoColumns
            className="mt-8"
            key={card.name}
            leftClass={'p-0 aspect-4/3 max-w-[500px] lg:max-w-[400px] lg:max-h-none'}
            left={
              <>
                <ImageCard image={card.image} size="custom" className="w-full h-full" />
              </>
            }
            rightAlign="start"
            right={
              <>
                <Header type="b">{card.name}</Header>
                <TextContent>{card.description}</TextContent>
                <div>
                  <Button type={ButtonType.OUTLINE_GREEN} href={card.link} download={card.downloadName} target="_blank">
                    <Trans>Download</Trans>
                  </Button>
                </div>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
