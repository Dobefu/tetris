import type { TetrominoTypes } from './tetromino-types'

export interface Tetromino {
  x: number
  y: number
  type: TetrominoTypes
  rotation: number
  isGrounded: boolean
  color: string
  cells: Vector3
}
