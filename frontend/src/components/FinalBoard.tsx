import InnerBoard from "./InnerBoard";
import { useEffect, useState, useRef } from "react";
import WIN_MATRIX from "../utils/WIN_MATRIX";

type ValuesArray = (string | null)[];

const completedBoards: number[] = [];

function FinalBoard({ sendScores }) {
  const [boards, setBoards] = useState<ValuesArray>(Array(9).fill(null));
  const [playerX, setPlayerX] = useState(true);
  const [activateBoard, setActivateBoard] = useState(4);
  const [boardComplete, setBoardComplete] = useState(false);
  const indRef = useRef(0);
  const completeRef = useRef(false);

  // Receive data if the board is complete
  const receiveBoardComplete = (data: boolean) => {
    console.log("board complete", data);
    setBoardComplete(data);
  };

  useEffect(() => {
    indRef.current = activateBoard;
  });

  // Set active board to the clicked inner index
  const receiveIdx = (index: number, data: boolean) => {
    const correctIndex = indRef.current;
    console.log("second received", data, correctIndex);

    if (data) {
      completedBoards.push(correctIndex);
      console.log(completedBoards);
      if (completedBoards.includes(index)) {
        for (let i = 0; i < 9; i++) {
          if (!completedBoards.includes(i)) {
            setActivateBoard(i);
          }
        }
        setActivateBoard(index + 1);
      } else {
        setActivateBoard(index);
      }
    } else {
      if (completedBoards.includes(index)) {
        if (completedBoards.includes(index + 1)) {
          for (let i = 0; i < 9; i++) {
            if (!completedBoards.includes(i)) {
              setActivateBoard(i);
            }
          }
        } else {
          setActivateBoard(index + 1);
        }
      } else {
        setActivateBoard(index);
      }
    }
  };

  const receiveMatchWinner = (data: string) => {
    // Send board number and winner when one board win condition is met
    if (data != undefined) {
      // console.log("data", data);

      setTimeout(() => {
        setGameLog((prev) => ({
          ...prev,
          board: activateBoard,
          winner: "n",
        }));
        // console.log("match winner", gameLog);
        // console.log(data);
      }, 1000);
    }
  };

  // Deactivate all boards whose index doesn't match the
  // clicked button's index inside
  useEffect(() => {
    const selectBoards = document.querySelectorAll(".boards");

    const removeBoards = () =>
      setTimeout(() => {
        selectBoards.forEach((board, index) => {
          board.classList.remove("off");
          if (index !== activateBoard) {
            board.classList.add("off");
          }
        });
      }, 10);
    removeBoards();
  });

  // Handle the board click
  const handleClick = (_: any, boardIdx: number) => {
    const updateFinalBoard = boards.map((value, idx) => {
      if (idx === boardIdx) {
        return playerX === true ? "X" : "O";
      } else {
        return value;
      }
    });
    console.log("boards", boards);

    setBoards(updateFinalBoard);

    // checkFinalWinner(updateFinalBoard);
    sendScores(checkFinalWinner(updateFinalBoard));
    // console.log("final winer", finalWinner);
  };

  // Check who's the FINAL GAME WINNER

  const checkFinalWinner = (values: ValuesArray) => {
    for (let i = 0; i < WIN_MATRIX.length; i++) {
      const [x, y, z] = WIN_MATRIX[i];
      if (values[x] && values[x] === values[y] && values[y] === values[z]) {
        console.log("final winner", values[x]);
        return values[x];
      }
    }
  };

  return (
    <div className="h-screen w-1/2 grid grid-cols-3 grid-rows-3">
      {boards.map((item, idx) => {
        return (
          <div onClick={() => handleClick(item, idx)} className={`boards`}>
            <InnerBoard
              player={playerX}
              setPlayer={setPlayerX}
              sendIdx={receiveIdx}
              sendMatchWinner={receiveMatchWinner}
              sendBoardComplete={receiveBoardComplete}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FinalBoard;
