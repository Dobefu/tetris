<script setup lang="ts">
import type { Tetromino } from '~/types/tetromino'

withDefaults(
  defineProps<{
    deltaY?: number
    isGhost?: boolean
    tetromino: Tetromino
  }>(),
  { deltaY: 0 },
)
</script>

<template>
  <TresGroup :position="[tetromino.x, -tetromino.y - deltaY, 0]">
    <Suspense>
      <TetrominoBlock
        v-for="cellPosition in tetromino.cells"
        :key="cellPosition"
        :color="tetromino.color"
        :position="cellPosition"
        :is-ghost="isGhost"
      />
    </Suspense>
  </TresGroup>
</template>
