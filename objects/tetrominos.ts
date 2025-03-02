import type { TetrominoType } from '~/types/tetromino-type'
import type { TetrominoTypes } from '~/types/tetromino-types'

export const tetrominos: Record<TetrominoTypes, TetrominoType> = {
  I: {
    color: '#0cffff',
    cellCoords: [
      [3, 0, 0],
      [2, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
  },
  O: {
    color: '#ffff00',
    cellCoords: [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
  },
  T: {
    color: '#ff00ff',
    cellCoords: [
      [2, 1, 0],
      [0, 1, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
  },
  J: {
    color: '#0200ff',
    cellCoords: [
      [1, 2, 0],
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
  },
  L: {
    color: '#ff8100',
    cellCoords: [
      [0, 2, 0],
      [0, 1, 0],
      [0, 0, 0],
      [1, 0, 0],
    ],
  },
  S: {
    color: '#04ff00',
    cellCoords: [
      [1, 1, 0],
      [2, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
  },
  Z: {
    color: '#ff0200',
    cellCoords: [
      [1, 1, 0],
      [0, 1, 0],
      [1, 0, 0],
      [2, 0, 0],
    ],
  },
}
