# 🐍 SNAKE

## 🎯 Introduction

Welcome to **Snake**, a modern take on the classic arcade game!  
The objective is simple: guide your snake to eat as much food as possible, growing longer with each bite. But beware — colliding with the walls or your own tail will end the game.

As the snake grows, so does the challenge. With less room to move and a longer body to navigate, your reflexes and strategy will be put to the test.

---

## Demo

Please use the following link to play:

## 🔧 Technologies Used

HTML / CSS
TypeScript

## Building It

### 🖥️ HTML / CSS

-   A fixed-size square display for the snake and food elements.
-   The display scales proportionally between mobile and desktop devices.
-   A visible grid background for clearer snake movement.
-   On-screen controls:
    -   Directional buttons (Up, Down, Left, Right) for touchscreens.
    -   Restart button.
-   Random placement of both the snake and food on game start.
-   Score system:
    -   Current score counter.
    -   High score tracker (retains session high score).
-   A heading displaying the game title: **SNAKE**.

### ⚙️ TypeScript

#### 🐍 Game Setup

-   Create the snake head and the food.
-   Random initial positions for both the snake and food.
-   Ensure snake and food do not spawn on the same block.

#### 🎮 Controls

-   Listen for:
    -   On-screen directional button clicks (for mobile).
    -   Keyboard arrow keys (for desktop).
    -   Restart button clicks.

#### 🚦 Game State

-   Game starts in a static state; begins only after a directional input.
-   On restart:
    -   Reset snake to initial size.
    -   Reposition snake and food randomly.

#### 🧭 Movement

-   Snake moves at a consistent speed.
-   Prevent immediate reversal of direction (e.g., Up → Down is disallowed).
-   Movement should involve only the head moving first; the body follows.
-   Repeated inputs in the same direction should not accelerate the snake.

#### 🍏 Food & Scoring

-   When snake eats the food:
    -   Increase body size by one block.
    -   Reposition food randomly (not on snake).
    -   Update score.

#### 💀 Game Over Conditions

-   Collision with walls.
-   Collision with own body.

#### ⚠️ Possible Error States

-   Snake starts before any user input.
-   Snake and food spawn on the same block.
-   Snake moves out of grid bounds.

## 🚀 Future / Extra Features

-   🔊 Sound effects.
-   📈 Difficulty levels:
    -   Easy, Medium, Hard (based on movement speed).
-   🎛️ Difficulty selector dropdown before game starts.
-   🌐 No-wall mode:
    -   Snake wraps around to the opposite side of the grid.
-   ✨ Visual effects to set it apart from the traditional Snake.
-   🔄 Challenge mode:
    -   Opposite controls mode (Up is Down, Left is Right).
