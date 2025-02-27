<script setup lang="ts"></script>

<template>
  <TresMesh receive-shadow :scale="[10, 20, 1]" :position="[0, 0, -0.5]">
    <TresPlaneGeometry />
    <TresMeshToonMaterial color="lightgray" />
  </TresMesh>

  <TresMesh :scale="[0.5, 20, 1]" :position="[-5.25, 0, 0]">
    <TresBoxGeometry />
    <TresMeshToonMaterial color="lightgray" />
  </TresMesh>

  <TresMesh :scale="[0.5, 20, 1]" :position="[5.25, 0, 0]">
    <TresBoxGeometry />
    <TresMeshToonMaterial color="lightgray" />
  </TresMesh>

  <TresMesh :scale="[11, 0.5, 1]" :position="[0, 10.25, 0]">
    <TresBoxGeometry />
    <TresMeshToonMaterial color="lightgray" />
  </TresMesh>

  <TresMesh :scale="[11, 0.5, 1]" :position="[0, -10.25, 0]">
    <TresBoxGeometry />
    <TresMeshToonMaterial color="lightgray" />
  </TresMesh>
</template>
