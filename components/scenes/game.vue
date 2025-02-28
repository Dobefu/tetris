<script setup lang="ts"></script>

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
  <Tetromino :position="[0, 4.5, 0]" type="I" />
  <Tetromino :position="[0, 3.5, 0]" type="O" />
  <Tetromino :position="[0, 1.5, 0]" type="T" />
  <Tetromino :position="[0, -0.5, 0]" type="J" />
  <Tetromino :position="[0, -3.5, 0]" type="L" />
  <Tetromino :position="[0, -6.5, 0]" type="S" />
  <Tetromino :position="[0, -8.5, 0]" type="Z" />
</template>
