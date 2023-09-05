type ValuesArray = (string | null)[];

interface ScoresProps {
  scores: ValuesArray;
}

function Scores({ scores }: ScoresProps) {
  return (
    <div className=" p-4 rounded-md glass">
      <h2>Scores:</h2>
      <div>
        <h1 className="text-accent1-500">
          X:
          {scores.map((score: null | string) => {
            if (score === "X") {
              return "🏆 ";
            }
          })}
        </h1>
      </div>
      <div>
        <h1 className="text-accent2-100">
          O:
          {scores.map((score: null | string) => {
            if (score === "O") {
              return "🏆 ";
            }
          })}
        </h1>
      </div>
    </div>
  );
}

export default Scores;
