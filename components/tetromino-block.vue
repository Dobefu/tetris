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

const texture = await useTexture({
  map: '/tetromino-block.png',
  normalMap: '/tetromino-block_normal.png',
})
</script>

<template>
  <TresMesh cast-shadow :position="position">
    <TresBoxGeometry />
    <TresMeshMatcapMaterial
      :color="color"
      :map="texture.map"
      :normal-map="texture.normalMap"
    />
  </TresMesh>
</template>
