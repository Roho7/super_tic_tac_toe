# Super Tic-Tac-Toe

#### Video Demo: [https://www.youtube.com/watch?v=l-zyL2GjFZM]

#### Description:

Super tic-tac-toe is a modified game of tic-tac-toe where there are 9 tic-tac-toe boards nested within a larger tic-tac-toe board.

**Super Tic-Tac-Toe Rules:**

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
   - If a player is forced to play in a locked small board or a small board that is already won, they have to play in the next possible open board.
5. **Winning the Game:**
   - To win the Super Board, a player must complete a line of three controlled cells (horizontal, vertical, or diagonal) within the Super Board itself.
   - Once a player wins the Super Board or the entire Super Board is filled without a winner, the game ends.
6. **Game End:**
   - The game ends when one player wins the Super Board or when all small Tic-Tac-Toe boards are locked or result in a draw.
   - If the Super Board ends in a draw, the game is considered a tie.
7. **Restarting the Game:**
   - After the game ends, players restart with a new Super Board.

Super Tic-Tac-Toe combines strategy, tactics, and a larger board to create an engaging and challenging variation of the classic Tic-Tac-Toe game. Players must think strategically not only about individual small boards but also about controlling the Super Board to achieve victory.

## Project Details

This game logic was built using the **React** framework with **Typescript** as the language. For the styling, I used **TailwindCSS**.
The Routing was acheived using React-router-dom. The development server used to build this project was **Vite**.

My react pages and components are stored inside folder labelled _pages_ and _components_ respectively.

### Pages

- **GamePage.tsx**
  Exists at "/play" route. Contains the actual game.
- **HomePage.tsx**
  Exists at "/" route. The home of my project. Contains a button to route to "/play".

### Components

- **Box.tsx**
  Returns a clickable box component that has a variable class one for X and another for O.
- **Board.tsx**
  Maps over all the individual boxes 9 times and returns a small board.
- **InnerBoard.tsx**
  Contains an array of 9 items initially filled with null values, this array is passed down to the Board component. The array is updated with every click with an X or an O to keep track of every board's state. This component also calculates the completion of a board and if a board has been won. It passes on this data to the parent board.
- **FinalBoard.tsx**
  Contains a array of 9 items initially filled with null values. Returns the complete outer board after mapping over the InnerBoard component 9 times. Contains the logic for activating and deactivating the correct board. Matches the index of the cell with the index of the InnerBoard. Updates the array with an X and O every time a board is won. Passes the scores to the score component and keeps track of the current player and allows alteration.
- **Scores.tsx**
  Receives the scores information as prop from FinalBoard. Keeps track of the scores and returns a component that shows the scores.
- **TurnCount.tsx**
  Receives the player information as prop from FinalBoard. Keeps track of the player and returns a component that shows the current player.

### Utils:

- **WIN_MATRIX:**
  Contains a nested array of all possible win combinations. Used to match with each individual board to find individual board wins and also with the super board.

### Anecdotes

Initially my aim was to create a multiplayer super-tic-tac-toe game which could be deployed to the web and two players could play in real time. But because I built the game logic to be calculated in client side, and also a few design choices I made in react to actually make the game behave the way correct way, making a backend for this became impossible. To create a server which could store game data, I couldn't just use client side rendering, I would have to use a different design approach which seemed overwhelming at my level. Hence, I stuck with my version of this app which can be deployed to the web easily and played on a single browser.
