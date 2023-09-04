function TurnCount({ player }: any) {
  return (
    <div className="glass p-4">
      <h1>{player ? "X" : "O"}'s move</h1>
    </div>
  );
}

export default TurnCount;
