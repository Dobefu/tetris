<script setup lang="ts">
import type { Reactive } from 'vue'
import type { Tetromino } from '~/types/tetromino'

let currentTetromino: Reactive<Tetromino> | undefined
const dropTimer = shallowRef(0)

const { onBeforeRender } = useLoop()

onMounted(() => {
  currentTetromino = reactive(getNewTetromino())
})

onBeforeRender(({ delta }) => {
  dropTimer.value += delta

  if (dropTimer.value >= 1 && currentTetromino) {
    if (canTetrominoMove(currentTetromino, 0, 1)) {
      currentTetromino.y += 1
    }

    dropTimer.value = 0
  }
})
</script>

<template>
  <TresPerspectiveCamera :position="[0, 0, 50]" :look-at="[0, 0, 0]" />
  <OrbitControls />

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
    :delta-y="dropTimer"
  />
</template>
