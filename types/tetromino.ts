import type { TetrominoType } from './tetromino-type'

export interface Tetromino {
  x: number
  y: number
  type: TetrominoType
  rotation: number
}
