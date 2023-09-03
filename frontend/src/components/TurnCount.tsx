function TurnCount({ player }: any) {
  return (
    <div className=" bg-light-200 p-4 rounded-md">
      <h1>{player ? "X" : "O"}'s move</h1>
    </div>
  );
}

export default TurnCount;
