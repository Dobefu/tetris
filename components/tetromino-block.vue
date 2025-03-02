<script setup lang="ts">
withDefaults(
  defineProps<{
    color: string
    position?: Vector3
  }>(),
  { position: [0, 0, 0] },
)

const texture = await useTexture({
  map: '/tetromino-block.png',
  normalMap: '/tetromino-block_normal.png',
})
</script>

<template>
  <TresMesh
    cast-shadow
    receive-shadow
    :position="[position[0] - 5 + 0.5, -position[1] + 30 + 0.5, position[2]]"
  >
    <TresBoxGeometry />
    <TresMeshStandardMaterial
      :color="color"
      :map="texture.map"
      :normal-map="texture.normalMap"
    />
  </TresMesh>
</template>
