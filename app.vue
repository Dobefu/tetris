<template>
  <TresCanvas clear-color="#000" shadows window-size render-mode="on-demand">
    <TresPerspectiveCamera :position="[0, 0, 50]" :look-at="[0, 0, 0]" />

    <TetriminoBlock :position="[0, 0, 0]" />

    <Board />

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
