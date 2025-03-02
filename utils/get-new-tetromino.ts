import type { Tetromino } from '~/types/tetromino'
import type { TetrominoTypes } from '~/types/tetromino-types'
import { tetrominos } from '~/objects/tetrominos'

export function getNewTetromino(): Tetromino {
  const type = 'I' as TetrominoTypes
  return {
    x: 3,
    y: 19,
    type,
    rotation: 0,
    isGrounded: false,
    lockTime: 0,
    color: tetrominos[type].color,
    cells: [...tetrominos[type].cellCoords[0]],
  }
}
