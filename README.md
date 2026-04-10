# Wayne's Retro Arcade

A collection of 18 classic arcade games built entirely with HTML5 Canvas and vanilla JavaScript. No frameworks, no dependencies — just open `index.html` in a browser and play.

**Live:** [waynetd777.github.io/arcade-games](https://waynetd777.github.io/arcade-games/)

<p align="center">
  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&bgcolor=111111&color=cccccc&data=https%3A%2F%2Fwaynetd777.github.io%2Farcade-games%2F" alt="QR Code — Scan to play" width="200">
  <br>
  <sub>Scan to play on your phone</sub>
</p>

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
| **Pong** | Classic paddle battle — 1P vs CPU or 2P local multiplayer |
| **Centipede** | Blast the centipede through mushroom fields |
| **Donkey Kong** | Climb girders, dodge barrels, rescue Pauline |
| **Prince of Persia** | Fight guards and escape the dungeon |
| **Dig Dug** | Tunnel underground, pump and pop enemies |
| **Galaga** | Blast diving aliens, rescue captured ships |
| **Q*bert** | Hop cubes, change colors, dodge Coily |
| **Missile Command** | Defend cities from nuclear annihilation |
| **Gorillas** | Hurl explosive bananas across the skyline |
| **Scorched Earth** | Destroy terrain and blast rival tanks |
| **Bomberman** | Plant bombs, chain reactions, defeat enemies |

## Features

Every game includes:

- **AI Mode** — Watch the AI play any game with a single toggle
- **3 Difficulty Levels** — Easy, Medium, Hard
- **Progressive Levels** — Increasing challenge as you advance
- **Distinctive Chiptune Music** — Unique waveforms, tempos, and keys per game via Web Audio API
- **Distinctive Sound Effects** — Each game has unique sfx waveforms and patterns
- **Global Mute** — Speaker icon toggle, synced across all games via localStorage
- **High Scores** — Top 10 Hall of Fame saved to localStorage
- **Responsive Design** — Scales to any screen size, works on phones and tablets
- **Mobile Support** — Touch controls, swipe gestures, on-screen d-pad, and haptic feedback
- **PWA / Install as App** — Add to home screen for a native app experience with offline support
- **Scanline Transitions** — Retro CRT-style wipe effect when navigating between pages
- **Particle Effects** — Glowing particles burst from game cards on hover
- **QR Code** — Scan the code on the index page to open on your phone
- **2-Player Pong** — Local multiplayer with P1 on arrows and P2 on W/S
- **Pause** — P key or button
- **ESC to Menu** — Press Escape on the home/game-over screen to return to the arcade menu
- **Retro Aesthetic** — Dark terminal style with neon glow effects

## Controls

| Key | Action |
|-----|--------|
| Arrow Keys | Move / Rotate |
| Space | Start / Fire / Launch / Hard Drop |
| P | Pause |
| A | Toggle AI |
| S | Toggle Sound |
| W / S | Player 1 — left paddle (Pong 2P mode) |
| Arrow Keys | Player 2 — right paddle (Pong 2P mode) |
| E / M / H | Select difficulty (on menu) |
| Escape | Return to arcade menu (on home/game-over screen) |

## How to Play

1. Open `index.html` in any modern browser (or visit the live site)
2. Pick a game from the arcade menu
3. Select difficulty and press Space or click Start
4. On mobile: add to home screen for the best experience

## Tech

- Pure HTML5 Canvas rendering
- Web Audio API for all sound and music
- Progressive Web App with service worker and offline caching
- No build tools, no dependencies, no server required
- Each game is a single self-contained HTML file
- Frame-rate independent game loops
- localStorage for high score and mute persistence
- Vibration API for haptic feedback on mobile
- Responsive CSS with mobile-first media queries
- GitHub Pages deployment
