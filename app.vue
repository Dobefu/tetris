<template>
  <TresCanvas clear-color="#000" shadows window-size render-mode="on-demand">
    <TresPerspectiveCamera :position="[0, 0, 50]" :look-at="[0, 0, 0]" />

    <TetriminoBlock :position="[0, 0, 0]" />

    <TresMesh receive-shadow :scale="[10, 20, 1]" :position="[0, 0, -0.5]">
      <TresPlaneGeometry />
      <TresMeshToonMaterial color="lightgray" />
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
