<script setup lang="ts"></script>

<template>
  <TresMesh receive-shadow :scale="[10, 20, 1]" :position="[0, 0, -0.5]">
    <TresPlaneGeometry />
    <TresMeshPhongMaterial color="#ccc" />
  </TresMesh>

  <TresMesh
    cast-shadow
    receive-shadow
    :scale="[0.5, 20, 1]"
    :position="[-5.25, 0, 0]"
  >
    <TresBoxGeometry />
    <TresMeshPhongMaterial color="#999" />
  </TresMesh>

  <TresMesh
    cast-shadow
    receive-shadow
    :scale="[0.5, 20, 1]"
    :position="[5.25, 0, 0]"
  >
    <TresBoxGeometry />
    <TresMeshPhongMaterial color="#999" />
  </TresMesh>

  <TresMesh
    cast-shadow
    receive-shadow
    :scale="[11, 0.5, 1]"
    :position="[0, -10.25, 0]"
  >
    <TresBoxGeometry />
    <TresMeshPhongMaterial color="#999" />
  </TresMesh>
</template>
