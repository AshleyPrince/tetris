export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Sicher stellen das wir uns auf einer Tetromino-Zelle befinden
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Überprüfen, ob unser Zug innerhalb der Spielbereichshöheliegt. (y) 
          // Nicht durch den Boden des Spielbereiches
          !stage[y + player.pos.y + moveY] ||
          // 3. Unsere bewegung innerhalb des Spielfeldes (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Sicher stellen, dass die Zelle, zu der wir uns bewegen, nicht auf „Löschen“ gesetzt ist
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  // 5. Wenn alles oben falsch ist
  return false;
};