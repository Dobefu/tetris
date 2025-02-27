<script setup lang="ts">
import type { TetrominoType } from '~/types/tetromino-type'

const props = withDefaults(
  defineProps<{
    position?: Vector3
    type: TetrominoType
  }>(),
  { position: [0, 0, 0] },
)

const color = computed(() => {
  switch (props.type) {
    case 'I':
      return '#0cffff'
    case 'O':
      return '#ffff00'
    case 'T':
      return '#ff00ff'
    case 'J':
      return '#0200ff'
    case 'L':
      return '#ff8100'
    case 'S':
      return '#04ff00'
    case 'Z':
      return '#ff0200'
    default:
      return '#fff'
  }
})
</script>

<template>
  <TresMesh cast-shadow :position="position">
    <TresBoxGeometry />
    <TresMeshToonMaterial :color="color" />
  </TresMesh>
</template>
