<script setup lang="ts">
import type { Reactive, ShallowRef } from 'vue'
import type { Tetromino } from '~/types/tetromino'
import type { TetrominoTypes } from '~/types/tetromino-types'
import { tetrominos } from '~/objects/tetrominos'

const texture = (await useTexture({
  map: '/tetromino-block.png',
  normalMap: '/tetromino-block_normal.png',
})) as unknown as Awaited<ReturnType<typeof useTexture>>

const { isKeyDown, isKeyPressed } = useControls()
let moveTimerLeft = 0
let moveTimerRight = 0

const isGameOver = shallowRef(false)
const nextPieces: { type: TetrominoTypes }[] = []
const currentTetromino: ShallowRef<Reactive<Tetromino>> = shallowRef(
  reactive(getNewTetromino(nextPieces)),
)
const dropTimer = shallowRef(1)
const board: ShallowRef<TetrominoTypes | null>[][] = Array.from(
  { length: 40 },
  () => Array.from({ length: 10 }, () => shallowRef(null)),
)

const ghostTetromino = computed(() => {
  const tetromino = { ...currentTetromino.value }

  while (canTetrominoMove(tetromino, 0, 0, board)) {
    tetromino.y += 1
  }

  return tetromino
})

function moveCurrentTetromino(deltaX: number, deltaY: number) {
  currentTetromino.value.x += deltaX
  currentTetromino.value.y += deltaY
  currentTetromino.value.lockTime = 0

  if (canTetrominoMove(currentTetromino.value, deltaX, deltaY, board)) {
    if (currentTetromino.value.isGrounded === true) {
      dropTimer.value = 1
    }

    currentTetromino.value.isGrounded = false
  }
}

function rotateCurrentTetromino() {
  const newRotation = (currentTetromino.value.rotation + 1) % 4
  const rotatedTetromino = { ...currentTetromino.value }
  rotatedTetromino.cells = [
    ...tetrominos[currentTetromino.value.type].cellCoords[newRotation],
  ]

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (canTetrominoMove(rotatedTetromino, x, y, board)) {
        currentTetromino.value.rotation = newRotation
        currentTetromino.value.cells = rotatedTetromino.cells

        moveCurrentTetromino(x, y)
        return
      }
    }
  }

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (canTetrominoMove(rotatedTetromino, x, -y, board)) {
        currentTetromino.value.rotation = newRotation
        currentTetromino.value.cells = rotatedTetromino.cells

        moveCurrentTetromino(x, -y)
        return
      }
    }
  }

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (canTetrominoMove(rotatedTetromino, -x, -y, board)) {
        currentTetromino.value.rotation = newRotation
        currentTetromino.value.cells = rotatedTetromino.cells

        moveCurrentTetromino(-x, -y)
        return
      }
    }
  }
}

function clearRows(clearedRows: number = 0) {
  // Early return when 4 rows have been cleared already.
  if (clearedRows === 4) {
    return
  }

  for (let y = board.length - 1; y >= 0; y--) {
    let isRowFull = true
    let isRowEmpty = true

    for (const cell of board[y]) {
      if (!cell.value) {
        isRowFull = false
        break
      }

      isRowEmpty = false
    }

    // Early return when there's a row with no cells.
    // It should be impossible for any cells to be above this.
    if (isRowEmpty) {
      return
    }

    if (isRowFull) {
      for (let yy = y; yy > 0; yy--) {
        for (const x in board[yy]) {
          board[yy][x].value = board[yy - 1][x].value
        }
      }

      clearRows(clearedRows)
    }
  }
}

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
  if (isGameOver.value) {
    return
  }

  dropTimer.value += delta

  if (currentTetromino.value) {
    if (dropTimer.value >= 1) {
      if (canTetrominoMove(currentTetromino.value, 0, 1, board)) {
        currentTetromino.value.y += 1
      } else {
        currentTetromino.value.isGrounded = true
      }

      dropTimer.value = 0
    }

    if (currentTetromino.value.isGrounded) {
      currentTetromino.value.lockTime += delta

      if (currentTetromino.value.lockTime >= 0.5) {
        for (const cellCoords of currentTetromino.value.cells) {
          board[currentTetromino.value.y + cellCoords[1]][
            currentTetromino.value.x + cellCoords[0]
          ].value = currentTetromino.value.type as TetrominoTypes
        }

        clearRows()

        currentTetromino.value = reactive(getNewTetromino(nextPieces))

        if (!canTetrominoMove(currentTetromino.value, 0, 1, board)) {
          currentTetromino.value.isGrounded = true
        }

        if (!canTetrominoMove(currentTetromino.value, 0, 0, board)) {
          isGameOver.value = true
        }
      }
    } else {
      currentTetromino.value.lockTime = 0
    }

    if (isKeyDown('ArrowLeft')) {
      if (moveTimerLeft <= 0) {
        if (canTetrominoMove(currentTetromino.value, -1, 0, board)) {
          moveCurrentTetromino(-1, 0)
        }

        moveTimerLeft = 0.2
      } else {
        moveTimerLeft -= delta
      }
    } else {
      moveTimerLeft = 0
    }

    if (isKeyDown('ArrowRight')) {
      if (moveTimerRight <= 0) {
        if (canTetrominoMove(currentTetromino.value, 1, 0, board)) {
          moveCurrentTetromino(1, 0)
        }

        moveTimerRight = 0.2
      } else {
        moveTimerRight -= delta
      }
    } else {
      moveTimerRight = 0
    }

    if (isKeyDown('ArrowDown')) {
      dropTimer.value += 0.25
    }

    if (isKeyPressed('ArrowUp')) {
      rotateCurrentTetromino()
    }

    if (isKeyDown(' ')) {
      while (canTetrominoMove(currentTetromino.value, 0, 1, board)) {
        moveCurrentTetromino(0, 1)
      }

      dropTimer.value = 1
    }
  }
})
</script>

<template>
  <TresPerspectiveCamera :position="[0, 0, 50]" :look-at="[0, 0, 0]" />

  <TresAmbientLight :intensity="0.25" />
  <TresDirectionalLight
    cast-shadow
    :shadow-mapSize="[640, 1280]"
    :shadow-camera-top="10"
    :shadow-camera-bottom="-10"
    :shadow-camera-left="-6"
    :shadow-camera-right="6"
    :position="[-5, 10, 10]"
    :look-at="[0, 0, 0]"
    :intensity="0.5"
  />

  <Board />

  <TresGroup name="Fallen tetrominos">
    <template v-for="(boardRow, y) of board" :key="y">
      <template v-for="(_, x) of boardRow" :key="x">
        <TetrominoBlock
          v-if="!!board[y][x].value"
          :color="tetrominos[board[y][x].value].color"
          :position="[x, y + 1, 0]"
          :texture="texture"
        />
      </template>
    </template>
  </TresGroup>

  <Tetromino
    name="Current tetromino"
    :tetromino="currentTetromino"
    :delta-y="currentTetromino.isGrounded ? 1 : dropTimer"
    :texture="texture"
  />

  <Tetromino
    name="Ghost tetromino"
    :tetromino="ghostTetromino"
    is-ghost
    :texture="texture"
  />

  <ScenesGameOver v-if="isGameOver" />
</template>
