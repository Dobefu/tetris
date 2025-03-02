import type { Tetromino } from '~/types/tetromino'
import type { TetrominoType } from '~/types/tetromino-type'

export function getNewTetromino(): Tetromino {
  return {
    x: 3,
    y: 19,
    type: 'I' as TetrominoType,
    rotation: 0,
  }
}
