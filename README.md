# Super Tic-Tac-Toe

Super tic-tac-toe is a modified game of tic-tac-toe where there are 9 tic-tac-toe boards nested within a larger tic-tac-toe board.

### Super Tic-Tac-Toe Rules:

1. **Game Setup**:
   - Super Tic-Tac-Toe consists of a 3x3 grid, where each cell contains a regular 3x3 Tic-Tac-Toe board.
   - The central grid is the "Super Board," and each of its cells represents a small Tic-Tac-Toe board.
   - Players take turns marking a cell within one of the small Tic-Tac-Toe boards.
   - The game starts with an empty Super Board.
2. **Objective**:
   - The objective of Super Tic-Tac-Toe is to win the Super Board by completing a line of three small Tic-Tac-Toe wins in a row, column, or diagonal.
3. **Small Tic-Tac-Toe Boards:**
   - To win a small Tic-Tac-Toe board, a player must place three of their marks (X or O) in a row, column, or diagonal.
   - Once a small board is won or ends in a draw, it is considered "locked" and cannot be played in again.
4. **Gameplay:**
   - Players take turns, starting with X.
   - On their turn, a player must make a move within a small Tic-Tac-Toe board.
   - The cell they choose determines the next small board where their opponent must play.
   - The chosen cell must be in an unlocked small board and must correspond to the small board where the opponent must play next.
   - If a player is forced to play in a locked small board or a small board that is already won, they can choose any open small board.
5. **Super Board Control:**
   - Winning a small Tic-Tac-Toe board grants a player control of that cell on the Super Board, marking it with their symbol (X or O).
   - The player who wins a small board gets to choose the next small board where their opponent must play.
   - If a player is forced to play in a small board with a controlled cell, their opponent can choose any open small board.
6. **Winning the Game:**
   - To win the Super Board, a player must complete a line of three controlled cells (horizontal, vertical, or diagonal) within the Super Board itself.
   - Once a player wins the Super Board or the entire Super Board is filled without a winner, the game ends.
7. **Game End:**
   - The game ends when one player wins the Super Board or when all small Tic-Tac-Toe boards are locked or result in a draw.
   - If the Super Board ends in a draw, the game is considered a tie.
8. **Restarting the Game:**
   - After the game ends, players can choose to restart with a new Super Board or continue playing additional rounds.

Super Tic-Tac-Toe combines strategy, tactics, and a larger board to create an engaging and challenging variation of the classic Tic-Tac-Toe game. Players must think strategically not only about individual small boards but also about controlling the Super Board to achieve victory.

## Project Details

This game logic was built using the **React** framework with **Typescript** as the language. For the styling, i used **TailwindCSS**. The backend was built using **Node.js, ExpressJS and SQL** for user authentication and storing game data. To communicated between the frontend and the backend, the middleware **Axios** was used.

The folder structure is distributed primarily into _Frontend_ and _Backend_. Inside the backend, the _src_ folder contains the backend server inside **index.ts**. Inside the frontend folder, all the client side code is stored. My react pages and components are stored inside folder labelled _pages_ and _components_ respectively.

### Pages

- **GamePage.tsx**
- **HomePage.tsx**
- **JoinGame.tsx**
- **Login.tsx**
- **Register.tsx**
- **StartGame.tsx**

### Components

- **Box.tsx**
  Returns a clickable box component that has a variable class one for X and another for O.
- **Board.tsx**
  Maps over all the individual boxes 9 times and returns a small board.
- **InnerBoard.tsx**
  Maps over all the boards 9 times and returns a bigger board component with all the small boards inside. Contains all the logic for each individual board. Keeps track of the board states, checks for when a board is completed and if a board has been won.
- **FinalBoard.tsx**
  Returns the complete outer board with all the logic that handles inner board states like deactivating and activating the correct boards and switching the player every alternate turn. Also keeps track of the winner.
- **Scores.tsx**
  Keeps track of the scores and returns a component that shows the scores.
- **TurnCount.tsx**
  Keeps track of the player and returns a component that shows the current player.
