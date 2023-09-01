import InnerBoard from "./InnerBoard";
import { useEffect, useState } from "react";

function FinalBoard() {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [playerX, setPlayerX] = useState(true);
  const [activateBoard, setActivateBoard] = useState(
    Math.floor(Math.random() * 9),
  );

  const receiveIdx = (index: number) => {
    setActivateBoard(index);
    console.log("inner index", activateBoard);
  };

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

    console.log("iner index", activateBoard);
    removeBoards();
  });

  const handleClick = (item, idx) => {
    console.log("clicked", idx);
  };

  return (
    <div className="h-screen w-screen grid grid-cols-3 grid-rows-3 gap-4">
      {boards.map((item, idx) => {
        return (
          <div onClick={() => handleClick(item, idx)} className={`boards`}>
            <InnerBoard
              player={playerX}
              setPlayer={setPlayerX}
              sendIdx={receiveIdx}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FinalBoard;
