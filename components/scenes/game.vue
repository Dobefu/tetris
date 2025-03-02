<script setup lang="ts">
import type { Reactive, ShallowRef } from 'vue'
import type { Tetromino } from '~/types/tetromino'
import type { TetrominoTypes } from '~/types/tetromino-types'
import { tetrominos } from '~/objects/tetrominos'

const isGameOver = shallowRef(false)
const currentTetromino: ShallowRef<Reactive<Tetromino>> = shallowRef(
  reactive(getNewTetromino()),
)
const dropTimer = shallowRef(1)
const board: ShallowRef<TetrominoTypes | null>[][] = Array.from(
  { length: 40 },
  () => Array.from({ length: 10 }, () => shallowRef(null)),
)

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

        currentTetromino.value = reactive(getNewTetromino())

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

  <Suspense>
    <TresGroup name="Fallen tetrominos">
      <template v-for="(boardRow, y) of board" :key="y">
        <template v-for="(_, x) of boardRow" :key="x">
          <TetrominoBlock
            :is-visible="!!board[y][x].value"
            :color="
              board[y][x]?.value ? tetrominos[board[y][x].value].color : ''
            "
            :position="[x, y + 1, 0]"
          />
        </template>
      </template>
    </TresGroup>
  </Suspense>

  <Tetromino
    v-if="currentTetromino"
    name="Current tetromino"
    :tetromino="currentTetromino"
    :delta-y="currentTetromino.isGrounded ? 1 : dropTimer"
  />

  <Suspense>
    <ScenesGameOver v-if="isGameOver" />
  </Suspense>
</template>
