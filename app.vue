<template>
  <TresCanvas
    clear-color="#000"
    preset="realistic"
    window-size
    render-mode="on-demand"
  >
    <Suspense>
      <ScenesGame />

      <template #fallback>
        <TresPerspectiveCamera />
      </template>
    </Suspense>
  </TresCanvas>
</template>
