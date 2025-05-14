import './style.css'

let gameOver = false;
let foodX: number, foodY: number; // Food starts at a different position each time.
let snakeX: number = 5, snakeY: number = 5; // Snake starts at the same position each time.
let snakeBody: Array<any> = []; // Treat the snake body like an empty array where a 'block' is added.
let directionX: number = 0, directionY: number = 0; // Variables needed for direction change.
let setIntervalId: number | undefined; // Needed to reset the game
let score: number = 0;

const gameArea = document.querySelector<HTMLDivElement>(".game-area");
const scoreElement = document.querySelector<HTMLSpanElement>("#score");
const upButton = document.getElementById('up') as HTMLButtonElement;
const downButton = document.getElementById('down') as HTMLButtonElement;
const leftButton = document.getElementById('left') as HTMLButtonElement;
const rightButton = document.getElementById('right') as HTMLButtonElement;
const restartButton = document.getElementById('restart') as HTMLButtonElement;

if (!gameArea || !scoreElement || !upButton || !downButton || !leftButton || !rightButton || !restartButton) {
  throw new Error('Some elements can not be found');
}

const changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1; // Gives a random x position on the grid of 30.
  foodY = Math.floor(Math.random() * 30) + 1; // The +1 shifts the range from 0-29 to 1-30.
};

const handleGameOver = () => { // Handle game over logic.
  clearInterval(setIntervalId); // Clears the timer.
  alert('Game Over! Press OK to replay...');
  location.reload(); // Reload the page to restart the game.
};

const changeDirection = (input: any) => { // Handle snake direction.
  const key = input.key || input.target.id; // Handle both keyboard input and button clicks.

  if (key === 'ArrowUp' || key === 'up') {
    if (directionY !== 1) {
      directionX = 0;
      directionY = -1;
    }
  } else if (key === 'ArrowDown' || key === 'down') {
    if (directionY !== -1) {
      directionX = 0;
      directionY = 1;
    }
  } else if (key === 'ArrowLeft' || key === 'left') {
    if (directionX !== 1) {
      directionX = -1;
      directionY = 0;
    }
  } else if (key === 'ArrowRight' || key === 'right') {
    if (directionX !== -1) {
      directionX = 1;
      directionY = 0;
    }
  }
};

const resetGame = () => {
  clearInterval(setIntervalId); // Stop the game loop
  gameOver = false; // Reset game-over state
  snakeX = 5;
  snakeY = 5;
  snakeBody = []; // Clear the snake body
  directionX = 0;
  directionY = 0;
  score = 0; // Reset score
  scoreElement.innerText = `Score: ${score}`; // Update score display
  changeFoodPosition(); // Reset food position
  setIntervalId = setInterval(initGame, 120); // Restart the game loop
};

const initGame = () => {
  if (gameOver) return handleGameOver(); // Stop the game if it's over.

  let htmlMarkup: string = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`; // Position the food

  if (snakeX === foodX && snakeY === foodY) { // If snake eats food
    changeFoodPosition();
    snakeBody.push([foodX, foodY]); // Add to snake body
    score += 1;

    scoreElement.innerText = `Score: ${score}`;
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    // Shift all segments of the snake backward
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY]; // Set snake head position

  // Update snake head position
  snakeX += directionX;
  snakeY += directionY;

  // Check if snake hits the walls
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true; // Game over if the snake hits the walls.
  }

  for (let i = 0; i < snakeBody.length; i++) {
    htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`; // Add snake body segments
    // Check if the snake runs into itself
    if (snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0] && i !== 0) {
      gameOver = true;
    }
  }

  gameArea.innerHTML = htmlMarkup; // Render the game area
};

changeFoodPosition();
setIntervalId = setInterval(initGame, 120); // Start the game loop

// Event listeners for keyboard and button input
document.addEventListener("keydown", changeDirection);
upButton.addEventListener('click', changeDirection);
downButton.addEventListener('click', changeDirection);
leftButton.addEventListener('click', changeDirection);
rightButton.addEventListener('click', changeDirection);
restartButton.addEventListener('click', resetGame);
