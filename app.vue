<script setup lang="ts"></script>

<template>
  <TresCanvas clear-color="#000" preset="realistic" shadows window-size>
    <TresPerspectiveCamera :position="[0, 0, 50]" :look-at="[0, 0, 0]" />

    <TresMesh cast-shadow :position="[0, 0, 0]">
      <TresBoxGeometry />
      <TresMeshPhongMaterial color="gray" />
    </TresMesh>

    <TresMesh receive-shadow :scale="[10, 20, 1]" :position="[0, 0, -1]">
      <TresPlaneGeometry />
      <TresMeshPhongMaterial color="gray" />
    </TresMesh>

    <OrbitControls />

    <TresDirectionalLight
      cast-shadow
      :position="[-5, 10, 10]"
      :look-at="[0, 0, 0]"
      :intensity="1"
    />

    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
