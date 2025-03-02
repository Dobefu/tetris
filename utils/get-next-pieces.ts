import type { TetrominoTypes } from '~/types/tetromino-types'
import { tetrominos } from '~/objects/tetrominos'

export function getNextPieces(nextPieces: { type: TetrominoTypes }[]) {
  const bag: typeof nextPieces = []

  for (let i = 0; i < 7; i++) {
    const type = Object.keys(tetrominos)[i] as TetrominoTypes

    bag.push({ type })
  }

  let index = bag.length
  let randomIndex: number

  while (index > 0) {
    randomIndex = Math.floor(Math.random() * index)
    index--
    ;[bag[index], bag[randomIndex]] = [bag[randomIndex], bag[index]]
  }

  nextPieces.push(...bag)
}
