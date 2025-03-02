import type { Tetromino } from '~/types/tetromino'
import type { TetrominoTypes } from '~/types/tetromino-types'
import { tetrominos } from '~/objects/tetrominos'

export function getNewTetromino(): Tetromino {
  return {
    x: 3,
    y: 19,
    type: 'I' as TetrominoTypes,
    rotation: 0,
    isGrounded: false,
    lockTime: 0,
    color: tetrominos.I.color,
    cells: [...tetrominos.I.cellCoords],
  }
}
