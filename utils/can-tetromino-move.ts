import type { Tetromino } from '~/types/tetromino'

export function canTetrominoMove(
  tetromino: Tetromino,
  deltaX: number,
  deltaY: number,
  board: number[][],
) {
  if (!tetromino) {
    return false
  }

  for (const cellCoords of tetromino.cells) {
    const newX: number = tetromino.x + deltaX + cellCoords[0]
    const newY: number = tetromino.y + deltaY + cellCoords[1]

    if (
      newX < 0 ||
      newX >= board[0].length ||
      newY < 0 ||
      newY >= board.length
    ) {
      return false
    }
  }

  return true
}
