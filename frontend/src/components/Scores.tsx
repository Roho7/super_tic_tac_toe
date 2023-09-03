function Scores({ scores }: any) {
  return (
    <div className="bg-light-200 p-4 rounded-md">
      <div>
        <h1>
          X:
          {scores.map((score: string) => {
            if (score === "X") {
              return "🏆 ";
            }
          })}
        </h1>
      </div>
      <div>
        <h1 className="text-accent2-500">
          O:
          {scores.map((score: string) => {
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
