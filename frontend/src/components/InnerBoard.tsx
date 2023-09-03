import { useState } from "react";
import Board from "./Board";
import WIN_MATRIX from "../utils/WIN_MATRIX";

function InnerBoard({
  player,
  setPlayer,
  sendIdx,
  sendMatchWinner,
  sendBoardComplete,
}) {
  const [values, setValues] = useState(Array(9).fill(null));

  // Update the board on every box click
  const handleBoxClick = (boxIdx: number) => {
    const updateBoard = values.map((value, idx) => {
      if (idx === boxIdx) {
        return player === true ? "X" : "O";
      } else {
        return value;
      }
    });

    // Send the inner button's index and its completed info to the parent board
    sendIdx(boxIdx, checkBoardCompletion(values));

    // Check the winner in every click
    const winner = checkWinner(updateBoard);

    sendMatchWinner(winner);
    setValues(updateBoard);
    setPlayer(!player);
  };

  // Declaration of checkWinner
  // Compare with win matrix, print the winner if matches
  const checkWinner = (values) => {
    for (let i = 0; i < WIN_MATRIX.length; i++) {
      const [x, y, z] = WIN_MATRIX[i];
      if (values[x] && values[x] === values[y] && values[y] === values[z]) {
        console.log(values[x]);
        return values[x];
      } else {
        return null;
      }
    }
  };

  //Check if a board is completed
  const checkBoardCompletion = (values) => {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] != null) {
        count += 1;
      } else {
        count += 0;
      }
    }
    if (count == values.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex justify-center items-center gap-8 w-fu">
      <div className="p-2 bg-[#ffd7c4] border rounded-md">
        <Board board={values} onClick={handleBoxClick} />
      </div>
    </div>
  );
}

export default InnerBoard;
