<script setup lang="ts">
import type { Reactive, ShallowRef } from 'vue'
import type { Tetromino } from '~/types/tetromino'

const currentTetromino: ShallowRef<Reactive<Tetromino>> = shallowRef(
  reactive(getNewTetromino()),
)
const dropTimer = shallowRef(0)
const board: (number | null)[][] = Array.from({ length: 40 }, () =>
  Array.from({ length: 10 }, () => null),
)

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
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
        currentTetromino.value = reactive(getNewTetromino())
        dropTimer.value = 0
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

  <!-- Current tetromino -->
  <Tetromino
    v-if="currentTetromino"
    :tetromino="currentTetromino"
    :delta-y="currentTetromino.isGrounded ? 1 : dropTimer"
  />
</template>
