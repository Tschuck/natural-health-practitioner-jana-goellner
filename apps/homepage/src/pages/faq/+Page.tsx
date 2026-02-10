import { Button, ButtonType } from '@/components/button.component';
import { Header } from '@/components/header.component';
import { PageWrapper } from '@/components/page-wrapper';
import { TextContent } from '@/components/text.component';
import { TwoColumns } from '@/components/two-columns.component';

export default function FaqView() {
  return (
    <>
      <div className="lg:flex items-center justify-center">
        <div className="lg:flex lg:mt-8 lg:mb-16">
          <Header className="max-w-120" type="h2">
            Vertrauen beginnt mit Klarheit
          </Header>
          <div className="max-w-150">
            <TextContent>
              Ein neuer Weg bringt oft Fragen mit sich. Auf dieser Seite finden Sie Antworten auf die häufigsten
              organisatorischen und inhaltlichen Fragen rund um meine Arbeitsweise, den Ablauf der Behandlungen und die
              Rahmenbedingungen meiner Praxis.
            </TextContent>
            <TextContent>
              Sollte Ihre Frage hier nicht beantwortet werden, sprechen Sie mich gern persönlich an.
            </TextContent>
          </div>
        </div>
      </div>
      <PageWrapper space="wide" className="max-w-350">
        <TwoColumns
          left={
            <div className="flex flex-col gap-8">
              <div>
                <Header type="b">Wie läuft der erste Termin ab?</Header>
                <TextContent>
                  Der erste Termin dient dem ausführlichen Kennenlernen. Wir besprechen Ihre aktuellen Beschwerden, Ihre
                  gesundheitliche Vorgeschichte, Ihre Ziele und Ihre Lebensumstände.
                </TextContent>
                <TextContent>
                  Je nach Anliegen erfolgt eine umfassende Anamnese, ggf. eine körperliche Untersuchung sowie die
                  Planung weiterer diagnostischer Schritte (z.B. Labor, hormonelle Diagnostik, Schilddrüsenultraschall).
                </TextContent>
                <TextContent>Auf dieser Basis erstelle ich ein individuelles Behandlungskonzept.</TextContent>
              </div>
              <div>
                <Header type="b">Wie viele Sitzungen sind sinnvoll?</Header>
                <TextContent>
                  Das ist individuell sehr unterschiedlich und hängt von Ihrem Anliegen, der Dauer der Beschwerden und
                  Ihren persönlichen Zielen ab.
                </TextContent>
                <TextContent>
                  Manche Themen lassen sich mit wenigen Sitzungen gut begleiten, andere benötigen eine längerfristige
                  Unterstützung. Mir ist wichtig, transparent zu arbeiten und den Behandlungsverlauf regelmäßig
                  gemeinsam mit Ihnen zu reflektieren.
                </TextContent>
              </div>
              <div>
                <Header type="b">Für wen ist Akupunktur geeignet – und für wen nicht?</Header>
                <TextContent>
                  Akupunktur kann sehr vielseitig eingesetzt werden, z.B. bei Schmerzen, hormonellen Dysbalancen,
                  psychosomatischen Beschwerden oder funktionellen Störungen.
                </TextContent>
                <TextContent>
                  Nicht geeignet ist sie u.a. bei schweren psychischen Erkrankungen, akuten Psychosen, Epilepsie,
                  hochwirksamer Blutverdünnung oder schweren Tumorerkrankungen. Dies kläre ich immer sorgfältig im
                  Rahmen der Anamnese ab.
                </TextContent>
              </div>
              <div>
                <Header type="b">Was bedeutet „ganzheitliche Begleitung“ konkret?</Header>
                <TextContent>
                  Ganzheitlich bedeutet für mich, Sie nicht auf ein einzelnes Symptom zu reduzieren. Ich beziehe
                  körperliche, hormonelle, emotionale und lebenspraktische Aspekte in die Behandlung ein. Ziel ist es,
                  Zusammenhänge zu verstehen, Regulationsprozesse zu fördern und nachhaltige Veränderungen zu
                  ermöglichen.
                </TextContent>
              </div>
              <div>
                <Header type="b">Wie lange dauert eine Sitzung?</Header>
                <TextContent>
                  Die Dauer richtet sich nach Art des Termins. Der Ersttermin nimmt in der Regel mehr Zeit in Anspruch
                  als Folgetermine. Genaue Zeitrahmen teile ich Ihnen vor der Terminvereinbarung transparent mit.
                </TextContent>
              </div>
            </div>
          }
          right={
            <div className="flex flex-col gap-8">
              <div>
                <Header type="b">Muss ich vorab etwas vorbereiten?</Header>
                <TextContent>
                  Ja, sehr gern. Auf der Download-Seite finden Sie einen Vorbereitungsbogen, den Sie in Ruhe zu Hause
                  ausfüllen können. Dieser hilft Ihnen, Ihre Beschwerden und Fragen zu sortieren, und ermöglicht mir,
                  mir bereits vor dem ersten Termin ein ganzheitliches Bild zu machen.
                </TextContent>
                <Button type={ButtonType.OUTLINE_GREEN}>Download</Button>
              </div>
              <div>
                <Header type="b">Arbeiten Sie schulmedizinisch begleitend?</Header>
                <TextContent>
                  Ja. Meine Arbeit versteht sich als Ergänzung zur Schulmedizin. Ich empfehle ausdrücklich, relevante
                  Beschwerden ärztlich abklären zu lassen. Bestehende Diagnosen, Laborwerte und Befunde beziehe ich gern
                  in die Behandlung mit ein.
                </TextContent>
              </div>
              <div>
                <Header type="b">Übernimmt die Krankenkasse die Kosten?</Header>
                <TextContent>
                  Heilpraktikerleistungen werden in der Regel nicht von den gesetzlichen Krankenkassen übernommen.
                  Private Krankenversicherungen oder Zusatzversicherungen erstatten die Kosten je nach Tarif ganz oder
                  teilweise. Bitte informieren Sie sich hierzu vorab bei Ihrer Versicherung.
                </TextContent>
              </div>
              <div>
                <Header type="b">Kann ich auch kommen, wenn keine klare Diagnose vorliegt?</Header>
                <TextContent>
                  Ja. Gerade bei unklaren, wechselnden oder psychosomatischen Beschwerden ist eine ganzheitliche
                  Betrachtung sinnvoll. Voraussetzung ist, dass ernsthafte organische Ursachen ärztlich abgeklärt
                  wurden.
                </TextContent>
              </div>
              <div>
                <Header type="b">Was ist, wenn ich unsicher bin, ob Ihr Angebot zu mir passt?</Header>
                <TextContent>
                  Gern können wir vorab kurz klären, ob Ihr Anliegen in meinen Praxisrahmen fällt. Nicht jedes Thema ist
                  für jede Therapieform geeignet – Offenheit und Ehrlichkeit sind mir hier sehr wichtig.
                </TextContent>
              </div>
            </div>
          }
        />
      </PageWrapper>
    </>
  );
}
