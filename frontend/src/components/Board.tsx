import Box from "./Box";

function Board({ board, onClick }: any) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {board.map((value: string, idx: number) => {
        return (
          <Box
            value={value}
            onClick={() => value === null && onClick(idx)}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default Board;
