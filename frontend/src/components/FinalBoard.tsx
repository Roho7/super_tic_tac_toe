import InnerBoard from "./InnerBoard";
import { useEffect, useState, useRef } from "react";
import WIN_MATRIX from "../utils/WIN_MATRIX";
import TurnCount from "./TurnCount";
import Scores from "./Scores";

type ValuesArray = (string | null)[];

const completedBoards: number[] = [];

function FinalBoard({ sendScores }: any) {
  const [boards, setBoards] = useState<ValuesArray>(Array(9).fill(null));
  const [playerX, setPlayerX] = useState(true);
  const [activateBoard, setActivateBoard] = useState(4);
  const [_, setBoardComplete] = useState(false);
  const indRef = useRef(0);
  const boardWinnerRef = useRef("");

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

  const receiveMatchWinner = (board: string) => {
    // Send board number and winner when one board win condition is met
    if (board) {
      boardWinnerRef.current = board;
    } else {
      boardWinnerRef.current = "";
    }
    console.log(
      "winner of board",
      indRef.current,
      "is",
      boardWinnerRef.current,
    );
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
  const handleClick = () => {
    // update board when one player in a board has won
    const updateFinalBoard = boards.map((value, idx) => {
      if (idx === activateBoard && boardWinnerRef.current != "") {
        return boardWinnerRef.current;
      } else {
        return value;
      }
    });
    console.log("boards", boards);

    setBoards(updateFinalBoard);

    sendScores(checkFinalWinner(updateFinalBoard));
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
    <>
      <div className="absolute left-10 top-10 flex flex-col gap-4">
        <TurnCount player={playerX} />
        <Scores scores={boards} />
      </div>
      <div className="h-screen w-1/2 grid grid-cols-3 grid-rows-3">
        {boards.map((_item, _idx) => {
          return (
            <div onClick={() => handleClick()} className={`boards`}>
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
    </>
  );
}

export default FinalBoard;
