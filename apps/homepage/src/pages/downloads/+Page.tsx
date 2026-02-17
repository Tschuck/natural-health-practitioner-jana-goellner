import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { ImageCard } from '@/components/image.component';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';
import FTK_0020 from '@/assets/optimized/FTK_0020.webp';
import PreperationSheetDownload from '@/assets/pdfs/Vorbereitungsbogen HP Hormone.pdf';
import MonthlyCicleDownload from '@/assets/pdfs/Monatszyklus.pdf';
import { Trans } from '@lingui/react/macro';

export default function DownloadsView() {
  const cards = [
    {
      name: 'Vorbereitungsbogen',
      description: `Dieser Bogen dient als Grundlage für unsere gemeinsame Arbeit. Er hilft Ihnen, Ihre Beschwerden, bisherigen Erfahrungen, Vorerkrankungen, Medikamente und Wünsche in Ruhe zu erfassen.
Ihre Angaben ermöglichen mir eine umfassende und ganzheitliche Einschätzung und schaffen eine wertvolle Basis für eine individuelle und zielführende Behandlung.`,
      image: FTK_0020,
      downloads: [
        { link: PreperationSheetDownload, downloadName: 'Vorbereitungsbogen HP Hormone.pdf' },
        { link: MonthlyCicleDownload, downloadName: 'Monatszyklus.pdf' },
      ],
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
                <div className="flex flex-col gap-4">
                  {card.downloads.map((download) => (
                    <div key={download.downloadName}>
                      <Button
                        type={ButtonType.OUTLINE_GREEN}
                        href={download.link}
                        download={download.downloadName}
                        target="_blank"
                      >
                        <Trans>Download</Trans> - {download.downloadName}
                      </Button>
                    </div>
                  ))}
                </div>
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
