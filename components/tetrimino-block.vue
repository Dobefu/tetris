<script setup lang="ts">
withDefaults(
  defineProps<{
    position?: Vector3;
  }>(),
  {
    position: [0, 0, 0],
  },
);
</script>

<template>
  <TresMesh cast-shadow :position="position">
    <TresBoxGeometry />
    <TresMeshToonMaterial color="red" />
  </TresMesh>
</template>
