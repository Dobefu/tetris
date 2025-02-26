<template>
  <TresCanvas clear-color="#000" preset="realistic" window-size>
    <TresPerspectiveCamera />

    <TresMesh>
      <TresBoxGeometry />
      <TresMeshPhongMaterial color="gray" />
    </TresMesh>

    <TresDirectionalLight v-light-helper />

    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
