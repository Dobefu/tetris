<script setup lang="ts">
withDefaults(
  defineProps<{
    color: string
    position?: Vector3
    isGhost?: boolean
    texture: Awaited<ReturnType<typeof useTexture>>
  }>(),
  { position: [0, 0, 0], isVisible: true },
)
</script>

<template>
  <TresMesh
    :cast-shadow="!isGhost"
    :receive-shadow="!isGhost"
    :position="[position[0] - 5 + 0.5, -position[1] + 30 + 0.5, position[2]]"
  >
    <TresBoxGeometry />
    <TresMeshStandardMaterial
      :color="color"
      :map="texture.map"
      :normal-map="texture.normalMap"
      :transparent="isGhost"
      :opacity="isGhost ? 0.5 : 1"
    />
  </TresMesh>
</template>
