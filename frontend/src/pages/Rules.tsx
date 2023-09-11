function Rules() {
  return (
    <div className="glass m-4 p-8 text-gray-50">
      <h1 className="mb-4">Rules:</h1>
      <ul>
        <li className="mb-2">
          <strong>Game Setup:</strong>
          <ul>
            <li>
              Super Tic-Tac-Toe consists of a 3x3 grid, where each cell contains
              a regular 3x3 Tic-Tac-Toe board.
            </li>
            <li>
              The central grid is the "Super Board," and each of its cells
              represents a small Tic-Tac-Toe board.
            </li>
            <li>
              Players take turns marking a cell within one of the small
              Tic-Tac-Toe boards.
            </li>
            <li>The game starts with an empty Super Board.</li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Objective:</strong>
          <ul>
            <li>
              The objective of Super Tic-Tac-Toe is to win the Super Board by
              completing a line of three small Tic-Tac-Toe wins in a row,
              column, or diagonal.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Small Tic-Tac-Toe Boards:</strong>
          <ul>
            <li>
              To win a small Tic-Tac-Toe board, a player must place three of
              their marks (X or O) in a row, column, or diagonal.
            </li>
            <li>
              Once a small board is won or ends in a draw, it is considered
              "locked" and cannot be played in again.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Gameplay:</strong>
          <ul>
            <li>Players take turns, starting with X.</li>
            <li>
              On their turn, a player must make a move within a small
              Tic-Tac-Toe board.
            </li>
            <li>
              The cell they choose determines the next small board where their
              opponent must play.
            </li>
            <li>
              The chosen cell must be in an unlocked small board and must
              correspond to the small board where the opponent must play next.
            </li>
            <li>
              If a player is forced to play in a locked small board or a small
              board that is already won, they have to play in the next possible
              open board.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Winning the Game:</strong>
          <ul>
            <li>
              To win the Super Board, a player must complete a line of three
              controlled cells (horizontal, vertical, or diagonal) within the
              Super Board itself.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Game End:</strong>
          <ul>
            <li>
              The game ends when one player wins the Super Board or when all
              small Tic-Tac-Toe boards are locked or result in a draw.
            </li>
            <li>
              If the Super Board ends in a draw, the game is considered a tie.
            </li>
          </ul>
        </li>
        <li className="mb-2">
          <strong>Restarting the Game:</strong>
          <ul>
            <li>
              After the game ends, players restart with a new Super Board.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Rules;
