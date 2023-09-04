function Scores({ scores }: any) {
  return (
    <div className=" p-4 rounded-md glass">
      <h2>Scores:</h2>
      <div>
        <h1 className="text-accent1-500">
          X:
          {scores.map((score: string) => {
            if (score === "X") {
              return "🏆 ";
            }
          })}
        </h1>
      </div>
      <div>
        <h1 className="text-accent2-100">
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
