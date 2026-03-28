# Retro Arcade Games

A collection of 9 classic arcade games built entirely with HTML5 Canvas and vanilla JavaScript. No frameworks, no dependencies — just open `index.html` in a browser and play.

## Games

| Game | Description |
|------|-------------|
| **Frogger** | Cross roads and rivers to reach home |
| **Pac-Man** | Eat dots, avoid ghosts, chomp power pellets |
| **Space Invaders** | Defend Earth from alien invasion |
| **Asteroids** | Navigate and blast through asteroid fields |
| **Tetris** | Stack falling blocks, clear lines |
| **Breakout** | Smash bricks with a bouncing ball |
| **Snake** | Grow your snake, don't hit the walls |
| **Pong** | Classic paddle battle — first to 11 wins |
| **Centipede** | Blast the centipede through mushroom fields |

## Features

Every game includes:

- **AI Mode (Neural Override)** — Watch the AI play any game with a single toggle
- **3 Difficulty Levels** — Easy, Medium, Hard
- **Progressive Levels** — Increasing challenge as you advance
- **Chiptune Music** — Unique home and game tracks per game via Web Audio API
- **Sound Effects** — All actions have audio feedback
- **High Scores** — Top 10 Hall of Fame saved to localStorage
- **Mobile Support** — Touch controls, swipe gestures, and on-screen d-pad
- **Pause** — P key, Escape, or button
- **Retro Aesthetic** — Dark terminal style with neon glow effects

## Controls

| Key | Action |
|-----|--------|
| Arrow Keys | Move / Rotate |
| Space | Start / Fire / Launch / Hard Drop |
| P | Pause |
| N | Toggle Neural Override (AI) |
| E / M / H | Select difficulty (on menu) |
| Escape | Pause |

## How to Play

1. Open `index.html` in any modern browser
2. Pick a game from the arcade menu
3. Select difficulty and press Space or click Start Mission

## Tech

- Pure HTML5 Canvas rendering
- Web Audio API for all sound and music
- No build tools, no dependencies, no server required
- Each game is a single self-contained HTML file
- Frame-rate independent game loops
- localStorage for high score persistence
