import { useState } from "react";
import Board from "./Board";
import WIN_MATRIX from "../utils/WIN_MATRIX";

function InnerBoard({ player, setPlayer, sendIdx }) {
  const [values, setValues] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  // Update the board on every box click
  const handleBoxClick = (boxIdx: number) => {
    const updateBoard = values.map((value, idx) => {
      if (idx === boxIdx) {
        return player === true ? "X" : "O";
      } else {
        return value;
      }
    });

    sendIdx(boxIdx);

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

    setValues(updateBoard);
    setPlayer(!player);
  };

  // Compare with win matrix, print the winner if matches
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
    <div className="flex justify-center items-center">
      <div className="">
        <Board board={values} onClick={handleBoxClick} />
      </div>
    </div>
  );
}

export default InnerBoard;
