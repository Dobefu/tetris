<script setup lang="ts"></script>

<template>
  <TresPerspectiveCamera :position="[0, 0, 50]" :look-at="[0, 0, 0]" />
  <OrbitControls />

  <TresAmbientLight :intensity="1" />
  <TresDirectionalLight
    cast-shadow
    :position="[-5, 10, 10]"
    :look-at="[0, 0, 0]"
    :intensity="1"
  />

  <Board />
  <TetriminoBlock :position="[0, 0, 0]" />
</template>
