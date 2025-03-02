<script setup lang="ts">
import type { Tetromino } from '~/types/tetromino'

let currentTetromino = reactive<Tetromino | object>({})

function getNewTetromino() {
  currentTetromino = {
    x: 3,
    y: 19,
    type: 'I',
    rotation: 0,
  }
}

onMounted(() => {
  getNewTetromino()
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
    v-if="'type' in currentTetromino"
    :position="[
      currentTetromino.x - 5 + 0.5,
      -currentTetromino.y + 30 + 0.5,
      0,
    ]"
    :type="currentTetromino.type"
  />
</template>
