<script setup lang="ts">
import type { TetrominoType } from '~/types/tetromino-type'

const props = withDefaults(
  defineProps<{
    position?: Vector3
    type: TetrominoType
  }>(),
  { position: [0, 0, 0] },
)

const blockCoords = computed<Vector3[]>(() => {
  switch (props.type) {
    case 'I':
      return [
        [2, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
        [-1, 0, 0],
      ]
    case 'O':
      return [
        [0, 0, 0],
        [1, 0, 0],
        [0, -1, 0],
        [1, -1, 0],
      ]
    case 'T':
      return [
        [1, 0, 0],
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, 0],
      ]
    case 'J':
      return [
        [0, 0, 0],
        [0, -1, 0],
        [0, -2, 0],
        [-1, -2, 0],
      ]
    case 'L':
      return [
        [0, 0, 0],
        [0, -1, 0],
        [0, -2, 0],
        [1, -2, 0],
      ]
    case 'S':
      return [
        [0, 0, 0],
        [1, 0, 0],
        [0, -1, 0],
        [-1, -1, 0],
      ]
    case 'Z':
      return [
        [0, 0, 0],
        [-1, 0, 0],
        [0, -1, 0],
        [1, -1, 0],
      ]
    default:
      return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]
  }
})
</script>

<template>
  <TresGroup :position="position">
    <TetrominoBlock
      v-for="blockCoord in blockCoords"
      :key="blockCoord"
      :position="blockCoord"
      :type="type"
    />
  </TresGroup>
</template>
