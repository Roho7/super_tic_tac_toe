import { useState } from "react";
import Board from "../components/Board";

function GamePage() {
  const WIN_MATRIX = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [values, setValues] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const handleBoxClick = (boxIdx: any) => {
    const updateBoard = values.map((value, idx) => {
      if (idx === boxIdx) {
        return playerX === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updateBoard);
    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      }
    }
    console.log(scores);
    setValues(updateBoard);
    setPlayerX(!playerX);
  };

  const checkWinner = (values) => {
    for (let i = 0; i < WIN_MATRIX.length; i++) {
      const [x, y, z] = WIN_MATRIX[i];
      if (values[x] && values[x] === values[y] && values[y] === values[z]) {
        console.log(values[x]);
        return values[x];
      }
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <Board board={values} onClick={handleBoxClick} />
      </div>
    </div>
  );
}

export default GamePage;
