<script setup lang="ts">
import type { Tetromino } from '~/types/tetromino'

withDefaults(
  defineProps<{
    tetromino: Tetromino
  }>(),
  {},
)
</script>

<template>
  <TresGroup :position="[tetromino.x - 5 + 0.5, -tetromino.y + 30 + 0.5, 0]">
    <Suspense>
      <TetrominoBlock
        v-for="cellPosition in tetromino.cells"
        :key="cellPosition"
        :position="cellPosition"
        :color="tetromino.color"
      />
    </Suspense>
  </TresGroup>
</template>
