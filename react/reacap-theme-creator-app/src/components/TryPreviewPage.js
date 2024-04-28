import "./TryPreviewPage.css";

export default function TryPreviewPage({ theme, onClose }) {
  const colors = theme.colors.reduce(
    (acc, color) => ({
      ...acc,
      [color.role]: color.value,
    }),
    {}
  );

  return (
    <section
      className="preview-page"
      style={{
        "--primary": colors.primary,
        "--secondary": colors.secondary,
        "--surface": colors.surface,
        "--surface-on": colors["surface-on"],
      }}
    >
      <button className="test-page__button" onClick={onClose}>
        Close Preview
      </button>
      <h1 className="preview__title">{theme.name}</h1>
      <p className="preview__paragraph">
        Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf
        sich warten. Damit das Layout nun nicht nackt im Raume steht und sich
        klein und leer vorkommt, springe ich ein: der Blindtext. Genau zu diesem
        Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem
        Ipsum«, freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen. Denn
        esse est percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon
        die Güte haben, mich ein paar weitere Sätze lang zu begleiten, möchte
        ich diese Gelegenheit nutzen, Ihnen nicht nur als Lückenfüller zu
        dienen, sondern auf etwas hinzuweisen, dass besonders ist.
      </p>
      <p className="preview__paragraph">
        Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer
        würde ihm schon folgen, spät in der Nacht und dazu noch in dieser engen
        Gasse mitten im übel beleumundeten Hafenviertel? Gerade jetzt, wo er das
        Ding seines Lebens gedreht hatte und mit der Beute verschwinden wollte!
        Hatte einer seiner zahllosen Kollegen dieselbe Idee gehabt, ihn
        beobachtet und abgewartet, um ihn nun um die Früchte seiner Arbeit zu
        erleichtern? Oder gehörten die Schritte hinter ihm zu einem der
        unzähligen Gesetzeshüter dieser Stadt, und die stählerne Acht um seine
        Handgelenke würde gleich zuschnappen? Er konnte die Aufforderung stehen
        zu bleiben schon hören. Gehetzt sah er sich um. Plötzlich erblickte er
        den schmalen Durchgang. Blitzartig drehte er sich nach rechts und
        verschwand zwischen den beiden Gebäuden. Beinahe wäre er dabei über den
        umgestürzten Mülleimer gefallen, der mitten im Weg lag. Er versuchte,
        sich in der Dunkelheit seinen Weg zu ertasten und erstarrte:
      </p>
      <div>
        <button className="test-page__button test-page__button--outlined">
          contained
        </button>
        <button className="test-page__button test-page__button--outlined">
          outlined
        </button>
        <button className="test-page__button">primary</button>
        <button className="test-page__button test-page__button--secondary">
          secondary
        </button>
      </div>
    </section>
  );
}
